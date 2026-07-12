import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.SM,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.LG,
    backgroundColor: COLOR.WHITE
  },
  title: {
    marginBottom: SPACING.SM,
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.MEDIUM
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM
  },
  text: {
    color: COLOR.GRAY_600,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.REGULAR
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: SPACING.SM,
    marginTop: SPACING.SM
  }
})