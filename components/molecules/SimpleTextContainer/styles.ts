import { StyleSheet } from "react-native";

import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SPACING } from "@/sdk/constants/styles";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: SPACING.SSM,
    padding: SPACING.MD,
    backgroundColor: COLOR.WHITE
  },
  title: {
    color: COLOR.BLUE_DARK,
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    lineHeight: LINE_HEIGHT.BASE
  },
  content: {
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.BASE,
    wordWrap: 'break-all',
  }
})