import { useMemo } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { MapPin } from "lucide-react-native";

import { Select } from "@/components/atoms/Select";

import { COLOR, SPACING } from "@/style/tokens";

import type { IRegisterForm } from "../schema";
import { useIbgeLocation } from "@/hooks/useIbgeLocation";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACING.MD
  }
})

export function RegisterFormLocationInfos() {
  const { states, selectedState, setSelectedState, cities, isLoading } = useIbgeLocation()

  const { control, setValue } = useFormContext<IRegisterForm>()
  useWatch<IRegisterForm>({
    name: "state",
    compute: (stateName) => {
      setValue('city', '')
      setSelectedState(undefined, stateName) 
    }
  })

  const availableStates = useMemo(() => states.map(state => state.nome), [states])
  const availableCities = useMemo(() => cities.map(city => city.nome), [cities])

  return (
    <View style={styles.container}>
      <Controller
        name={'state'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Select
            label="Estado"
            labelColor={COLOR.GRAY_700}
            LabelIcon={MapPin}
            labelIconConfigs={{ color: COLOR.BLUE_DARK }}
            placeholder="UF"
            items={availableStates}
            disabled={availableStates.length === 0 || isLoading}
            initialValue={value}
            onChange={onChange}
            error={error?.message}
            modalOptions={{ alignment: 'end', title: 'Selecione um estado' }}
          />
        )}
      />

      <Controller
        name={'city'}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }
        }) => (
          <Select
            key={`${selectedState?.id}-cities`}
            label="Cidade"
            labelColor={COLOR.GRAY_700}
            placeholder="Cidade"
            items={availableCities}
            disabled={availableCities.length === 0 || isLoading}
            initialValue={value}
            onChange={onChange}
            error={error?.message}
            modalOptions={{ alignment: 'end', title: 'Selecione uma cidade' }}
          />
        )}
      />
    </View>
  )
}