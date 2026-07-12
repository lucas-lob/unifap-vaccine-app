import { BORDER_RADIUS, COLOR, SHADOW, SPACING } from "@/style/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.SSM,
    padding: SPACING.MD,
    boxShadow: [SHADOW.SM],
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.LG
  },

  triggerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.SSM
  },

  triggerChild: {
    flexShrink: 1
  },

  contentChild: {
      gap: SPACING.MD
  },

  arrowContainer: {},
  
  arrowContainerOpened: {
    transform: [{ rotate: "180deg" }]
  },
})