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
    flex: 1,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.SM
  },
  inputLabel: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.BOLD
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.SSM,
    padding: SPACING.MD,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.LG,
    borderColor: COLOR.GRAY_200,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  inputText: {
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    flexShrink: 1
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.LG
  },
  listItem: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE
  }
})