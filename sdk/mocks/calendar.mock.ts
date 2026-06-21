type CalendarOfVaccinesSchema = {
  name: string
  date: string
  minimumAge: number | null
  maximumAge: number | null
  isCampaign: boolean
} 

export const CALENDAR_OF_VACCINES: CalendarOfVaccinesSchema[] = [
  {
    name: "HPV - 2ª dose",
    date: "2026-06-14T00:00:00Z",
    minimumAge: 11,
    maximumAge: 14,
    isCampaign: false
  },
  {
    name: "dTpa (Tríplice Bacteriana)",
    date: "2026-06-19T00:00:00Z",
    minimumAge: 11,
    maximumAge: 14,
    isCampaign: false
  },
  {
    name: "Varicela - 2ª dose",
    date: "2026-08-09T00:00:00Z",
    minimumAge: 12,
    maximumAge: 13,
    isCampaign: false
  },
  {
    name: "Campanha Multivacinação",
    date: "2026-09-04T00:00:00Z",
    minimumAge: null,
    maximumAge: null,
    isCampaign: true
  }
]