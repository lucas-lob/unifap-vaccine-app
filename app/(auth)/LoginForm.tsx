import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginForm } from "@/components/organisms/LoginForm";

import { COLOR, SPACING } from "@/style/tokens";

export default function LoginFormScreen() {
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView 
      showsVerticalScrollIndicator={true} 
      automaticallyAdjustContentInsets={true}
      contentContainerStyle={styles.container}
      >
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    padding: SPACING.LG,
    backgroundColor: COLOR.BLUE_DARK
  },
})