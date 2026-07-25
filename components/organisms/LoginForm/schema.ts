import {
  string as _string,
  email as _email,
  object as _object,
} from 'zod'

import type {infer as _infer} from 'zod'

export const loginFormSchema = _object({
  email: _email("Formato inválido").min(1, "Campo obrigatório"),
  password: _string().min(1, "Campo obrigatório")
})

export interface ILoginForm extends _infer<typeof loginFormSchema> {}

export const FORM_INITIAL_VALUES: ILoginForm = {
  email: "",
  password: ""
}