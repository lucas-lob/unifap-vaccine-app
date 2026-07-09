import { useMemo, useState } from "react"
import { View } from "react-native"

import { Select } from "@/components/atoms/Select"
import { PlaceCard } from "@/components/molecules/PlaceCard"
import { STATES_MOCK } from "@/sdk/mocks/localization.mock"
import { UBS_MOCK } from "@/sdk/mocks/places.mock"

import { styles } from "./styles"
import { EmptyUbsInformation } from "./EmptyUbsInformation"

export function UbsList() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const availableStates = useMemo(() => STATES_MOCK.map(state => state.name), [])

  const availableCities = useMemo(() => {
    if (!selectedState) return []
    const state = STATES_MOCK.find(state => state.name === selectedState)

    return state?.cities.map(city => city.name) ?? []
  }, [selectedState])

  const ubsList = useMemo(() => {
    if (!selectedState || !selectedCity) return []

    return UBS_MOCK.filter(ubs => ubs.city === selectedCity && ubs.state === selectedState)
  }, [selectedCity])

  const handleStateChange = (state: string) => {
    setSelectedState(state)
    setSelectedCity(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectorsContainer}>
        <Select
          items={availableStates}
          onChange={handleStateChange}
          placeholder="UF"
          label="Estado"
          inputTextLines={1}
          modalOptions={{
            alignment: 'end'
          }}
        />

        <Select
          key={`${selectedState}-cities`}
          items={availableCities}
          onChange={setSelectedCity}
          placeholder="Cidade"
          label="Cidade"
          disabled={!selectedState}
          inputTextLines={1}
          modalOptions={{
            alignment: 'end'
          }}
        />
      </View>

      {ubsList.length > 0
        ? (
          <View style={styles.listContainer}>
            {ubsList.map((ubs, index) => {
              return (
                <PlaceCard
                  key={`${index}-${ubs.name}`}
                  name={ubs.name}
                  street={ubs.street}
                  neighborhood={ubs.neighborhood}
                  number={ubs.number}
                  workingHours={ubs.workingHours}
                  ddd={ubs.ddd}
                  phone={ubs.phone}
                />
              )
            })}
          </View>
        )
        : (
          <EmptyUbsInformation />
        )
      }


    </View>
  )
}