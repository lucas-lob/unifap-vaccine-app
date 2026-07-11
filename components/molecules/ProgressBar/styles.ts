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
    padding: SPACING.LG,
    borderRadius: BORDER_RADIUS.LG,
    backgroundColor: COLOR.WHITE
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.MD
  },
  headerTitle: {
    flex: 1,
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.LG,
    lineHeight: LINE_HEIGHT.LG,
    fontWeight: FONT_WEIGHT.MEDIUM
  },
  quantityLabel: {
    color: COLOR.BLUE_DARK,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.MEDIUM
  },
  progressBarContainer: {
    position: 'relative',
    height: 12,
    flex: 1,
    marginTop: SPACING.SSM,
    marginBottom: SPACING.SM,
    borderRadius: BORDER_RADIUS.XL,
    backgroundColor: COLOR.GRAY_200
  },
  progressBar: {
    position: 'absolute',
    height: 12,
    backgroundColor: COLOR.BLUE_DARK,
    borderRadius: BORDER_RADIUS.XL
  },
  progressLabel: {
    color: COLOR.GRAY_600,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.REGULAR
  }
})