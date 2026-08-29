import DateTimePicker from '@react-native-community/datetimepicker';
import { LucideProps } from "lucide-react-native";
import { ComponentType, useState } from "react";
import { useIntl } from "react-intl";
import { Pressable, Text, TextInput, View } from "react-native";

import type { TextInputProps } from "react-native";

import { getOnlyDateISOString } from '@/sdk/utils/date';
import { COLOR } from "@/style/tokens";

import { ErrorMessage } from "../ErrorMessage";
import { styles } from "./styles";

interface InputDateProps extends TextInputProps {
  onChangeDate: (date: string | null) => void
  label?: string
  LabelIcon?: ComponentType<LucideProps>
  error?: string
  labelIconConfigs?: LucideProps
  maxDate?: Date
}

export function InputDate(props: InputDateProps) {
  const {
    label,
    LabelIcon,
    labelIconConfigs,
    error,
    onChangeDate,
    style: textInputPropsStyle,
    value = "",
    maxDate,
    ...textInputProps
  } = props
  const intl = useIntl()
  const [openModal, setOpenModal] = useState<boolean>(false)

  // Check if value is valid date ISO string
  const parsedDate = value ? new Date(value) : null;
  const isValidDate = parsedDate && !isNaN(parsedDate.getTime());

  const formattedDateToDisplay = isValidDate
    ? intl.formatDate(parsedDate, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC'
    })
    : value

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
          value={formattedDateToDisplay}
        />
      </Pressable>

      {!!error && <ErrorMessage message={error} />}

      {openModal &&
        <DateTimePicker
          value={new Date()}
          mode='date'
          display='spinner'
          themeVariant='light'
          maximumDate={maxDate ?? new Date()}
          onValueChange={(_event, selectedDate) => {
            const onlyDateISOString = getOnlyDateISOString(selectedDate)

            onChangeDate(onlyDateISOString)
            setOpenModal(false)
          }}
          onDismiss={() => setOpenModal(false)}
        />
      }

    </View>
  )
}