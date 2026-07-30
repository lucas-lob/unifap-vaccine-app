import { Bug, CircleDot } from 'lucide-react-native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { DiseaseTab } from '@/components/organisms/DiseaseTab'
import { SimpleTextContainer } from '@/components/molecules/SimpleTextContainer'

import { DISEASES_MOCK } from '@/sdk/mocks/diseases.mock'
import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from '@/style/tokens'

export default function DiseaseScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <SafeAreaView>
        <Text style={styles.title}>
          Vacinas e Doenças Prevenidas
        </Text>

        <View style={styles.storiesList}>
          {DISEASES_MOCK.map((disease, index) =>
            <DiseaseTab
              key={`disease-${index}`}
              title={disease.diseaseName}
              description={disease.diseaseDescription}
              Icon={disease.showWarningIcon ? CircleDot : Bug}
              iconColor={disease.showWarningIcon ? 'red' : 'purple'}
              symptomsTitle={disease.symptomsDescription}
              statiscsDescription={disease.statisticsDescription}
            />
          )}

          <SimpleTextContainer
            title='💡 Você sabia?'
            content='As vacinas salvam 2-3 milhões de vidas por ano no mundo, segundo a OMS. Elas são uma das maiores conquistas da medicina moderna!'
          />
        </View>
      </SafeAreaView>
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
  storiesList: {
    gap: SPACING.MD
  },
})