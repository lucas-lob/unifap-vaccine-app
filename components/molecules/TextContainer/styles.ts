import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/sdk/constants/styles";
import { StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: SPACING.SM,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.LG,
  },
  iconContainer: {},
  icon: {},
  textsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    gap: SPACING.SM
  },
  title: {
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.BASE
  },
  description: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.BASE,
    wordWrap: 'break-all',
  }
})

export const stylesOrange = StyleSheet.create({
  containerColor: {
    backgroundColor: COLOR.ORANGE_LIGHT
  },
  iconColor: {
    color: COLOR.ORANGE_DARK
  },
  titleColor: {
    color: COLOR.ORANGE_DARK
  },
  border: {
    borderColor: COLOR.ORANGE_DARK,
    borderLeftWidth: 4,
    borderStyle: 'solid'
  }
})

export const stylesGreen = StyleSheet.create({
  containerColor: {
    backgroundColor: COLOR.GREEN_LIGHT
  },
  iconColor: {
    color: COLOR.GREEN_DARK
  },
  titleColor: {
    color: COLOR.GREEN_DARK
  },
  border: {
    borderColor: COLOR.GREEN_DARK,
    borderLeftWidth: 4,
    borderStyle: 'solid'
  }
})

export const stylesBlue = StyleSheet.create({
  containerColor: {
    backgroundColor: COLOR.BLUE_LIGHT
  },
  iconColor: {
    color: COLOR.BLUE_DARK
  },
  titleColor: {
    color: COLOR.BLUE_DARK,
  },
  border: {
    borderColor: COLOR.BLUE_BORDER,
    borderLeftWidth: 4,
    borderStyle: 'solid'
  }
})

export const stylesRed = StyleSheet.create({
  containerColor: {
    backgroundColor: COLOR.RED_LIGHT
  },
  iconColor: {
    color: COLOR.RED_DARK
  },
  titleColor: {
    color: COLOR.RED_DARK,
  },
  border: {
    borderColor: COLOR.RED_DARK,
    borderLeftWidth: 4,
    borderStyle: 'solid'
  }
})

export const stylesPurple = StyleSheet.create({
  containerColor: {
    backgroundColor: COLOR.PURPLE_LIGHT
  },
  iconColor: {
    color: COLOR.PURPLE_DARK
  },
  titleColor: {
    color: COLOR.PURPLE_DARK,
  },
  border: {
    borderColor: COLOR.PURPLE_DARK,
    borderLeftWidth: 4,
    borderStyle: 'solid'
  }
})