import { getThemeColors } from "@/sdk/utils/getThemeColors"
import { Text, View } from "react-native"
import { styles } from "./styles"

type SimpleTextContainerProps = {
  title: string
  content: string
  themeColor?: ThemeColorsEnum
}

export function SimpleTextContainer(props: SimpleTextContainerProps) {
  const {
    title,
    content,
    themeColor = 'blue'
  } = props

  const generalStyles = { ...styles, ...getThemeColors(themeColor) }

  return (
    <View style={generalStyles.container}>
      <Text
        style={[
          generalStyles.title,
          generalStyles.darkColor
        ]}
      >
        {title}
      </Text>

      <Text style={generalStyles.content}>{content}</Text>
    </View>
  )
}