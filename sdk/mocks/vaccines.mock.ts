type VaccinesMock = {
  name: string
  dose: number
  completed: boolean
  description?: string
  dateOfAplication?: string
}

export const VACCINES_MOCK: VaccinesMock[] = [
  {
    name: 'HPV',
    dose: 1,
    completed: true,
    dateOfAplication: '2024-03-15T00:00:00Z'
  },
  {
    name: 'HPV',
    dose: 2,
    completed: false
  }
]