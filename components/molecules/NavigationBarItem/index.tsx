import { LucideProps } from "lucide-react-native"
import { ComponentType } from "react"
import { Text, View } from "react-native"
import { styles } from "./styles"

type NavigationBarItemProps = {
  focused: boolean
  label: string
  color: string
  iconSize: number
  Icon: ComponentType<LucideProps>
}

export function NavigationBarItem(props: NavigationBarItemProps) {
  const { focused, color, iconSize, label, Icon } = props

  return (
    <View style={[
      styles.container,
      focused ? styles.activeBorder : {}
      ]}>
      <Icon color={color} size={iconSize} />

      <Text style={[
        styles.label,
        { color }
      ]}>
        {label}
      </Text>
    </View>
  )
}