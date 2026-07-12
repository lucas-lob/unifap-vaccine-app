import { CircleCheckBig } from "lucide-react-native";
import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProgressBar } from "@/components/molecules/ProgressBar";
import { StylizedTextContainer } from "@/components/molecules/StylizedTextContainer";
import { VACCINES_MOCK } from "@/sdk/mocks/vaccines.mock";

export default function WalletScreen() {

  const [vaccines, vaccinesQuantity, appliedVaccinesQuantity] = useMemo(() => {
    const appliedVaccinesQuantity = VACCINES_MOCK.reduce((acc, value) => ( 
      value.applied ? ++acc : acc
    ), 0)

    return [VACCINES_MOCK, VACCINES_MOCK.length, appliedVaccinesQuantity]
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <SafeAreaView>
        <Text>Carteira de Vacina Digital</Text>

        <ProgressBar
          title="Progresso de vacinação"
          actualValue={appliedVaccinesQuantity}
          targetValue={vaccinesQuantity}
          showProgressLabel={true}
          showProgressQuantity={true}
        />
      </SafeAreaView>

      <View>
        <Text>Histórico de Vacinas</Text>

        {vaccines.map((vaccine, index) => {
          let formattedApplicationDate: string | null = null

          if (vaccine.dateOfAplication) {
            const applicationDate = new Date(vaccine.dateOfAplication)
            const formatter = new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'})

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
            />
          )
        })}
      </View>
    </ScrollView>
  )
}