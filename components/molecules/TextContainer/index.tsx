import { CircleAlert } from "lucide-react-native";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { generalStyles, stylesBlue, stylesGreen, stylesOrange } from "./styles";

type TextContainerProps = {
  title: string
  description: string
  color: 'orange' | 'blue' | 'green'
  icon?: 'none' | 'warning'
}

const getColorStyles = (color: TextContainerProps['color']) => {
  switch (color) {
    case 'orange':
      return stylesOrange
    case 'blue':
      return stylesBlue
    default:
      return stylesGreen
  }
}

const getIcon = (
  icon: TextContainerProps['icon'],
  iconStyle: Record<string, string>
) => {
  switch (icon) {
    case 'warning':
      return <CircleAlert style={iconStyle} />
  }
}

export default function TextContainer(props: TextContainerProps) {
  const {
    title,
    description,
    color,
    icon = 'none'
  } = props

  const styles = { ...generalStyles, ...getColorStyles(color) }

  return (
    <View
      style={[
        styles.container,
        styles.containerColor
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