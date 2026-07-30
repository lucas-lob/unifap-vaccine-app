import { Text, View } from "react-native";
import { LucideProps } from "lucide-react-native";

import { Tag } from "@/components/atoms/Tag";
import { getThemeColors } from "@/sdk/utils/getThemeColors";

import type { ComponentType } from "react";

import { styles } from "./styles";


type StylizedTextContainerProps = {
  title: string
  description: string | string[]
  color?: ThemeColorsEnum
  showBorder?: boolean
  isHighlightedBorder?: boolean
  isTitleColored?: boolean
  Icon?: ComponentType<LucideProps> 
  tagLabel?: string
}

export function StylizedTextContainer(props: StylizedTextContainerProps) {
  const {
    title,
    description,
    color = 'blue',
    showBorder,
    isHighlightedBorder,
    isTitleColored = true,
    Icon,
    tagLabel
  } = props

  const generalStyles = { ...styles, ...getThemeColors(color) }
  const borderStyle = isHighlightedBorder
    ? generalStyles.containerHighlightedBorder
    : generalStyles.containerBorder

  const descriptionArray = Array.isArray(description) ? description : [description]

  return (
    <View
      style={[
        generalStyles.container,
        generalStyles.lightBackground,
        ...(showBorder ? [generalStyles.borderColor, borderStyle] : [])
      ]}
    >
      {!!Icon && (
        <View style={generalStyles.iconContainer}>
          <Icon color={generalStyles.darkColor.color}/>
        </View>
      )}

      <View style={generalStyles.textsContainer}>
        <Text
          style={[
            generalStyles.title,
            ...(isTitleColored ? [generalStyles.darkColor] : []),
          ]}
        >
          {title}
        </Text>

        {descriptionArray.map((descriptionItem, index) =>
          <Text key={`descriptionText-${index}`} style={generalStyles.description}>
            {descriptionItem}
          </Text>
        )}
      </View>

      {!!tagLabel && (
        <View>
          <Tag
            label={tagLabel}
            themeColor={color}
          />
        </View>
      )}
    </View>
  )
}