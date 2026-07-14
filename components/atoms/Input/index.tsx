import { ComponentType } from "react"
import { Text, TextInput, View } from "react-native"
import { LucideProps } from "lucide-react-native"

import type { TextInputProps } from "react-native"

import { COLOR } from "@/style/tokens"

import { styles } from "./styles"

interface InputProps extends TextInputProps {
  label?: string
  LabelIcon?: ComponentType<LucideProps>
  error?: string
  labelIconConfigs?: LucideProps
}

export function Input(props: InputProps) {
  const {
    label,
    LabelIcon,
    labelIconConfigs,
    error,
    style: textInputPropsStyle,
    ...textInputProps
  } = props

  return (
    <View style={styles.container}>
      {!!label && (
        <View style={styles.labelContainer}>
          {!!LabelIcon && <LabelIcon {...labelIconConfigs} />}

          <Text style={styles.labelText}>
            {label}
          </Text>
        </View>
      )}

      <TextInput
        style={[
          styles.inputContainer,
          textInputPropsStyle,
          ...(!!error ? [{borderColor: COLOR.RED_DARK}] : [])
        ]}
        placeholderTextColor={COLOR.GRAY_500}
        {...textInputProps}
      />

      {!!error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  )
}