import { Text, View } from "react-native";

import { styles } from "./styles";

import { getThemeColors } from "@/sdk/utils/getThemeColors";
import type { LucideProps } from "lucide-react-native";
import type { ComponentType } from "react";

type TabItemProps = {
  title: string
  description?: string
  Icon?: ComponentType<LucideProps>
  iconColor?: ThemeColorsEnum
}

export function TabItem(props: TabItemProps) {
  const {
    title,
    description,
    Icon,
    iconColor = 'blue',
  } = props

  const generalStyles = { ...styles, ...getThemeColors(iconColor) }

  return (
    <View style={styles.container}>
      {!!Icon && (
        <View style={[
          generalStyles.triggerIconContainer,
          generalStyles.containerColor
        ]}>
          <Icon color={generalStyles.iconColor.color} />
        </View>
      )}

      <View style={generalStyles.triggerTextContainer}>
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