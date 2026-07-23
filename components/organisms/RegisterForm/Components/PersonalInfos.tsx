import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { Calendar, CreditCard, User } from "lucide-react-native";

import { Input } from "@/components/atoms/Input";
import { InputDate } from "@/components/atoms/InputDate";
import { CheckboxList } from "@/components/molecules/CheckboxList";

import { applyCpfMask } from "@/sdk/utils/masks";
import { COLOR, SPACING } from "@/style/tokens";

import type { IRegisterForm } from "../schema";

const styles = StyleSheet.create({
  container: {gap: SPACING.LG}
})

export function RegisterFormPersonalInfos() {
  const { control } = useFormContext<IRegisterForm>()

  return (
    <View style={styles.container}>
      <Controller
        name={'name'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="Nome"
            LabelIcon={User}
            labelIconConfigs={{ color: COLOR.BLUE_DARK }}
            placeholder="Digite seu nome completo"
            value={value}
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />

      <Controller
        name={'responsableName'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="Nome do Responsável"
            LabelIcon={User}
            labelIconConfigs={{ color: COLOR.GREEN_DARK }}
            placeholder="Nome do responsável legal"
            value={value}
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />

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
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />

      <Controller
        name={'cpf'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="CPF"
            LabelIcon={CreditCard}
            labelIconConfigs={{ color: COLOR.GREEN_DARK }}
            placeholder="000.000.000-00"
            value={value}
            onChangeText={(text) => {
              const textWithMask = applyCpfMask(text)
              onChange(textWithMask)
            }
            }
            error={error?.message}
            keyboardType="numeric"
            maxLength={14}
          />
        )}
      />

      <Controller
        name={'gender'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <CheckboxList
            title="Sexo"
            TitleIcon={User}
            titleIconConfigs={{ color: COLOR.PURPLE_DARK }}
            items={[
              { id: 'MALE', label: 'Masculino' },
              { id: 'FEMALE', label: 'Feminino' },
            ]}
            initialSelectedId={value}
            onChangeItem={onChange}
            error={error?.message}
          />
        )}
      />
    </View>
  )
}