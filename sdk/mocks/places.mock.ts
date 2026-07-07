type PlacesSchema = {
  name: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  ddd: string
  phone: string
  workingHours: string
}

export const UBS_MOCK: PlacesSchema[] = [
  {
    name: 'UBS Centro de Saúde',
    street: 'Rua das Flores',
    number: '123',
    neighborhood: 'Centro',
    city: 'Macapá',
    state: 'Amapá',
    ddd: '11',
    phone: '3333-4444',
    workingHours: 'Seg-Sex: 8h-17h'
  },
  {
    name: 'UBS Central',
    street: 'Av. Principal',
    number: '250',
    neighborhood: 'Centro',
    city: 'Macapá',
    state: 'Amapá',
    ddd: '11',
    phone: '3333-4445',
    workingHours: 'Seg-Sex: 7h-19h'
  },
  {
    name: 'UBS Jardinho',
    street: 'Av. Jorge Almeida',
    number: '12',
    neighborhood: 'Jardinho',
    city: 'Belém',
    state: 'Pará',
    ddd: '11',
    phone: '3333-4445',
    workingHours: 'Seg-Sex: 7h-19h'
  }
]