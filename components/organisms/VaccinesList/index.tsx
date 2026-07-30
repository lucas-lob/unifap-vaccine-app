import { Text, View } from "react-native"
import { CircleCheckBig } from "lucide-react-native"

import { StylizedTextContainer } from "@/components/molecules/StylizedTextContainer"
import { VACCINES_MOCK } from "@/sdk/mocks/vaccines.mock"
import { styles } from "./styles"

type VaccinesListProps = {
  title?: string
}

export function VaccinesList(props: VaccinesListProps) {
  const { title } = props

  return (
    <View style={styles.container}>
      {!!title && (
        <Text style={styles.title}>Histórico de Vacinas</Text>
      )}

      {VACCINES_MOCK.map((vaccine, index) => {
        let formattedApplicationDate: string | null = null

        if (vaccine.dateOfAplication) {
          const applicationDate = new Date(vaccine.dateOfAplication)
          const formatter = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' })

          formattedApplicationDate = formatter.format(applicationDate)
        }

        const descriptionLines = [
          `${vaccine.dose}ª dose`,
          ...(formattedApplicationDate
            ? [`Aplicada em: ${formattedApplicationDate}`]
            : [])
        ]

        return (
          <StylizedTextContainer
            key={`${index}_${vaccine.name}-${vaccine.dose}`}
            title={vaccine.name}
            description={descriptionLines}
            Icon={CircleCheckBig}
            color={vaccine.applied ? 'green' : 'orange'}
            tagLabel={vaccine.applied ? 'Tomada' : 'Pendente'}
            showBorder={true}
            isTitleColored={false}
          />
        )
      })}
    </View>
  )
}