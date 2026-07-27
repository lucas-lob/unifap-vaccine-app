import { StyleSheet, Text, View } from "react-native";
import { Syringe } from "lucide-react-native";
import { useRouter } from "expo-router";

import Button from "@/components/atoms/Button";

import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SHADOW,
  SPACING
} from "@/style/tokens";

export default function AuthScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Syringe size={100} color={COLOR.BLUE_DARK} />
        </View>

        <Text style={styles.headerTitle}>Vacina Jovem</Text>
      </View>

      <View style={styles.actionsContainer}>
        <Button
          label="Criar conta"
          variant="tertiary"
          onPress={() => { router.replace('/RegisterForm') }}
        />

        <Button
          label="Entrar"
          variant="tertiary-outline"
          onPress={() => { router.replace('/LoginForm') }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.XL,
    padding: SPACING.XXL,
    backgroundColor: COLOR.BLUE_DARK
  },
  headerContainer: {
    gap: SPACING.XL
  },
  iconContainer: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    borderRadius: 9999,
    boxShadow: [SHADOW.LG]
  },
  headerTitle: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.XXL,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.XXL,
  },
  actionsContainer: {
    width: '100%',
    gap: SPACING.MD
  }
})