type StoriesSchema = {
  diseaseName: string
  creationYear: string
  creationDescription: string
  diseasesDescription: string
}

export const STORIES_MOCK: StoriesSchema[] = [
  {
    diseaseName: "HPV",
    creationYear: "2006",
    creationDescription: "A vacina contra o HPV foi desenvolvida após décadas de pesquisa sobre o papilomavírus humano. Em 2006, a primeira vacina foi aprovada, revolucionando a prevenção do câncer cervical. O Brasil incorporou a vacina no SUS em 2014 para meninas e, em 2017, para meninos.",
    diseasesDescription: "Previne infecções por HPV que podem causar câncer de colo do útero, vagina, vulva, pênis, ânus e orofaringe, além de verrugas genitais."
  },
  {
    diseaseName: "Meningocócica",
    creationYear: "1960",
    creationDescription: "As primeiras vacinas contra meningite meningocócica foram desenvolvidas nos anos 1960. No Brasil, após surtos graves, a vacinação foi ampliada. A vacina atual (ACWY e C) oferece proteção mais ampla contra diferentes tipos de meningococo.",
    diseasesDescription: "Previne meningite e meningococcemia causadas pelas bactérias Neisseria meningitidis. A doença pode levar a sequelas neurológicas graves e morte."
  },
  {
    diseaseName: "Difteria (dTpa)",
    creationYear: "1960",
    creationDescription: "A vacina contra difteria foi uma das primeiras vacinas bacterianas desenvolvidas, nos anos 1920. A combinação com tétano e pertussis (dTpa) surgiu para reforçar a proteção em adolescentes e adultos.",
    diseasesDescription: "Previne difteria (infecção que causa placas na garganta e pode asfixiar), tétano (espasmos musculares graves) e coqueluche (tosse intensa e prolongada)."
  },
  {
    diseaseName: "Hepatite B",
    creationYear: "1981",
    creationDescription: "A vacina contra hepatite B foi desenvolvida em 1981 e foi a primeira vacina contra um importante tipo de câncer. É uma das vacinas mais seguras e eficazes disponíveis.",
    diseasesDescription: "Previne a infecção pelo vírus da hepatite B, que pode causar cirrose hepática e câncer de fígado."
  },
  {
    diseaseName: "Febre Amarela",
    creationYear: "1937",
    creationDescription: "A vacina contra febre amarela foi criada em 1937 no Brasil, no Instituto Oswaldo Cruz. É uma das vacinas mais eficazes já criadas, com proteção duradoura.",
    diseasesDescription: "Previne a febre amarela, doença viral transmitida por mosquitos que pode causar insuficiência hepática, renal e morte."
  },
  {
    diseaseName: "Tríplice Viral",
    creationYear: "1971",
    creationDescription: "A vacina tríplice viral combina proteção contra sarampo (1963), caxumba (1967) e rubéola (1969). Foi crucial para eliminar o sarampo em muitos países.",
    diseasesDescription: "Previne sarampo (erupção cutânea, febre, pode causar encefalite), caxumba (inchaço das glândulas salivares) e rubéola (perigosa para gestantes)."
  },
  {
    diseaseName: "Varicela",
    creationYear: "1995",
    creationDescription: "A vacina contra varicela foi licenciada em 1995 nos EUA. No Brasil, entrou no calendário público em 2013 para crianças e foi ampliada para adolescentes.",
    diseasesDescription: "Previne a catapora (varicela), causada pelo vírus varicela-zóster, que provoca erupções com bolhas e coceira. Pode causar complicações graves."
  },
  {
    diseaseName: "Pneumocócica",
    creationYear: "2000",
    creationDescription: "As vacinas pneumocócicas evoluíram desde os anos 1970. As vacinas conjugadas modernas (PCV10, PCV13) foram introduzidas nos anos 2000, oferecendo proteção mais ampla.",
    diseasesDescription: "Previne doenças causadas pela bactéria Streptococcus pneumoniae, incluindo pneumonia, meningite, otite e sepse."
  },
]