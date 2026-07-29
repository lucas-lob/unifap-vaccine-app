import { ComponentType, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { LucideProps } from "lucide-react-native";

import type { TextInputProps } from "react-native";

import { COLOR } from "@/style/tokens";

import { styles } from "./styles";
import { ErrorMessage } from "../ErrorMessage";

interface InputDateProps extends TextInputProps {
  label?: string
  LabelIcon?: ComponentType<LucideProps>
  error?: string
  labelIconConfigs?: LucideProps
  onChangeText: (date: string | null) => void
}

export function InputDate(props: InputDateProps) {
  const {
    label,
    LabelIcon,
    labelIconConfigs,
    error,
    onChangeText,
    style: textInputPropsStyle,
    value,
    ...textInputProps
  } = props
  const intl = useIntl()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [date, setDate] = useState<Date | null>(null)

  const formattedDate = date
    ? intl.formatDate(date, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    : (value ? value : null)

  useEffect(() => { onChangeText(formattedDate) }, [formattedDate])

  return (
    <View style={styles.container}>
      {!!label && (
        <View style={styles.labelContainer}>
          {!!LabelIcon && <LabelIcon {...labelIconConfigs} />}

          <Text style={styles.labelText}>
            {label}
          </Text>
        </View>
      )}

      <Pressable onPress={() => setOpenModal(true)}>
        <TextInput
          {...textInputProps}
          style={[
            styles.inputContainer,
            textInputPropsStyle,
            ...(!!error ? [{ borderColor: COLOR.RED_DARK }] : [])
          ]}
          placeholderTextColor={COLOR.GRAY_500}
          readOnly
          value={formattedDate ? formattedDate : ""}
        />
      </Pressable>

      {!!error && <ErrorMessage message={error} />}

      {
        openModal &&
        <DateTimePicker
          value={date ?? new Date()}
          mode='date'
          display='spinner'
          themeVariant='light'
          maximumDate={new Date()}
          onValueChange={(_event, selectedDate) => {
            setDate(selectedDate)
            setOpenModal(false)
          }}
          onDismiss={() => setOpenModal(false)}
        />
      }

    </View>
  )
}