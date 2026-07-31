import { useMemo, useState } from "react"
import { View } from "react-native"

import { Select } from "@/components/atoms/Select"
import { PlaceCard } from "@/components/molecules/PlaceCard"
import { useIbgeLocation } from "@/hooks/useIbgeLocation"
import { UBS_MOCK } from "@/sdk/mocks/places.mock"

import { styles } from "./styles"
import { EmptyUbsInformation } from "./EmptyUbsInformation"

export function UbsList() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const { states, selectedState, setSelectedState, cities, isLoading } = useIbgeLocation()

  const isUnselected = !selectedState || !selectedCity

  // Obtains only locations name for the selectors
  const availableStates = useMemo(
    () => states.map(state => state.nome).sort((a, b) => a.localeCompare(b)),
    [states]
  )
  const availableCities = useMemo(
    () => cities.map(city => city.nome).sort((a, b) => a.localeCompare(b)),
    [cities]
  )

  const ubsList = useMemo(() => {
    if (isUnselected) return []

    return UBS_MOCK.filter(ubs => ubs.city === selectedCity && ubs.state === selectedState.nome)
  }, [selectedCity])

  const handleStateChange = (stateName: string) => {
    setSelectedState(undefined, stateName)
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
          disabled={availableStates.length === 0 || isLoading}
          inputTextLines={1}
          modalOptions={{
            alignment: 'end',
            title: 'Selecione um estado'
          }}
        />

        <Select
          key={`${selectedState}-cities`}
          items={availableCities}
          onChange={setSelectedCity}
          placeholder="Cidade"
          label="Cidade"
          disabled={availableCities.length === 0 || isLoading}
          inputTextLines={1}
          modalOptions={{
            alignment: 'end',
            title: 'Selecione uma cidade'
          }}
        />
      </View>

      {ubsList.length > 0 || isUnselected
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