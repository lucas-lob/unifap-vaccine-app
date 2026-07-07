import { StyleSheet } from "react-native";

import {
  SPACING
} from "@/style/tokens";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.MD
  },
  selectorsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: SPACING.MD
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.MD
  }
})