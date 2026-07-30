import { ActivityIndicator, Pressable, Text } from "react-native";

import type { DimensionValue, PressableProps } from "react-native"
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react-native";

import { generalStyles, } from "./styles";
import { getLoadingColor, getVariantStyles } from "./utils";

export interface ButtonProps extends PressableProps {
  label: string
  Icon?: ComponentType<LucideProps>
  variant?: 'primary-solid' | 'primary-outline' | 'secondary-solid' | 'secondary-outline' | 'tertiary' | 'tertiary-outline',
  width?: DimensionValue,
  loading?: boolean
}

export default function Button(props: ButtonProps) {
  const {
    label,
    Icon,
    width = '100%',
    variant = 'primary-solid',
    loading,
    ...restProps
  } = props

  const styles = { ...generalStyles, ...getVariantStyles(variant) }
  const loadingColor = getLoadingColor(variant)

  return (
    <Pressable
      style={[
        styles.wrapper,
        styles.wrapperVariant,
        { width }
      ]}
      {...restProps}
    >
      {loading
        ? (
          <ActivityIndicator color={loadingColor}/>
        )
        : (
          <>
            {!!Icon && <Icon color={styles.labelVariant.color} />}

            <Text style={[styles.label, styles.labelVariant]}>
              {label}
            </Text>
          </>
        )}
    </Pressable>
  )
}