import { StyleSheet, Text, View } from "react-native";
import { SquarePen, Trash2 } from "lucide-react-native";

import { COLOR, FONT_SIZE, LINE_HEIGHT, SPACING } from "@/style/tokens";

import type { IRegisterForm } from "../../schema";

type VaccineItemProps = IRegisterForm["vaccines"][number] & {
  onRemove: () => void
}

export function VaccineItem(props: VaccineItemProps) {
  const { name, onRemove } = props

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.actionsContainer}>
        <SquarePen color={COLOR.GRAY_600} />

        <Trash2
          color={COLOR.GRAY_600}
          onPress={() => onRemove()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.MD
  },
  name: {
    color: COLOR.GRAY_600,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: SPACING.SSM
  }
})