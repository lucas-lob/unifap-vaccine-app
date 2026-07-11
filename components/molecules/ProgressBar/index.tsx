import { Text, View } from "react-native"
import { styles } from "./styles"

type ProgressBarProps = {
  actualValue: number
  targetValue: number
  title: string
  showProgressQuantity?: boolean
  showProgressLabel?: boolean
}

export function ProgressBar(props: ProgressBarProps) {
  const {
    title,
    actualValue, targetValue,
    showProgressLabel, showProgressQuantity
  } = props

  const percentualCompleted = (actualValue / targetValue) * 100

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          {title}
        </Text>

        {showProgressQuantity && (
          <Text style={styles.quantityLabel}>
            {`${actualValue}/${targetValue}`}
          </Text>
        )}
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[
          styles.progressBar,
          {width: `${percentualCompleted}%`}
        ]}
        />
      </View>

      {showProgressLabel && (
        <Text style={styles.progressLabel}>
          {percentualCompleted}% completo
        </Text>
      )}
    </View>
  )
}