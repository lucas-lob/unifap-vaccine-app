import { ChevronRight } from "lucide-react-native";
import { JSX, ReactElement } from "react";
import { Text, View } from "react-native";

type CollapseItemProps = {
  title: string
  CollapseContent: ReactElement | JSX.Element
  description?: string
  showArrowIcon?: boolean
  TextIcon?: ReactElement
}

export default function CollapseItem(props: CollapseItemProps) {
  const {
    title,
    description,
    TextIcon,
    showArrowIcon = true,
    CollapseContent
  } = props

  return (
    <View>
      <View>
        {!!TextIcon && (
          <View>
            {TextIcon}
          </View>
        )}

        <View>
          <Text>
            {title}
          </Text>

          {!!description && (
            <Text>
              {description}
            </Text>
          )}
        </View>

        {showArrowIcon && (
          <ChevronRight />
        )}
      </View>

      <View>
        {CollapseContent}
      </View>
    </View>
  )
}