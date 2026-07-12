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
    gap: SPACING.MD,
    padding: SPACING.LG,
    borderRadius: BORDER_RADIUS.LG,
    backgroundColor: COLOR.WHITE
  },
  title: {
    fontSize: FONT_SIZE.LG,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.SEMI_BOLD
  },
  question: {
    color: COLOR.GRAY_500,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.MEDIUM
  },
  answersList: {
    gap: SPACING.SSM,
    marginTop: SPACING.LG
  },
  successMessage: {
    color: COLOR.GREEN_DARK,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.REGULAR,
    textAlign: 'center'
  }
})