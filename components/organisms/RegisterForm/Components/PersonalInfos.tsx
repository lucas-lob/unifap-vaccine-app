import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { CreditCard, User } from "lucide-react-native";

import { Input } from "@/components/atoms/Input";
import { CheckboxList } from "@/components/molecules/CheckboxList";

import { applyCpfMask } from "@/sdk/utils/masks";
import { COLOR, SPACING } from "@/style/tokens";

import type { IRegisterForm } from "../schema";

const styles = StyleSheet.create({
  container: { gap: SPACING.LG }
})

const SIXTEEN_YEARS_IN_MILLISECONDS = 5049216e+05

export function RegisterFormPersonalInfos() {
  const { control, getValues } = useFormContext<IRegisterForm>()

  const userBirthday = getValues('birthDay')
  const userBirthdayTimestamp = new Date(userBirthday).getTime()
  const isUserLegalAge = !isNaN(userBirthdayTimestamp) &&
    (Date.now() - userBirthdayTimestamp) >= SIXTEEN_YEARS_IN_MILLISECONDS

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

      {!isUserLegalAge && (
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
      )}

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