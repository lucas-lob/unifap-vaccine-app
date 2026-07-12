import { BORDER_RADIUS, COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SPACING } from "@/style/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.SSM,
    padding: SPACING.LG,
    borderRadius: BORDER_RADIUS.LG,
    backgroundColor: COLOR.WHITE,
  },
  title: {
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.LG,
    lineHeight: LINE_HEIGHT.LG,
    fontWeight: FONT_WEIGHT.MEDIUM
  }
})