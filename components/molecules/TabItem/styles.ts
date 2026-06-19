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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SSM,
    backgroundColor: COLOR.WHITE
  },

  triggerIconContainer: {
    padding: SPACING.SSM,
    borderRadius: BORDER_RADIUS.XL,
  },

  triggerTextContainer: {},

  triggerTitle: {
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.LG,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.LG
  },

  triggerDescription: {
    color: COLOR.GRAY_500,
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.BASE
  },

  triggerArrowContainer: {},
  
  triggerArrowContainerOpened: {
    transform: [{ rotate: "180deg" }]
  },
})