import { StyleSheet } from "react-native";

import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.MD
  },
  selectorsContainer: {
    flexDirection: 'row',
    gap: SPACING.MD
  },
  listContainer: {
    gap: SPACING.MD
  },
  emptyListContainer: {
    alignItems: 'center',
    gap: SPACING.MD,
    marginTop: SPACING.XXL
  },
  emptyListDescription: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.XXL,
    lineHeight: LINE_HEIGHT.XXL,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
  }
})