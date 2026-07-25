import { StyleSheet } from "react-native";

import {
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
  checkboxWrapper: {
    flexDirection: 'row',
    gap: SPACING.XM
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    padding: SPACING.XM,
    backgroundColor: COLOR.GRAY_50,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: COLOR.GRAY_200
  },
  checkboxInternalContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
  },
  label: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.REGULAR
  },
  errorLabel: {
    color: COLOR.RED_DARK,
    fontSize: FONT_SIZE.SM,
    lineHeight: LINE_HEIGHT.SM,
  }
})