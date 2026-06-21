import { getThemeColors } from "@/sdk/utils/getThemeColors";
import { CircleAlert } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

type StylizedTextContainerProps = {
  title: string
  description: string
  color: ThemeColorsEnum
  showBorder?: boolean
  icon?: 'none' | 'warning'
}

const getIcon = (
  icon: StylizedTextContainerProps['icon'],
  iconStyle: Record<string, string>
) => {
  switch (icon) {
    case 'warning':
      return <CircleAlert style={iconStyle} />
  }
}

export function StylizedTextContainer(props: StylizedTextContainerProps) {
  const {
    title,
    description,
    color,
    showBorder = false,
    icon = 'none'
  } = props

  const generalStyles = { ...styles, ...getThemeColors(color) }

  return (
    <View
      style={[
        generalStyles.container,
        generalStyles.lightBackground,
        showBorder ? generalStyles.borderColor : null
      ]}
    >
      {icon !== 'none' && (
        <View style={generalStyles.iconContainer}>
          {getIcon(icon, generalStyles.darkColor)}
        </View>
      )}

      <View style={generalStyles.textsContainer}>
        <Text
          style={[
            generalStyles.title,
            generalStyles.darkColor,
          ]}
        >
          {title}
        </Text>

        <Text style={generalStyles.description}>
          {description}
        </Text>
      </View>
    </View>
  )
}