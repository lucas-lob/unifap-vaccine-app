import { Text, View } from "react-native";

import { COLOR } from "@/style/tokens";
import { getThemeColors } from "@/sdk/utils/getThemeColors";

import { styles } from "./styles";


type TagProps = {
  label: string
  background?: 'transparent' | 'solid'
  themeColor?: ThemeColorsEnum
}

export function Tag(props: TagProps) {
  const {
    label,
    background = 'solid',
    themeColor = 'blue'
  } = props

  const generalStyles = {...styles, ...getThemeColors(themeColor)}

  return (
    <View
    style={[
      generalStyles.container,
      background === 'solid' ? generalStyles.darkBackground : generalStyles.lightBackground
    ]}
    >
      <Text 
      style={[
        generalStyles.label,
        background === 'solid' ? {color: COLOR.WHITE} : generalStyles.darkColor
      ]}
      >
        {label}
      </Text>
    </View>
  )
}