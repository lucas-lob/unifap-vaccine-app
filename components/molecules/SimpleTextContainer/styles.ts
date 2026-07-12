import { StyleSheet } from "react-native";

import { BORDER_RADIUS, COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SPACING } from "@/style/tokens";

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.SSM,
    padding: SPACING.LG,
    borderRadius: BORDER_RADIUS.LG,
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