import { useState } from "react";
import { Syringe } from "lucide-react-native";
import { useFieldArray, useFormContext } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/atoms/Button";
import {
  BORDER_RADIUS, COLOR, FONT_SIZE,
  FONT_WEIGHT, LINE_HEIGHT, SPACING
} from "@/style/tokens";

import { VaccineItem } from "./VaccineItem";
import { NewVaccineModal } from "./NewVaccineModal";

import type { IRegisterForm } from "../../schema";

export function RegisterFormVaccinesInfo() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

  const { control } = useFormContext<IRegisterForm>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'vaccines'
  })

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Syringe color={COLOR.GREEN_DARK} />

        <Text style={styles.headerTitle}>
          Lista de vacinas
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          {fields.map((vaccine, index) =>
            <VaccineItem
              key={vaccine.id}
              onRemove={() => { remove(index) }}
              {...vaccine}
            />
          )}
        </View>

        <Button
          label="Adicionar vacina"
          variant="secondary-solid"
          height={40}
          onPress={() => setIsModalOpened(true)}
        />
      </View>

      <NewVaccineModal
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
        onAppend={append}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.SM
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM
  },
  headerTitle: {
    color: COLOR.GRAY_700,
    fontSize: FONT_SIZE.BASE,
    lineHeight: LINE_HEIGHT.BASE,
    fontWeight: FONT_WEIGHT.BOLD
  },
  contentContainer: {
    minHeight: 200,
    justifyContent: 'space-between',
    gap: SPACING.LG,
    padding: SPACING.MD,
    borderColor: COLOR.GRAY_500,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.LG
  },
  listContainer: {
    gap: SPACING.SM
  }
})