import { COLOR, FONT_SIZE, LINE_HEIGHT } from "@/style/tokens"
import { StyleSheet, Text, View } from "react-native"

type ErrorMessageProps = {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <View>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    color: COLOR.RED_DARK,
    fontSize: FONT_SIZE.SM,
    lineHeight: LINE_HEIGHT.SM,
  }
})