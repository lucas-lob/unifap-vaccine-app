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
    gap: SPACING.SSM
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: SPACING.SM
  },
  listItem: {
    width: '50%',
    paddingRight: SPACING.MD
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM
  },
  titleText: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.BOLD
  }
})