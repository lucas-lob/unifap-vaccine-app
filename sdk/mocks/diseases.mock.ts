type DiseasesSchema = {
  diseaseName: string
  diseaseDescription: string
  symptomsDescription: string
  statisticsDescription: string
  showWarningIcon?: boolean
  videoUrl?: string
}

export const DISEASES_MOCK: DiseasesSchema[] = [
  {
    diseaseName: "HPV",
    diseaseDescription: "Papilomavírus Humano (HPV)",
    symptomsDescription: "Causa verrugas genitais e câncer cervical, vaginal, peniano e de garganta. Aproximadamente 80% das pessoas sexualmente ativas terão contato com HPV ao longo da vida.",
    statisticsDescription: "No Brasil, o câncer de colo do útero é o 3º mais comum entre mulheres, com 16.710 novos casos por ano (INCA). A vacina previne até 90% dos casos."
  },
  {
    diseaseName: "Meningite Meningocócica",
    diseaseDescription: "Neisseria meningitidis",
    symptomsDescription: "Infecção das membranas que envolvem o cérebro e medula. Sintomas: febre alta, rigidez no pescoço, manchas roxas na pele, confusão mental. Pode matar em 24 horas.",
    statisticsDescription: "No Brasil, ocorrem cerca de 1.000 casos/ano com letalidade de 20%. Entre sobreviventes, 10-20% ficam com sequelas (surdez, amputações).",
    showWarningIcon: true
  },
  {
    diseaseName: "Difteria",
    diseaseDescription: "Corynebacterium diphtheriae",
    symptomsDescription: "Infecção que forma placas grossas na garganta, dificultando respiração. Produz toxina que afeta coração e nervos. Pode causar paralisia e morte por asfixia.",
    statisticsDescription: "Antes da vacina, matava 1 em cada 10 crianças infectadas. Hoje é rara no Brasil devido à vacinação em massa.",
    showWarningIcon: true
  },
  {
    diseaseName: "Hepatite B",
    diseaseDescription: "Vírus da Hepatite B (HBV)",
    symptomsDescription: "Infecção do fígado que pode ser aguda ou crônica. Causa fadiga, icterícia, dor abdominal. Infecção crônica leva a cirrose e câncer de fígado.",
    statisticsDescription: "Globalmente, 296 milhões vivem com hepatite B crônica. No Brasil, 15.000 novos casos/ano. Vacina previne 95% das infecções."
  },
  {
    diseaseName: "Febre amarela",
    diseaseDescription: "Vírus da Febre Amarela",
    symptomsDescription: "Transmitida por mosquitos. Causa febre, dores musculares, icterícia. Forma grave: hemorragias, insuficiência renal e hepática, com letalidade de 50%.",
    statisticsDescription: "Em 2017-2018, Brasil teve surto com 2.043 casos e 676 mortes. Vacina é 99% eficaz e proteção dura a vida toda."
  },
  {
    diseaseName: "Sarampo (Tríplice Viral)",
    diseaseDescription: "Vírus do Sarampo",
    symptomsDescription: "Altamente contagioso. Causa febre alta, tosse, coriza, manchas vermelhas pelo corpo. Complicações: pneumonia, encefalite (inflamação cerebral), morte.",
    statisticsDescription: "Antes da vacina, matava 2,6 milhões/ano globalmente. No Brasil, em 2019, ressurgiu com 18.203 casos após queda na cobertura vacinal."
  },
  {
    diseaseName: "Caxumba (Tríplice Viral)",
    diseaseDescription: "Vírus da Caxumba",
    symptomsDescription: "Causa inchaço doloroso das glândulas salivares. Complicações: meningite, surdez permanente, inflamação dos testículos (pode causar infertilidade).",
    statisticsDescription: "Antes da vacina, 90% das crianças pegavam caxumba. Vacina reduziu casos em 99% nos países com boa cobertura."
  },
  {
    diseaseName: "Varicela (Catapora)",
    diseaseDescription: "Vírus Varicela-Zóster",
    symptomsDescription: "Erupção com bolhas que coçam intensamente. Complicações: infecções bacterianas na pele, pneumonia, encefalite. Adolescentes têm formas mais graves.",
    statisticsDescription: "Antes da vacina, causava 4 milhões de casos/ano no Brasil. Vacina previne 90% dos casos graves."
  },
  {
    diseaseName: "Pneumococo",
    diseaseDescription: "Streptococcus pneumoniae",
    symptomsDescription: "Causa pneumonia (infecção nos pulmões), meningite, otite e sinusite. Sintomas: febre, dificuldade respirar, dor no peito.",
    statisticsDescription: "Principal causa de pneumonia bacteriana. No Brasil, antes da vacina, causava 10.000 meningites/ano com letalidade de 30%.",
    showWarningIcon: true
  },
]
