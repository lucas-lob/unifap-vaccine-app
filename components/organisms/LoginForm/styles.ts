import { StyleSheet } from "react-native";

import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: SPACING.LG,
    padding: SPACING.XL,
    borderRadius: BORDER_RADIUS.XL,
    backgroundColor: COLOR.WHITE,
  },
  title: {
    color: COLOR.BLUE_DARK,
    fontSize: FONT_SIZE.XL,
    lineHeight: LINE_HEIGHT.XL,
    fontWeight: FONT_WEIGHT.MEDIUM
  },
  formContainer: {
    width: '100%',
    gap: SPACING.LG
  }
})