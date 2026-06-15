import { ChevronRight } from "lucide-react-native";
import { JSX, ReactElement } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { COLOR } from "@/sdk/constants/styles";

type CollapseItemProps = {
  title: string
  CollapseContent: ReactElement | JSX.Element
  description?: string
  showArrowIcon?: boolean
  Icon?: ReactElement
}

export default function CollapseItem(props: CollapseItemProps) {
  const {
    title,
    description,
    Icon,
    showArrowIcon = true,
    CollapseContent
  } = props

  return (
    <View style={styles.container}>
      <View style={styles.triggerContainer}>
        {!!Icon && (
          <View style={styles.triggerIconContainer}>
            {Icon}
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
          <View style={styles.triggerArrowContainer}>
            <ChevronRight color={COLOR.GRAY_500}/>
          </View>
        )}
      </View>

      <View>
        {CollapseContent}
      </View>
    </View>
  )
}