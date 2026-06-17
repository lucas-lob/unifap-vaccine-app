import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SHADOW,
  SPACING
} from "@/sdk/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.SSM,
    padding: SPACING.MD,
    boxShadow: [SHADOW.SM],
    backgroundColor: COLOR.WHITE,
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
    transform: [{ rotate: "180deg" }]
  },
})

export const blueIconStyles = StyleSheet.create({
  triggerIconContainer: {
    backgroundColor: COLOR.BLUE_DARK
  },
  iconColor: {
    color: COLOR.WHITE
  }
})

export const redIconStyles = StyleSheet.create({
  triggerIconContainer: {
    backgroundColor: COLOR.RED_LIGHT
  },
  iconColor: {
    color: COLOR.RED_DARK
  }
})

export const greenIconStyles = StyleSheet.create({
  triggerIconContainer: {
    backgroundColor: COLOR.GREEN_LIGHT
  },
  iconColor: {
    color: COLOR.GREEN_DARK
  }
})

export const orangeIconStyles = StyleSheet.create({
  triggerIconContainer: {
    backgroundColor: COLOR.ORANGE_LIGHT
  },
  iconColor: {
    color: COLOR.ORANGE_DARK
  }
})

export const purpleIconStyles = StyleSheet.create({
  triggerIconContainer: {
    backgroundColor: COLOR.PURPLE_LIGHT
  },
  iconColor: {
    color: COLOR.PURPLE_DARK
  }
})