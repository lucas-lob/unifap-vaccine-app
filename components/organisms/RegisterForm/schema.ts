import {
  object as _object,
  string as _string,
  enum as _enum
} from 'zod'

import type { infer as _infer } from 'zod'

import { CPF_REGEX } from '@/sdk/utils/constants'

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
  gender: _enum(['MALE', 'FEMALE'], "Selecione uma opção"),
  state: _string("Campo obrigatório"),
  city: _string("Campo obrigatório"),
})

export interface IRegisterForm extends _infer<typeof registerFormSchema> { }