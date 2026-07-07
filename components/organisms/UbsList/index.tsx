import { useMemo, useState } from "react"
import { View } from "react-native"

import { Select } from "@/components/atoms/Select"
import { PlaceCard } from "@/components/molecules/PlaceCard"
import { STATES_MOCK } from "@/sdk/mocks/localization.mock"
import { UBS_MOCK } from "@/sdk/mocks/places.mock"
import { styles } from "./styles"

export function UbsList() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const availableStates = useMemo(() => {
    return STATES_MOCK.map(state => state.name)
  }, [])

  const availableCities = useMemo(() => {
    if (!selectedState) return []
    const state = STATES_MOCK.find(state => state.name === selectedState)
    if (!state) return []

    return state.cities.map(city => city.name)
  }, [selectedState])

  return (
    <View style={styles.container}>
      <View style={styles.selectorsContainer}>
        <Select
          items={availableStates}
          onChange={setSelectedState}
          placeholder="UF"
          label="Estado"
          modalOptions={{
            alignment: 'end'
          }}
        />

        <Select
          items={availableCities}
          onChange={setSelectedCity}
          placeholder="Cidade"
          label="Cidade"
          disabled={!selectedState}
          modalOptions={{
            alignment: 'end'
          }}
        />
      </View>

      <View style={styles.listContainer}>
        {UBS_MOCK.map((place, index) => {
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
    </View>
  )
}