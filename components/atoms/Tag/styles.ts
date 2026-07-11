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
    paddingInline: SPACING.SSM,
    paddingBlock: SPACING.XM,
    borderRadius: BORDER_RADIUS.XL
  },
  label: {
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.SM,
    lineHeight: LINE_HEIGHT.SM
  }
})