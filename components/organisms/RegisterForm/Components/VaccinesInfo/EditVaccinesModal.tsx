import { View } from "react-native";

import { Modal } from "@/components/molecules/Modal";
import { VaccineForm } from "@/components/molecules/VaccineForm";

import type { UseFieldArrayUpdate } from "react-hook-form";
import type { IRegisterForm } from "../../schema";
import type { IVaccineForm } from "@/components/molecules/VaccineForm/schema";

type EditVacineModalProps = {
  index: number
  vaccine: IVaccineForm
  onUpdate: UseFieldArrayUpdate<IRegisterForm, 'vaccines'>
  setIsOpened: (opened: boolean) => void
  isOpened: boolean
}

export function EditVaccineModal(props: EditVacineModalProps) {
  const { index, vaccine, isOpened, setIsOpened, onUpdate } = props

  return (
    <Modal
      title={`Insira os dados de aplicação da vacina ${vaccine.name}`}
      visible={isOpened}
      setVisible={setIsOpened}
      alignment="end"
    >
      <View>
        <VaccineForm
          vaccine={vaccine}
          initialDoses={vaccine.doses}
          initialLastApplicationDate={vaccine.lastApplicationDate}
          onSaveData={formData => {
            onUpdate(index, formData)
            setIsOpened(false)
          }}
        />
      </View>
    </Modal>
  )
}