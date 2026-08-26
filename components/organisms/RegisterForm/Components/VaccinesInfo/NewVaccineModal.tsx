import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Modal } from "@/components/molecules/Modal";
import { AVAILABLE_VACCINES_MOCK, type VaccineSchema } from "@/sdk/mocks/availableVaccines.mock";
import { VaccineForm } from "@/components/molecules/VaccineForm";

import type { UseFieldArrayAppend } from "react-hook-form"
import type { IRegisterForm } from "../../schema";
import { COLOR, FONT_SIZE, LINE_HEIGHT, SPACING } from "@/style/tokens";

type NewVaccineModalProps = {
  isOpened: boolean
  setIsOpened: (opened: boolean) => void
  onAppend: UseFieldArrayAppend<IRegisterForm, 'vaccines'>
}

export function NewVaccineModal(props: NewVaccineModalProps) {
  const { isOpened, setIsOpened, onAppend } = props

  const [selectedVaccine, setSelectedVaccine] = useState<VaccineSchema | null>(null)

  const modalTitle = !selectedVaccine
    ? "Selecione uma vacina"
    : `Insira os dados de aplicação da vacina ${selectedVaccine.name}`

  return (
    <Modal
      title={modalTitle}
      visible={isOpened}
      setVisible={setIsOpened}
      alignment="end"
      onClose={() => setSelectedVaccine(null)}
    >
      {!selectedVaccine
        ? (
          <View style={styles.listContainer}>
            {AVAILABLE_VACCINES_MOCK.map((vaccine, index) =>
              <Pressable
                key={`${index} - ${vaccine.name}`}
                onPress={() => setSelectedVaccine(vaccine)}
              >
                <Text style={styles.listItem}>
                  {vaccine.name}
                </Text>
              </Pressable>
            )}
          </View>
        )
        : (
          <View>
            <VaccineForm
              vaccine={selectedVaccine}
              onSaveData={formData => {
                onAppend(formData)
                setIsOpened(false)
                setSelectedVaccine(null)
              }}
            />
          </View>
        )
      }
    </Modal>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    gap: SPACING.MD
  },
  listItem: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
  }
})