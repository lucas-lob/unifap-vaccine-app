import { Syringe } from 'lucide-react-native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { StoryTab } from '@/components/organisms/StoryTab'

import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from '@/style/tokens'
import { Quiz } from '@/components/molecules/Quiz'
import { QUIZ_MOCK } from '@/sdk/mocks/quiz.mock'

export default function StoriesScreen() {
  return (
    <ScrollView

      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <SafeAreaView>
        <Text style={styles.title}>
          História das Vacinas
        </Text>

        <View style={styles.storiesList}>
          <StoryTab
            title='HPV'
            description='Criada em 2006'
            Icon={Syringe}
            creationDescription='A vacina contra o HPV foi desenvolvida após décadas de pesquisa sobre o papilomavírus humano. Em 2006, a primeira vacina foi aprovada, revolucionando a prevenção do câncer cervical. O Brasil incorporou a vacina no SUS em 2014 para meninas e, em 2017, para meninos.'
            diseaseDescription='Previne infecções por HPV que podem causar câncer de colo do útero, vagina, vulva, pênis, ânus e orofaringe, além de verrugas genitais.'
          />

          <StoryTab
            title='HPV'
            description='Criada em 2006'
            Icon={Syringe}
            creationDescription='A vacina contra o HPV foi desenvolvida após décadas de pesquisa sobre o papilomavírus humano. Em 2006, a primeira vacina foi aprovada, revolucionando a prevenção do câncer cervical. O Brasil incorporou a vacina no SUS em 2014 para meninas e, em 2017, para meninos.'
            diseaseDescription='Previne infecções por HPV que podem causar câncer de colo do útero, vagina, vulva, pênis, ânus e orofaringe, além de verrugas genitais.'
          />

          <Quiz
            title='Quiz de Vacinas 🎯'
            question={QUIZ_MOCK[0].question}
            answers={QUIZ_MOCK[0].answers}
            correctAnswer={QUIZ_MOCK[0].correctAnswer}
            themeColor='orange'
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