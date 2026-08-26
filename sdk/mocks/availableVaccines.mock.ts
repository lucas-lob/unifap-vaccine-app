export type VaccineSchema = {
  id: string
  name: string
  isPeriodic: boolean
  maxDoses?: number
}

export const AVAILABLE_VACCINES_MOCK: VaccineSchema[] = [
  {
    id: "hepatite_b",
    name: "Hepatite B",
    isPeriodic: false,
    maxDoses: 3
  },
  {
    id: "acwy",
    name: "Meningocócica (ACWY)",
    isPeriodic: false,
    maxDoses: 1
  },
  {
    id: "hpv4",
    name: "HPV4",
    isPeriodic: false,
    maxDoses: 1
  },
  {
    id: "febre_amarela",
    name: "Febre amarela",
    isPeriodic: false,
    maxDoses: 1
  }, 
  {
    id: "scr",
    name: "Tríplice viral (SCR)",
    isPeriodic: false,
    maxDoses: 2
  },
  {
    id: "dt",
    name: "Difteria e tétano",
    isPeriodic: false,
    maxDoses: 3
  },
  {
    id: "pneumococica",
    name: "Pneumocócica 23-valente",
    isPeriodic: false,
    maxDoses: 2
  },
  {
    id: "influeza",
    name: "Influenza",
    isPeriodic: true
  }
]