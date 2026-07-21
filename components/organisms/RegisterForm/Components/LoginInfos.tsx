import { Lock, Mail } from "lucide-react-native"
import { Controller, useFormContext } from "react-hook-form"
import { StyleSheet, View } from "react-native"

import { Input } from "@/components/atoms/Input"

import { COLOR, SPACING } from "@/style/tokens"

import type { IRegisterForm } from "../schema"

const styles = StyleSheet.create({
  container: {gap: SPACING.LG}
})

export function RegisterFormLoginInfos() {
  const { control } = useFormContext<IRegisterForm>()

  return (
    <View style={styles.container}>
      <Controller
        name={'email'}
        control={control}
        render={({
          field: { onChange, value },
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
        name={'password'}
        control={control}
        render={({
          field: { onChange, value },
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

      <Controller
        name={'confirmedPassword'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="Confirme sua senha"
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
  )
}