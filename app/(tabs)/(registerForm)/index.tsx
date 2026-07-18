import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RegisterForm from "@/components/organisms/RegisterForm";

import { COLOR, SPACING } from "@/style/tokens";

export default function RegisterFormScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <SafeAreaView>
        <RegisterForm />
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
})