import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from "react-native";

import Button from "@/components/atoms/Button";

import { BORDER_RADIUS, COLOR, SPACING } from "@/style/tokens";

import { type IRegisterForm, registerFormSchema } from "./schema";
import { RegisterFormLoginInfos } from "./Components/LoginInfos";
import { RegisterFormPersonalInfos } from './Components/PersonalInfos';
import { RegisterFormLocationInfos } from './Components/LocationInfos';

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
  const formProps = useForm<IRegisterForm>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: zodResolver(registerFormSchema),
    reValidateMode: 'onSubmit',
  })

  const { handleSubmit, getValues } = formProps

  const onSubmit = () => {
    const values = getValues()

    console.log(values);
  }

  return (
    <FormProvider {...formProps}>
      <View style={styles.formContainer}>
        <RegisterFormPersonalInfos />

        <RegisterFormLocationInfos />

        <RegisterFormLoginInfos />

        <Button
          label="Submeter"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    gap: SPACING.LG,
    padding: SPACING.XL,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.XL
  }
})