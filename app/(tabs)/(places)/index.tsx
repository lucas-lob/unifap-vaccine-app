import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PlaceCard } from "@/components/molecules/PlaceCard";
import { PLACES_MOCK } from "@/sdk/mocks/places.mock";
import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "@/style/tokens";

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

        <View style={styles.placesList}>
          {PLACES_MOCK.map((place, index) => {
            return (
              <PlaceCard
                key={`${index}-${place.name}`}
                name={place.name}
                street={place.street}
                neighborhood={place.neighborhood}
                number={place.number}
                workingHours={place.workingHours}
                ddd={place.ddd}
                phone={place.phone}
              />
            )
          })}
        </View>
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
  placesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.MD
  },
})