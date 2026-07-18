import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { getThemeColors } from "@/sdk/utils/getThemeColors";

type CheckBoxProps = {
  label: string
  error?: string
  onChange?: (isSelect: boolean) => void
  theme?: ThemeColorsEnum
  disabled?: boolean
}

export function Checkbox(props: CheckBoxProps) {
  const {
    label,
    error,
    onChange = () => { },
    theme = 'blue',
    disabled
  } = props

  const [isActive, setIsActive] = useState<boolean>(false)

  const generalStyles = { ...styles, ...getThemeColors(theme) }

  useEffect(() => { onChange(isActive) }, [isActive])

  return (
    <Pressable
      style={[
        generalStyles.container,
      ]}
      disabled={disabled}
      onPress={() => setIsActive(prev => !prev)}
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