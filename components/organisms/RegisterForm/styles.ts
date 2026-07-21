import { StyleSheet } from "react-native";

import { BORDER_RADIUS, COLOR, SPACING } from "@/style/tokens";

export const styles = StyleSheet.create({
  formContainer: {
    gap: SPACING.LG,
    padding: SPACING.XL,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.XL
  },
  buttonsContainer: {
    gap: SPACING.SSM,
    marginTop: SPACING.LG
  }
})