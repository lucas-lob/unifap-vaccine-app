import { BORDER_RADIUS, COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SHADOW, SPACING } from "@/sdk/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.SSM,
    padding: SPACING.MD,
    boxShadow: [SHADOW.SM],
    borderRadius: BORDER_RADIUS.LG
  },
  triggerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SSM,
  },
  triggerIconContainer: {
    padding: SPACING.SSM,
    borderRadius: BORDER_RADIUS.XL,
    backgroundColor: COLOR.BLUE_DARK,
  },
  triggerTextContainer: {
    flex: 1
  },
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
    transform: [{rotate: "180deg"}]
  },
})