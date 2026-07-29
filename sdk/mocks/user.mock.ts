type UserSchema = {
  name: string
  responsableName: string
  birthDay: string
  cpf: string
  gender: 'MALE' | 'FEMALE'
  state: string
  city: string
  email: string
  password: string
}

export const USERS_MOCK: UserSchema[] = [
  {
    name: "Admin",
    email: "admin.app@email.com",
    cpf: "00000000000",
    responsableName: "Responsável do Admin",
    state: "Amapá",
    city: "Macapá",
    gender: "MALE",
    birthDay: "2026-07-29",
    password: "admin123"
  }
]