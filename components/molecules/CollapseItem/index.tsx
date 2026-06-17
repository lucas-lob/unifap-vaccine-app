import { ChevronDown, } from "lucide-react-native";
import { JSX, ReactElement, useState } from "react";
import { Pressable, Text, View } from "react-native";

import {
  blueIconStyles,
  greenIconStyles,
  orangeIconStyles,
  purpleIconStyles,
  redIconStyles,
  styles
} from "./styles";

import { COLOR } from "@/sdk/constants/styles";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react-native";

type CollapseItemProps = {
  title: string
  CollapseContent: ReactElement | JSX.Element
  description?: string
  showArrowIcon?: boolean
  Icon?: ComponentType<LucideProps>
  iconColor?: 'blue' | 'red' | 'orange' | 'green' | 'purple'
}

const getIconStyles = (iconColor: CollapseItemProps['iconColor']) => {
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

export function CollapseItem(props: CollapseItemProps) {
  const {
    title,
    description,
    Icon,
    iconColor = 'blue',
    showArrowIcon = true,
    CollapseContent
  } = props

  const [opened, setOpened] = useState<boolean>(false)

  const iconStyles = getIconStyles(iconColor)

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.triggerContainer}
        onPress={() => setOpened(prev => !prev)}
      >
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

        {showArrowIcon && (
          <View
            style={[
              styles.triggerArrowContainer,
              opened && styles.triggerArrowContainerOpened
            ]}>
            <ChevronDown color={COLOR.GRAY_500} />
          </View>
        )}
      </Pressable>

      {opened && (
        <View>
          {CollapseContent}
        </View>
      )}
    </View>
  )
}