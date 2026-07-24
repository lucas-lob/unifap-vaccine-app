import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Text, View } from "react-native";

import Button from "@/components/atoms/Button";

import { useCallback, useState } from 'react';
import { RegisterFormLocationInfos } from './Components/LocationInfos';
import { RegisterFormLoginInfos } from "./Components/LoginInfos";
import { RegisterFormPersonalInfos } from './Components/PersonalInfos';
import { FORM_INITIAL_VALUES, type IRegisterForm, registerFormSchema } from "./schema";
import { styles } from './styles';

type TRegisterFormTabs = 'personal' | 'login'

export default function RegisterForm() {
  const formProps = useForm<IRegisterForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(registerFormSchema),
    reValidateMode: 'onSubmit',
  })
  const { getValues, trigger, clearErrors } = formProps

  const [tab, setTab] = useState<TRegisterFormTabs>('personal')

  const isPersonalTab = tab === 'personal'
  const buttonLabel = isPersonalTab ? 'Continuar' : 'Cadastrar'

  const onSubmit = () => {
    const values = getValues()

    console.log(values);
  }

  const buttonHandle = useCallback(async () => {
    const isValidPersonalStep = await trigger([
      'name', 'responsableName', 'birthDay', 'cpf', 'gender', 'state', 'city'
    ])
    const isValidLoginStep = await trigger([
      'email', 'password', 'confirmedPassword'
    ])

    if (isPersonalTab && isValidPersonalStep) {
      clearErrors()
      setTab('login')

    }
    if (!isPersonalTab && isValidLoginStep) onSubmit()
  }, [tab])

  return (
    <FormProvider {...formProps}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Cadastro</Text>

          <Text style={styles.headerDescription}>Preencha seus dados para começar</Text>
        </View>

        {isPersonalTab
          ? (
            <>
              <RegisterFormPersonalInfos />
              <RegisterFormLocationInfos />
            </>
          )
          : (
            <RegisterFormLoginInfos />
          )}

        <View style={styles.buttonsContainer}>
          <Button
            label={buttonLabel}
            onPress={buttonHandle}
          />

          {!isPersonalTab && (
            <Button
              variant='primary-outline'
              label='Voltar'
              onPress={() => setTab('personal')}
            />
          )}
        </View>
      </View>
    </FormProvider>
  )
}