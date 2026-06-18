import { CircleAlert } from "lucide-react-native";
import { Text, View, ViewStyle } from "react-native";
import { generalStyles, stylesBlue, stylesGreen, stylesOrange, stylesPurple, stylesRed } from "./styles";

type StylizedTextContainerProps = {
  title: string
  description: string
  color: 'blue' | 'red' | 'orange' | 'green' | 'purple'
  showBorder?: boolean
  icon?: 'none' | 'warning'
}

const getColorStyles = (color: StylizedTextContainerProps['color']) => {
  switch (color) {
    case 'orange':
      return stylesOrange
    case 'blue':
      return stylesBlue
    case 'purple':
      return stylesPurple
    case 'red':
      return stylesRed
    default:
      return stylesGreen
  }
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

  const styles = { ...generalStyles, ...getColorStyles(color) }

  return (
    <View
      style={[
        styles.container,
        styles.containerColor,
        showBorder ? styles.border : null
      ]}
    >
      {icon !== 'none' && (
        <View style={styles.iconContainer}>
          {getIcon(icon, styles.iconColor)}
        </View>
      )}

      <View style={styles.textsContainer}>
        <Text
          style={[
            styles.title,
            styles.titleColor,
          ]}
        >
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  )
}