import { useMemo } from "react";
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from "react-native";
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, CreditCard, Lock, Mail, MapPin, User } from "lucide-react-native";

import Button from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { InputDate } from "@/components/atoms/InputDate";
import { Select } from "@/components/atoms/Select";
import { CheckboxList } from "@/components/molecules/CheckboxList";

import { STATES_MOCK } from "@/sdk/mocks/localization.mock";
import { applyCpfMask } from "@/sdk/utils/masks";
import { IRegisterForm, registerFormSchema } from "./schema";

import { BORDER_RADIUS, COLOR, SPACING } from "@/style/tokens";

const FORM_INITIAL_VALUES: IRegisterForm = {
  name: "",
  responsableName: "",
  birthDay: "",
  cpf: "",
  gender: "MALE",
  state: "",
  city: "",
  email: "",
  password: "",
  confirmedPassword: ""
}

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    watch,
    getValues
  } = useForm<IRegisterForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(registerFormSchema),
    reValidateMode: 'onSubmit',
  })

  const selectedState = watch('state')

  const availableStates = useMemo(() => STATES_MOCK.map(state => state.name), [])
  const availableCities = useMemo(() => {
    const state = STATES_MOCK.find(state => state.name === selectedState)

    return state?.cities.map(city => city.name) ?? []
  }, [selectedState])

  const onSubmit = () => {
    const values = getValues()

    console.log(values);
  }

  return (
    <View style={styles.formContainer}>
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
          field: { onChange },
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
            onChangeItem={onChange}
            error={error?.message}
          />
        )}
      />

      <View style={styles.locationSelectorsContainer}>
        <Controller
          name={'state'}
          control={control}
          render={({
            field: { onChange },
            fieldState: { error }
          }) => (
            <Select
              label="Estado"
              labelColor={COLOR.GRAY_700}
              LabelIcon={MapPin}
              labelIconConfigs={{ color: COLOR.BLUE_DARK }}
              placeholder="UF"
              items={availableStates}
              onChange={onChange}
              error={error?.message}
              modalOptions={{ alignment: 'end' }}
            />
          )}
        />

        <Controller
          name={'city'}
          control={control}
          render={({
            field: { onChange },
            fieldState: { error }
          }) => (
            <Select
              key={`state-${selectedState}`}
              label="Cidade"
              labelColor={COLOR.GRAY_700}
              placeholder="Cidade"
              items={availableCities}
              disabled={!selectedState}
              onChange={onChange}
              error={error?.message}
              modalOptions={{ alignment: 'end' }}
            />
          )}
        />
      </View>

      <Controller
        name={'email'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="Email"
            LabelIcon={Mail}
            labelIconConfigs={{ color: COLOR.BLUE_DARK }}
            placeholder="Digite seu e-mail"
            value={value}
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />

      <Controller
        name={'password'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="Senha"
            LabelIcon={Lock}
            labelIconConfigs={{ color: COLOR.GREEN_DARK }}
            placeholder="Digite sua senha"
            value={value}
            onChangeText={onChange}
            error={error?.message}
            secureTextEntry
          />
        )}
      />

      <Controller
        name={'confirmedPassword'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Input
            label="Confirme sua senha"
            LabelIcon={Lock}
            labelIconConfigs={{ color: COLOR.GREEN_DARK }}
            placeholder="Digite sua senha"
            value={value}
            onChangeText={onChange}
            error={error?.message}
            secureTextEntry
          />
        )}
      />

      <Button
        label="Submeter"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    gap: SPACING.LG,
    padding: SPACING.XL,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.XL
  },
  locationSelectorsContainer: {
    flexDirection: 'row',
    gap: SPACING.MD
  }
})