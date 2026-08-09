import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import { Checkbox } from "@/components/atoms/Checkbox";
import { Input } from "@/components/atoms/Input";
import { InputDate } from "@/components/atoms/InputDate";

import { styles } from "./styles";
import { FORM_INITIAL_VALUES } from "./schema";

import type { IVaccineForm } from "./schema"
import Button from "@/components/atoms/Button";

type VaccineFormProps = {
  onSaveData: (formData: IVaccineForm) => void
}

export function VaccineForm(props: VaccineFormProps) {
  const { onSaveData } = props

  const { control, watch, handleSubmit, getValues } = useForm<IVaccineForm>({
    defaultValues: FORM_INITIAL_VALUES
  })

  const isPeriodicVaccine = watch('isPeriodic')

  const onSubmit = () => {
    const formData = getValues()

    onSaveData(formData)
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="isPeriodic"
        render={({
          field: { value, onChange },
          fieldState: { error }
        }) =>
          <Checkbox
            label="Vacina periódica"
            isActive={value}
            onPress={onChange}
            error={error?.message}
          />
        }
      />

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
              onChangeText={onChange}
              error={error?.message}
            />
          }
        />
      )}

      <Controller
        control={control}
        name="applicationDate"
        render={({
          field: { value, onChange },
          fieldState: { error }
        }) =>
          <InputDate
            label="Data da última aplicação"
            placeholder="dd/mm/aaaa"
            value={value}
            onChangeText={onChange}
            error={error?.message}
          />
        }
      />

      <Button
        label="Salvar"
        variant="secondary-solid"
        onPress={handleSubmit(onSubmit)}
        style={styles.saveButton}
      />
    </View>
  )
}
