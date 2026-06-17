import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bug, CircleDot } from 'lucide-react-native'

import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from '@/sdk/constants/styles'

import { DiseaseTab } from '@/components/organisms/DiseaseTab'

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
          <DiseaseTab
            title='HPV'
            description='Papilomavírus Humano (HPV)'
            Icon={Bug}
            iconColor={'green'}
            symptomsTitle='Causa verrugas genitais e câncer cervical, vaginal, peniano e de garganta. Aproximadamente 80% das pessoas sexualmente ativas terão contato com HPV ao longo da vida.'
            diseaseDescription='Previne infecções por HPV que podem causar câncer de colo do útero, vagina, vulva, pênis, ânus e orofaringe, além de verrugas genitais.'
          />

          <DiseaseTab
            title='Meningite Meningocócica'
            description='Neisseria meningitidis'
            Icon={CircleDot}
            iconColor={'orange'}
            symptomsTitle='Causa verrugas genitais e câncer cervical, vaginal, peniano e de garganta. Aproximadamente 80% das pessoas sexualmente ativas terão contato com HPV ao longo da vida.'
            diseaseDescription='Previne infecções por HPV que podem causar câncer de colo do útero, vagina, vulva, pênis, ânus e orofaringe, além de verrugas genitais.'
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
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.MD
  },
})