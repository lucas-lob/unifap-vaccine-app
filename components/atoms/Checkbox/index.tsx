import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { getThemeColors } from "@/sdk/utils/getThemeColors";

type CheckBoxProps = {
  label: string
  isActive: boolean
  error?: string
  onPress?: () => void
  theme?: ThemeColorsEnum
  disabled?: boolean
}

export function Checkbox(props: CheckBoxProps) {
  const {
    label,
    isActive,
    error,
    onPress = () => { },
    theme = 'blue',
    disabled
  } = props

  const generalStyles = { ...styles, ...getThemeColors(theme) }

  return (
    <Pressable
      style={[
        generalStyles.container,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={styles.checkboxWrapper}>
        <View style={[
          generalStyles.checkboxContainer,
          ...(isActive ? [{ borderColor: generalStyles.darkColor.color }] : [])
        ]}>
          {isActive && (
            <View
              style={[
                generalStyles.checkboxInternalContainer,
                generalStyles.darkBackground
              ]}
            >
            </View>
          )}
        </View>

        <Text style={generalStyles.label}>
          {label}
        </Text>
      </View>

      {!!error && <Text style={styles.errorLabel}>{error}</Text>}
    </Pressable>
  )
}