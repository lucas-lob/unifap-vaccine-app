type CalendarOfVaccinesSchema = {
  name: string
  minimumAge: number | null
  maximumAge: number | null
  isCampaign: boolean
} 

export const CALENDAR_OF_VACCINES: CalendarOfVaccinesSchema[] = [
  {
    name: "HPV - 2ª dose",
    minimumAge: 11,
    maximumAge: 14,
    isCampaign: false
  },
  {
    name: "dTpa (Tríplice Bacteriana)",
    minimumAge: 11,
    maximumAge: 14,
    isCampaign: false
  },
  {
    name: "Varicela - 2ª dose",
    minimumAge: 12,
    maximumAge: 13,
    isCampaign: false
  },
  {
    name: "Campanha Multivacinação",
    minimumAge: null,
    maximumAge: null,
    isCampaign: true
  }
]