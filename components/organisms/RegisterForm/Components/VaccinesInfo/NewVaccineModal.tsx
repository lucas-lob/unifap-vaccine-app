import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Modal } from "@/components/molecules/Modal";
import { VaccineForm } from "@/components/molecules/VaccineForm";
import { AVAILABLE_VACCINES_MOCK, type VaccineSchema } from "@/sdk/mocks/availableVaccines.mock";
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SPACING } from "@/style/tokens";

import { useFormContext, type UseFieldArrayAppend } from "react-hook-form";

import type { IRegisterForm } from "../../schema";

type NewVaccineModalProps = {
  isOpened: boolean
  setIsOpened: (opened: boolean) => void
  onAppend: UseFieldArrayAppend<IRegisterForm, 'vaccines'>
}

export function NewVaccineModal(props: NewVaccineModalProps) {
  const { isOpened, setIsOpened, onAppend } = props

  const [selectedVaccine, setSelectedVaccine] = useState<VaccineSchema | null>(null)
  const { getValues } = useFormContext<IRegisterForm>()

  const modalTitle = !selectedVaccine
    ? "Selecione uma vacina"
    : `Insira os dados de aplicação da vacina ${selectedVaccine.name}`

  const missingAvailableVaccines = (() => {
    const userVaccines = getValues('vaccines')
    const userVaccinesIds = userVaccines.map(vaccine => vaccine.id)

    const filteredVaccines = AVAILABLE_VACCINES_MOCK.filter(
      vaccine => !userVaccinesIds.includes(vaccine.id)
    )

    return filteredVaccines
  })()

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
            {missingAvailableVaccines.length == 0
              ? (
                <Text style={[styles.listItem, styles.emptyListText]}>
                  Todas vacinas foram selecionadas!
                  </Text>
              )
              : (
                missingAvailableVaccines.map((vaccine, index) =>
                  <Pressable
                    key={`${index} - ${vaccine.name}`}
                    onPress={() => setSelectedVaccine(vaccine)}
                  >
                    <Text style={styles.listItem}>
                      {vaccine.name}
                    </Text>
                  </Pressable>
                )
              )
            }
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
  },
  emptyListText: {
    paddingBlock: SPACING.MD
  }
})