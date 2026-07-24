import {
  primaryOutlineStyles,
  primarySolidStyles,
  secondaryOutlineStyles,
  secondarySolidStyles,
  tertiaryStyles
} from "./styles"

import { COLOR } from "@/style/tokens"

import type { ButtonProps } from "."


export const getVariantStyles = (variant: ButtonProps['variant']) => {
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

export const getLoadingColor = (variant: ButtonProps['variant']) => {
  if (variant === 'primary-outline' || variant === 'tertiary') {
    return COLOR.BLUE_DARK
  } else if (variant === 'secondary-outline') {
    return COLOR.GREEN_DARK
  } else {
    return COLOR.WHITE
  }
}
