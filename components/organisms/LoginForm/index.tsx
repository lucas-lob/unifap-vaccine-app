import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";

import { Input } from "@/components/atoms/Input";
import { COLOR } from "@/style/tokens";

import { FORM_INITIAL_VALUES, loginFormSchema } from "./schema";

import Button from "@/components/atoms/Button";
import type { ILoginForm } from "./schema";
import { styles } from "./styles";

export function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, handleSubmit, getValues } = useForm<ILoginForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(loginFormSchema)
  })

  const onSubmit = async () => {
    setLoading(true)

    // Requisition simulation
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000))

    console.log('Valores', getValues());
    setLoading(false)
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
            />
          )}
        />
      </View>

      <View>{/* Divider */}</View>

      <Button
        label="Entrar"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
      />
    </View>
  )
}