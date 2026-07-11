import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: SPACING.SM,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.LG,
  },
  containerBorder: {
    borderLeftWidth: 4
  },

  iconContainer: {},

  icon: {},

  textsContainer: {
    flexShrink: 1,
    gap: SPACING.XM
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