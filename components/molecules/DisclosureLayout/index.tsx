import { ChevronDown } from "lucide-react-native"
import { Children, isValidElement, useState } from "react"
import { Pressable, View } from "react-native"

import { DisclosureContent } from "./DisclosureContent"
import { DisclosureTrigger } from "./DisclosureTrigger"

import { COLOR } from "@/sdk/constants/styles"

import { styles } from "./styles"

import type { ReactNode } from "react"

type DisclosureLayoutProps = {
  children: [ReactNode, ReactNode]
  iconColor?: string
  showArrowIcon?: boolean
}

export function DisclosureLayout(props: DisclosureLayoutProps) {
  const {
    children,
    iconColor = COLOR.GRAY_500,
    showArrowIcon
  } = props
  const [opened, setOpened] = useState<boolean>(false)

  const validChildren = Children.map(children, ((child) => {
    const isValidChild = (
      isValidElement(child) &&
      (child.type === DisclosureTrigger || child.type === DisclosureContent)
    )

    if (!isValidChild) {
      console.error('[DisclosureLayout Error]: The child must be DisclosureLayout or DisclosureTrigger')
      return null
    }

    return child
  })) ?? []

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.triggerContainer}
        onPress={() => setOpened(prev => !prev)}
      >
        {validChildren[0]}

        {showArrowIcon && (
          <View
            style={[
              styles.arrowContainer,
              opened && styles.arrowContainerOpened
            ]}>
            <ChevronDown color={iconColor} />
          </View>
        )}
      </Pressable>

      {opened && (validChildren[1])}
    </View>
  )
}