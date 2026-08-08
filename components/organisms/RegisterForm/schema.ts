import {
  object as _object,
  string as _string,
  enum as _enum,
  email as _email
} from 'zod'

import { CPF_REGEX } from '@/sdk/utils/constants'

import type { infer as _infer } from 'zod'

export const registerFormSchema = _object({
  name: _string()
    .min(1, "Campo obrigatório"),
  responsableName: _string()
    .min(1, "Campo obrigatório"),
  birthDay: _string("Campo obrigatório")
    .min(1, "Campo obrigatório"),
  cpf: _string()
    .min(1, "Campo obrigatório")
    .regex(CPF_REGEX, "Formato inválido"),
  gender: _enum(['MALE', 'FEMALE', ''], "Selecione uma opção"),
  state: _string()
    .min(1, "Campo obrigatório"),
  city: _string()
    .min(1, "Campo obrigatório"),
  email: _email("Formato inválido")
    .min(1, "Campo obrigatório"),
  password: _string("Formato inválido")
    .min(1, "Campo obrigatório"),
  confirmedPassword: _string("Formato inválido")
    .min(1, "Campo obrigatório")
}).superRefine((data, ctx) => {
  if (data.gender === '') {
    ctx.addIssue({
      code: "invalid_value",
      values: ["string"],
      message: "Campo obrigatório",
      path: ["gender"]
    })
  }

  if (data.password !== data.confirmedPassword) {
    ctx.addIssue({
      code: "invalid_value",
      values: ["string"],
      message: "As senhas devem ser semelhantes",
      path: ["confirmedPassword"]
    })
  }
})

export interface IRegisterForm extends _infer<typeof registerFormSchema> { }

export const FORM_INITIAL_VALUES: IRegisterForm = {
  name: "",
  responsableName: "",
  birthDay: "",
  cpf: "",
  gender: "",
  state: "",
  city: "",
  email: "",
  password: "",
  confirmedPassword: ""
}

type TRegisterFormStep = 'birthday' | 'personal' | 'login'

export const STEP_FIELDS: Record<TRegisterFormStep, (keyof IRegisterForm)[]> = {
  birthday: ['birthDay'],
  personal: ['name', 'responsableName', 'cpf', 'gender', 'state', 'city'],
  login: ['email', 'password', 'confirmedPassword'],
}