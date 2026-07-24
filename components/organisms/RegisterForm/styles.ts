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
  formContainer: {
    gap: SPACING.LG,
    padding: SPACING.XL,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.XL
  },
  headerContainer: {
    alignItems: 'center',
    gap: SPACING.XM
  },
  headerTitle: {
    color: COLOR.BLUE_DARK,
    fontSize: FONT_SIZE.XL,
    lineHeight: LINE_HEIGHT.XL,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  headerDescription: {
    color: COLOR.GRAY_600,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  buttonsContainer: {
    gap: SPACING.SSM,
    marginTop: SPACING.LG
  }
})