import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

type DisclosureContentProps = {
  children: ReactNode
}

export function DisclosureContent({
  children
}: DisclosureContentProps) {
  return (
    <View style={styles.contentChild}>
      {children}
    </View>
  )
}