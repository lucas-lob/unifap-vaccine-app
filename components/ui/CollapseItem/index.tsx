import { ChevronDown } from "lucide-react-native";
import { JSX, ReactElement, useState } from "react";
import { Pressable, Text, View } from "react-native";
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

  const [opened, setOpened] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.triggerContainer}
        onPress={() => setOpened(prev => !prev)}
      >
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