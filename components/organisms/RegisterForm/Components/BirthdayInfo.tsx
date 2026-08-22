import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { Calendar } from "lucide-react-native";

import { InputDate } from "@/components/atoms/InputDate";
import { COLOR } from "@/style/tokens";

import type { IRegisterForm } from "../schema";

export function RegisterFormBirthdayInfo() {
  const { control } = useFormContext<IRegisterForm>()

  return (
    <View>
      <Controller
        name={'birthDay'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <InputDate
            label="Data de nascimento"
            LabelIcon={Calendar}
            labelIconConfigs={{ color: COLOR.ORANGE_DARK }}
            placeholder="dd/mm/aaaa"
            value={value}
            onChangeDate={onChange}
            error={error?.message}
          />
        )}
      />
    </View>
  )
}