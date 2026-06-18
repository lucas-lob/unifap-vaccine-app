import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

type DisclosureTriggerProps = {
  children: ReactNode
}

export function DisclosureTrigger({
  children
}: DisclosureTriggerProps) {
  return (
    <View style={styles.triggerChild}>
      {children}
    </View>
  )
}