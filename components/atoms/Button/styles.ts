import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SHADOW,
  SPACING
} from '@/sdk/constants/styles';

export const generalStyles = StyleSheet.create({
  wrapper: {
    height: 52,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.LG
  },
  label: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
  }
})

export const primarySolidStyles = StyleSheet.create({
  wrapperVariant: {
    gap: SPACING.SM,
    boxShadow: [SHADOW.SM],
    backgroundColor: COLOR.BLUE_DARK
  },
  labelVariant: {
    color: COLOR.WHITE
  }
})

export const primaryOutlineStyles = StyleSheet.create({
  wrapperVariant: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLOR.BLUE_DARK,
  },
  labelVariant: {
    color: COLOR.BLUE_DARK
  }
})

export const secondarySolidStyles = StyleSheet.create({
  wrapperVariant: {
    boxShadow: [SHADOW.SM],
    backgroundColor: COLOR.GREEN_DARK
  },
  labelVariant: {
    color: COLOR.WHITE
  },
})

export const secondaryOutlineStyles = StyleSheet.create({
  wrapperVariant: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLOR.GREEN_DARK,
  },
  labelVariant: {
    color: COLOR.GREEN_DARK
  },
})

export const tertiaryStyles = StyleSheet.create({
  wrapperVariant: {
    boxShadow: [SHADOW.SM],
  },
  labelVariant: {
    color: COLOR.BLUE_DARK
  },
})