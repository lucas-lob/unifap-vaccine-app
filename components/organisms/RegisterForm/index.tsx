import { useCallback, useState } from 'react';
import { Text, View } from "react-native";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';

import Button from "@/components/atoms/Button";
import { ErrorMessage } from '@/components/atoms/ErrorMessage';
import { RegisterFormLocationInfos } from './Components/LocationInfos';
import { RegisterFormLoginInfos } from "./Components/LoginInfos";
import { RegisterFormPersonalInfos } from './Components/PersonalInfos';

import { FORM_INITIAL_VALUES, type IRegisterForm, registerFormSchema } from "./schema";
import { styles } from './styles';

type TRegisterFormTabs = 'personal' | 'login'

export function RegisterForm() {
  const router = useRouter()
  const formProps = useForm<IRegisterForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(registerFormSchema),
    reValidateMode: 'onSubmit',
  })
  const { getValues, trigger, clearErrors } = formProps

  const [tab, setTab] = useState<TRegisterFormTabs>('personal')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const isPersonalTab = tab === 'personal'
  const buttonLabel = isPersonalTab ? 'Continuar' : 'Cadastrar'

  const onSubmit = async () => {
    const values = getValues()

    console.log(values);
    setError('Aplicativo em fase de testes, o banco de dados ainda não foi integrado');

    // Requisition simulation
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
  }

  const handleSubmitButton = useCallback(async () => {
    setLoading(true)

    const isValidPersonalStep = await trigger([
      'name', 'responsableName', 'birthDay', 'cpf', 'gender', 'state', 'city'
    ])
    const isValidLoginStep = await trigger([
      'email', 'password', 'confirmedPassword'
    ])

    if (isPersonalTab && isValidPersonalStep) {
      clearErrors()
      setTab('login')

    } else if (isValidLoginStep) {
      await onSubmit()
    }

    setLoading(false)
  }, [tab])

  const handleBackButton = () => {
    setError(null)
    tab === 'login' ? setTab('personal') : router.replace('/(auth)')
  }

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

        {!!error && <ErrorMessage message={error} />}

        <View style={styles.buttonsContainer}>
          <Button
            label={buttonLabel}
            onPress={handleSubmitButton}
            loading={loading}
          />

          <Button
            variant='primary-outline'
            label='Voltar'
            onPress={handleBackButton}
          />
        </View>
      </View>
    </FormProvider>
  )
}