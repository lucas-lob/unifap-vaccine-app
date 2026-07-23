import { useMemo } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { MapPin } from "lucide-react-native";

import { Select } from "@/components/atoms/Select";

import { STATES_MOCK } from "@/sdk/mocks/localization.mock";
import { COLOR, SPACING } from "@/style/tokens";

import type { IRegisterForm } from "../schema";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACING.MD
  }
})

export function RegisterFormLocationInfos() {
  const { control } = useFormContext<IRegisterForm>()

  const selectedState = useWatch<IRegisterForm>({
    name: "state",
    compute: (data) => data 
  })

  const availableStates = useMemo(() => STATES_MOCK.map(state => state.name), [])
  const availableCities = useMemo(() => {
    const state = STATES_MOCK.find(state => state.name === selectedState)

    return state?.cities.map(city => city.name) ?? []
  }, [selectedState])

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
            initialValue={value}
            onChange={onChange}
            error={error?.message}
            modalOptions={{ alignment: 'end' }}
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
            key={`state-${selectedState}`}
            label="Cidade"
            labelColor={COLOR.GRAY_700}
            placeholder="Cidade"
            items={availableCities}
            disabled={!selectedState}
            initialValue={value}
            onChange={onChange}
            error={error?.message}
            modalOptions={{ alignment: 'end' }}
          />
        )}
      />
    </View>
  )
}