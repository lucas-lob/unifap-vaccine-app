import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { View } from "react-native";

import { Input } from "@/components/atoms/Input";
import { InputDate } from "@/components/atoms/InputDate";
import Button from "@/components/atoms/Button";

import { vaccineFormSchema, type IVaccineForm } from "./schema"
import { styles } from "./styles";

type VaccineFormProps = {
  vaccineName: string
  isPeriodic: boolean
  onSaveData: (formData: IVaccineForm) => void
}

export function VaccineForm(props: VaccineFormProps) {
  const { vaccineName, isPeriodic, onSaveData } = props

  const FORM_INITIAL_VALUES: IVaccineForm = {
  name: vaccineName,
  isPeriodic,
  doses: undefined,
  lastApplicationDate: ""
} 

  const { control, watch, handleSubmit, getValues } = useForm<IVaccineForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(vaccineFormSchema),
    reValidateMode: 'onSubmit'
  })

  const isPeriodicVaccine = watch('isPeriodic')

  const onSubmit = () => {
    const formData = getValues()
    onSaveData(formData)
  }

  return (
    <View style={styles.container}>
      {!isPeriodicVaccine && (
        <Controller
          control={control}
          name="doses"
          render={({
            field: { value, onChange },
            fieldState: { error }
          }) =>
            <Input
              label="Quantidade de doses"
              placeholder="0"
              value={value?.toString() ?? ""}
              onChangeText={text => onChange(text.replaceAll(/\D/g, ""))}
              error={error?.message}
              maxLength={2}
              keyboardType="numeric"
            />
          }
        />
      )}

      <Controller
        control={control}
        name="lastApplicationDate"
        render={({
          field: { value, onChange },
          fieldState: { error }
        }) =>
          <InputDate
            label="Data da última aplicação"
            placeholder="dd/mm/aaaa"
            value={value}
            onChangeDate={onChange}
            error={error?.message}
          />
        }
      />

      <View style={styles.saveButtonContainer}>
        <Button
          label="Salvar"
          variant="secondary-solid"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}
