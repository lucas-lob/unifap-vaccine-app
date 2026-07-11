import { StyleSheet } from "react-native";

import { COLOR, FONT_SIZE, FONT_WEIGHT, SPACING } from "@/style/tokens";

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.XM,
    alignItems: 'center',
    width: '100%',
    paddingBottom: SPACING.MD,
    marginBottom: SPACING.XM
  },
  label: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.MEDIUM
  },
  activeBorder: {
    borderStyle: 'solid',
    borderBottomWidth: 4,
    borderBottomColor: COLOR.BLUE_DARK
  }
})