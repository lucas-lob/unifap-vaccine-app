type VaccinesMock = {
  name: string
  dose: number
  applied: boolean
  description?: string
  dateOfAplication?: string
}

export const VACCINES_MOCK: VaccinesMock[] = [
  {
    name: 'HPV',
    dose: 1,
    applied: true,
    dateOfAplication: '2024-03-15'
  },
  {
    name: 'HPV',
    dose: 2,
    applied: false
  }
]