import { StyleSheet } from "react-native";

import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";

export const generalStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  overlayContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  contentContainer: {
    width: '100%',
    maxHeight: '60%'
  },
  contentWrapper: {
    width: '100%',
    position: 'relative',
    zIndex: 2,
    gap: SPACING.LG,
    padding: SPACING.LG,
    borderRadius: BORDER_RADIUS.LG,
    backgroundColor: COLOR.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.MD,
  },
  headerTitle: {
    color: COLOR.GRAY_900,
    fontSize: FONT_SIZE.LG,
    lineHeight: LINE_HEIGHT.LG,
    fontWeight: FONT_WEIGHT.MEDIUM,
    flexShrink: 1,
  },
  headerCloseIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexShrink: 1,
  },
  childrenContainer: {
    flexShrink: 1
  }
})

export const centerAlignmentStyles = StyleSheet.create({
  containerAlignment: {
    alignItems: 'center',
  },
  contentContainerAlignment: {
    padding: SPACING.LG
  },
  contentWrapperAlignment: {}
})

export const endAlignmentStyles = StyleSheet.create({
  containerAlignment: {
    alignItems: 'flex-end',
  },
  contentContainerAlignment: {
    padding: 0
  },
  contentWrapperAlignment: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  }
})