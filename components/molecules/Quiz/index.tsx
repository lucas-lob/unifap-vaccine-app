import { QuizAnswerItem } from "@/components/atoms/QuizAnswerItem"
import { getThemeColors } from "@/sdk/utils/getThemeColors"
import { useState } from "react"
import { Text, View } from "react-native"
import { styles } from "./styles"

type QuizProps = {
  title: string
  question: string
  answers: string[]
  correctAnswer: string
  themeColor?: ThemeColorsEnum
}

const CORRECT_ANSWER_FEEDBACK = "Parabéns! Você acertou!"

export function Quiz(props: QuizProps) {
  const {
    title,
    question,
    answers,
    correctAnswer,
    themeColor = 'blue'
  } = props

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const isCorrectAnswer = selectedAnswer === correctAnswer

  const generalStyles = { ...styles, ...getThemeColors(themeColor) }

  return (
    <View style={generalStyles.container}>
      <Text style={[
        generalStyles.title,
        generalStyles.darkColor
      ]}
      >
        {title}
      </Text>

      <Text style={generalStyles.question}>
        {question}
      </Text>

      <View style={generalStyles.answersList}>
        {answers.map((answer, index) => {
          const answerId = `${index}-${answer.toLocaleLowerCase().replace(' ', '-')}`
          const answerStatus: StatusEnum = selectedAnswer === answer
            ? answer === correctAnswer
              ? 'correct'
              : 'incorrect'
            : 'idle'

          return (
            <QuizAnswerItem
              key={answerId}
              answer={answer}
              status={answerStatus}
              onPress={() => setSelectedAnswer(answer)}
            />
          )
        })}
      </View>

      {isCorrectAnswer && (
        <Text style={generalStyles.successMessage}>
          {CORRECT_ANSWER_FEEDBACK}
        </Text>
      )}
    </View>
  )
}