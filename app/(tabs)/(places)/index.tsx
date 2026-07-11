import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";
import { UbsList } from "@/components/organisms/UbsList";

export default function PlacesScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <SafeAreaView>
        <Text style={styles.title}>
          UBS próximas de você
        </Text>

        <UbsList />
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
  title: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.XL,
    marginBottom: SPACING.XL
  },

})