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
    gap: SPACING.SSM,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.LG,
  },
  containerBorder: {
    borderWidth: 1
  },
  containerHighlightedBorder: {
    borderLeftWidth: 4
  },

  iconContainer: {},

  icon: {},

  textsContainer: {
    width: '100%',
    flexShrink: 1,
    gap: SPACING.XM
  },

  title: {
    color: COLOR.GRAY_900,
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