import { useMemo } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProgressBar } from "@/components/molecules/ProgressBar";
import { VACCINES_MOCK } from "@/sdk/mocks/vaccines.mock";
import { VaccinesList } from "@/components/organisms/VaccinesList";
import { COLOR, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, SPACING } from "@/style/tokens";

export default function WalletScreen() {

  const [vaccinesQuantity, appliedVaccinesQuantity] = useMemo(() => {
    const appliedVaccinesQuantity = VACCINES_MOCK.reduce((acc, value) => (
      value.applied ? ++acc : acc
    ), 0)

    return [VACCINES_MOCK.length, appliedVaccinesQuantity]
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Carteira de Vacina Digital</Text>

        <ProgressBar
          title="Progresso de vacinação"
          actualValue={appliedVaccinesQuantity}
          targetValue={vaccinesQuantity}
          showProgressLabel={true}
          showProgressQuantity={true}
        />
      </SafeAreaView>

      <VaccinesList title={"Histórico de Vacinas"} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: SPACING.LG,
    backgroundColor: COLOR.BLUE_DARK
  },
  title: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.XL,
    marginBottom: SPACING.XL
  },
})