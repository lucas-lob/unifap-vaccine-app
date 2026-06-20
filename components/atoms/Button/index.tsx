import { Pressable, Text } from "react-native";

import type { DimensionValue, PressableProps } from "react-native"
import type { ComponentType } from "react";

import {
  generalStyles,
  primaryOutlineStyles,
  primarySolidStyles,
  secondaryOutlineStyles,
  secondarySolidStyles,
  tertiaryStyles
} from "./styles";
import { LucideProps } from "lucide-react-native";

interface ButtonProps extends PressableProps {
  label: string
  Icon?: ComponentType<LucideProps>
  variant?: 'primary-solid' | 'primary-outline' | 'secondary-solid' | 'secondary-outline' | 'tertiary',
  width?: DimensionValue
}

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary-solid':
      return primarySolidStyles
    case 'primary-outline':
      return primaryOutlineStyles
    case 'secondary-solid':
      return secondarySolidStyles
    case 'secondary-outline':
      return secondaryOutlineStyles
    default:
      return tertiaryStyles
  }
}

export default function Button(props: ButtonProps) {
  const {
    label,
    Icon,
    width = '100%',
    variant = 'primary-solid',
    ...restProps
  } = props

  const styles = { ...generalStyles, ...getVariantStyles(variant) }

  return (
    <Pressable
      style={[
        styles.wrapper,
        styles.wrapperVariant,
        { width }
      ]}
      {...restProps}
    >
      {!!Icon && <Icon color={styles.labelVariant.color}/>}

      <Text style={[styles.label, styles.labelVariant]}>
        {label}
      </Text>
    </Pressable>
  )
}