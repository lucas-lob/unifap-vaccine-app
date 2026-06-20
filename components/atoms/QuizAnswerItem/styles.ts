import { BORDER_RADIUS, COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SPACING } from "@/style/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: SPACING.SM,
    borderRadius: BORDER_RADIUS.LG,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  answer: {
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    textAlign: 'center'
  }
})

export const idleStatusStyles = StyleSheet.create({
  containerStatus: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.GRAY_700
  },
  answerStatus: {
    color: COLOR.GRAY_900
  }
})

export const incorrectStatusStyles = StyleSheet.create({
  containerStatus: {
    backgroundColor: COLOR.RED_LIGHT,
    borderColor: COLOR.RED_DARK
  },
  answerStatus: {
    color: COLOR.RED_DARK
  }
})

export const correctStatusStyles = StyleSheet.create({
  containerStatus: {
    backgroundColor: COLOR.GREEN_LIGHT,
    borderColor: COLOR.GREEN_DARK
  },
  answerStatus: {
    color: COLOR.GREEN_DARK
  }
})