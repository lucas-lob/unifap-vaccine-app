import {
  string as _string,
  coerce as _coerce,
  boolean as _boolean,
  object as _object
} from 'zod'

import type { infer as _infer } from 'zod'

export const vaccineFormSchema = _object({
  id: _string()
    .min(1, "Campo obrigatório"),
  name: _string()
    .min(1, "Campo obrigatório"),
  isPeriodic: _boolean(),
  doses: _coerce.number<number>("Insira um valor válido")
    .optional(),
  lastApplicationDate: _string("Insira um valor válido")
}).superRefine((data, ctx) => {
  if (!data.isPeriodic && !data.doses) {
    ctx.addIssue({
      code: "invalid_value",
      values: ["number"],
      message: "É necessário informar a quantidade de doses",
      path: ["doses"]
    })
  }

  if (!data.lastApplicationDate) {
    ctx.addIssue({
      code: "invalid_value",
      values: ["string"],
      message: "Campo obrigatório",
      path: ["lastApplicationDate"]
    })
  }
})

export interface IVaccineForm extends _infer<typeof vaccineFormSchema> { }