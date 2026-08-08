import { useCallback, useState } from 'react';
import { Text, View } from "react-native";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from "@/components/atoms/Button";
import { ErrorMessage } from '@/components/atoms/ErrorMessage';
import { useRegisterFormTabs } from '@/hooks/useRegisterFormTabs';

import { RegisterFormLocationInfos } from './Components/LocationInfos';
import { RegisterFormLoginInfos } from "./Components/LoginInfos";
import { RegisterFormPersonalInfos } from './Components/PersonalInfos';
import { RegisterFormBirthdayInfo } from './Components/BirthdayInfo';
import { FORM_INITIAL_VALUES, registerFormSchema, STEP_FIELDS } from "./schema";
import { styles } from './styles';

import type { IRegisterForm } from './schema'

export function RegisterForm() {
  const { tab, handleBackTab, handleNextTab, isLastTab } = useRegisterFormTabs()
  const formProps = useForm<IRegisterForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(registerFormSchema),
    reValidateMode: 'onSubmit',
  })
  const { getValues, trigger, clearErrors } = formProps

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const isBirthdayTab = tab.name === 'birthday'
  const isPersonalTab = tab.name === 'personal'
  const submitButtonLabel = isLastTab ? 'Cadastrar' : 'Continuar'

  const onSubmit = async () => {
    const values = getValues()

    console.log(values);
    setError('Aplicativo em fase de testes, o banco de dados ainda não foi integrado');

    // Requisition simulation
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
  }

  const handleSubmitButton = useCallback(async () => {
    setLoading(true)

    const isValidStep = await trigger(STEP_FIELDS[tab.name])

    if (isValidStep) {
      clearErrors()

      if (isLastTab) {
        await onSubmit()
      } else {
        handleNextTab()
      }
    }

    setLoading(false)
  }, [tab, isLastTab, onSubmit, handleNextTab, clearErrors])

  return (
    <FormProvider {...formProps}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Cadastro</Text>

          <Text style={styles.headerDescription}>{tab.description}</Text>
        </View>

        {isBirthdayTab && <RegisterFormBirthdayInfo />}

        {isPersonalTab && (
          <>
            <RegisterFormPersonalInfos />
            <RegisterFormLocationInfos />
          </>
        )}

        {isLastTab && <RegisterFormLoginInfos />}

        {!!error && <ErrorMessage message={error} />}

        <View style={styles.buttonsContainer}>
          <Button
            label={submitButtonLabel}
            onPress={handleSubmitButton}
            loading={loading}
          />

          <Button
            variant='primary-outline'
            label='Voltar'
            onPress={handleBackTab}
          />
        </View>
      </View>
    </FormProvider>
  )
}