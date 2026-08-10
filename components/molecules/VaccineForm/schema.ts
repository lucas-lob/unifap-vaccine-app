import {
  string as _string,
  number as _number,
  boolean as _boolean,
  object as _object
} from 'zod'

import type { infer as _infer } from 'zod'

export const vaccineFormSchema = _object({
  name: _string()
    .min(1, "Campo obrigatório"),
  isPeriodic: _boolean(),
  doses: _number()
    .optional(),
  applicationDate: _string("Campo obrigatório")
    .min(1, "Campo obrigatório")
}).superRefine((data, context) => {
  if (!data.isPeriodic && !data.doses) {
    context.addIssue({
      code: "invalid_value",
      values: ["number"],
      message: "É necessário informar a quantidade de doses",
      path: ["doses"]
    })
  }
})

export interface IVaccineForm extends _infer<typeof vaccineFormSchema> { }

export const FORM_INITIAL_VALUES: IVaccineForm = {
  name: "",
  isPeriodic: false,
  doses: undefined,
  applicationDate: ""
} 