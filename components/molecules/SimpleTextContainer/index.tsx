import { Text, View } from "react-native"
import { styles } from "./styles"

type SimpleTextContainerProps = {
  title: string
  content: string
}

export function SimpleTextContainer(props: SimpleTextContainerProps) {
  const {
    title,
    content
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.content}>{content}</Text>
    </View>
  )
}