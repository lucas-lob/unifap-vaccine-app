import { StyleSheet } from "react-native";

import {
  BORDER_RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";

export const styles = StyleSheet.create({
  container: {
    paddingInline: SPACING.SM,
    borderRadius: BORDER_RADIUS.XL
  },
  label: {
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.XXL
  }
})