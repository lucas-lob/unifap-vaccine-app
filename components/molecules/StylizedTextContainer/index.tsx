import { getThemeColors } from "@/sdk/utils/getThemeColors";
import { CircleAlert } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Tag } from "@/components/atoms/Tag";

type StylizedTextContainerProps = {
  title: string
  description: string | string[]
  color?: ThemeColorsEnum
  showBorder?: boolean
  isHighlightedBorder?: boolean
  isTitleColored?: boolean
  icon?: 'none' | 'warning'
  tagLabel?: string
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
    color = 'blue',
    showBorder,
    isHighlightedBorder,
    isTitleColored,
    icon = 'none',
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
      {icon !== 'none' && (
        <View style={generalStyles.iconContainer}>
          {getIcon(icon, generalStyles.darkColor)}
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