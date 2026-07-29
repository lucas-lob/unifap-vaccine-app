import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import { Input } from "@/components/atoms/Input";
import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import Button from "@/components/atoms/Button";
import { COLOR } from "@/style/tokens";
import { useAuth } from "@/hooks/useAuth";

import { FORM_INITIAL_VALUES, loginFormSchema } from "./schema";
import { styles } from "./styles";

import type { ILoginForm } from "./schema";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null)

  const { loading, checkAuth } = useAuth()
  const router = useRouter()
  const { control, handleSubmit, getValues } = useForm<ILoginForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(loginFormSchema)
  })

  const onSubmit = async () => {
    setError(null)
    const { email, password } = getValues()

    const authStatus = await checkAuth(email, password)

    if (authStatus === 'NOT_FOUND') {
      setError('Email ou senha incorreto')
    } else {
      router.replace('/(tabs)/(stories)')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          render={({
            field: { value, onChange },
            fieldState: { error }
          }) => (
            <Input
              label="Email"
              LabelIcon={Mail}
              labelIconConfigs={{ color: COLOR.BLUE_DARK }}
              placeholder="Digite seu e-mail"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({
            field: { value, onChange },
            fieldState: { error }
          }) => (
            <Input
              label="Senha"
              LabelIcon={Lock}
              labelIconConfigs={{ color: COLOR.GREEN_DARK }}
              placeholder="Digite sua senha"
              value={value}
              onChangeText={onChange}
              error={error?.message}
              secureTextEntry
            />
          )}
        />
      </View>

      <View>{error && <ErrorMessage message={error} />}</View>

      <View style={styles.actionsContainer}>
        <Button
          label="Entrar"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          disabled={loading}
        />

        <Button
          label="Voltar"
          variant="primary-outline"
          onPress={() => { router.replace('/(auth)') }}
          disabled={loading}
        />
      </View>
    </View>
  )
}