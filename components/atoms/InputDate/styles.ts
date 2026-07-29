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
    gap: SPACING.SM
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM
  },
  labelText: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.BOLD
  },
  inputContainer: {
    height: 52,
    padding: SPACING.MD,
    borderWidth: 1,
    borderColor: COLOR.GRAY_500,
    borderRadius: BORDER_RADIUS.LG,
    backgroundColor: COLOR.GRAY_50,
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
  }
})