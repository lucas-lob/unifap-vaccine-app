import { Pressable, Text } from "react-native"
import { correctStatusStyles, idleStatusStyles, incorrectStatusStyles, styles } from "./styles"

type QuizAnswerItemProps = {
  answer: string
  status?: StatusEnum
  onPress?: () => void
}

const getStatusStyle = (status: StatusEnum) => {
  switch (status) {
    case 'idle':
      return idleStatusStyles
    case 'correct':
      return correctStatusStyles
    default:
      return incorrectStatusStyles
  }
}

export function QuizAnswerItem(props: QuizAnswerItemProps) {
  const {
    answer,
    status = 'idle',
    onPress = () => {}
  } = props

  const generalStyles = { ...styles, ...getStatusStyle(status) }

  return (
    <Pressable
      onPress={onPress}
      style={[
        generalStyles.container,
        generalStyles.containerStatus
      ]}
    >
      <Text
        style={[
          generalStyles.answer,
          generalStyles.answerStatus
        ]}
      >
        {answer}
      </Text>
    </Pressable>
  )
}