import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SquarePen, Trash2 } from "lucide-react-native";

import { COLOR, FONT_SIZE, LINE_HEIGHT, SPACING } from "@/style/tokens";

import type { IRegisterForm } from "../../schema";

import type { UseFieldArrayUpdate } from "react-hook-form";
import { EditVaccineModal } from "./EditVaccinesModal";

type VaccineItemProps = IRegisterForm["vaccines"][number] & {
  index: number
  onRemove: () => void
  onUpdate: UseFieldArrayUpdate<IRegisterForm, 'vaccines'>
}

export function VaccineItem(props: VaccineItemProps) {
  const { index, onRemove, onUpdate, ...vaccine } = props

  const [isEditVaccine, setIsEditVaccine] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{vaccine.name}</Text>

      <View style={styles.actionsContainer}>
        <SquarePen
          color={COLOR.GRAY_600}
          onPress={() => setIsEditVaccine(true)}
        />

        <Trash2
          color={COLOR.GRAY_600}
          onPress={() => onRemove()}
        />

        {isEditVaccine && (
          <EditVaccineModal
            index={index}
            vaccine={vaccine}
            onUpdate={onUpdate}
            isOpened={isEditVaccine}
            setIsOpened={setIsEditVaccine}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: SPACING.MD
  },
  name: {
    flexShrink: 1,
    color: COLOR.GRAY_600,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: SPACING.SSM
  }
})