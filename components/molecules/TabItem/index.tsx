import { Text, View } from "react-native";

import {
  blueIconStyles,
  greenIconStyles,
  orangeIconStyles,
  purpleIconStyles,
  redIconStyles,
  styles
} from "./styles";

import type { LucideProps } from "lucide-react-native";
import type { ComponentType } from "react";

type TabItemProps = {
  title: string
  description?: string
  Icon?: ComponentType<LucideProps>
  iconColor?: 'blue' | 'red' | 'orange' | 'green' | 'purple'
}

const getIconStyles = (iconColor: TabItemProps['iconColor']) => {
  switch (iconColor) {
    case 'blue':
      return blueIconStyles
    case 'red':
      return redIconStyles
    case 'green':
      return greenIconStyles
    case 'orange':
      return orangeIconStyles
    default:
      return purpleIconStyles
  }
}

export function TabItem(props: TabItemProps) {
  const {
    title,
    description,
    Icon,
    iconColor = 'blue',
  } = props

  const iconStyles = getIconStyles(iconColor)

  return (
    <View style={styles.container}>
      {!!Icon && (
        <View style={[
          styles.triggerIconContainer,
          iconStyles.triggerIconContainer
        ]}>
          <Icon color={iconStyles.iconColor.color} />
        </View>
      )}

      <View style={styles.triggerTextContainer}>
        <Text style={styles.triggerTitle}>
          {title}
        </Text>

        {!!description && (
          <Text style={styles.triggerDescription}>
            {description}
          </Text>
        )}
      </View>
    </View>
  )
}