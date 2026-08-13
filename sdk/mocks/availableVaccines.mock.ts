type VaccineSchema = {
  name: string
  isPeriodic: boolean
  maxDoses: number
}

export const AVAILABLE_VACCINES_MOCK: VaccineSchema[] = [
  {
    name: "Hepatite B",
    isPeriodic: false,
    maxDoses: 3
  },
  {
    name: "Meningocócica (ACWY)",
    isPeriodic: false,
    maxDoses: 1
  },
  {
    name: "HPV4",
    isPeriodic: false,
    maxDoses: 1
  },
  {
    name: "Febre amarela",
    isPeriodic: false,
    maxDoses: 1
  }, 
  {
    name: "Tríplice viral (SCR)",
    isPeriodic: false,
    maxDoses: 2
  }
]