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
    gap: SPACING.SM
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM
  },
  labelText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.LG,
    fontWeight: FONT_WEIGHT.BOLD
  },
  input: {
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
  inputDisabled: {
    backgroundColor: COLOR.GRAY_200
  },
  inputText: {
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    flexShrink: 1
  },
  listContainer: {
    gap: SPACING.LG
  },
  listItem: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE
  },
  listItemSelected: {
    color: COLOR.BLUE_DARK,
    fontWeight: FONT_WEIGHT.BOLD
  },
  errorLabel: {
    color: COLOR.RED_DARK,
    fontSize: FONT_SIZE.SM,
    lineHeight: LINE_HEIGHT.SM,
  }
})