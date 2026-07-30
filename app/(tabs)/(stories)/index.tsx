import { Syringe } from 'lucide-react-native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { StoryTab } from '@/components/organisms/StoryTab'
import { Quiz } from '@/components/molecules/Quiz'

import { QUIZ_MOCK } from '@/sdk/mocks/quiz.mock'
import { STORIES_MOCK } from '@/sdk/mocks/stories.mock'
import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from '@/style/tokens'

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
          {STORIES_MOCK.map((story, index) =>
            <StoryTab
              key={`story-${index}`}
              title={story.diseaseName}
              description={`Criada em ${story.creationYear}`}
              Icon={Syringe}
              creationDescription={story.creationDescription}
              diseaseDescription={story.diseasesDescription}
            />
          )}

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