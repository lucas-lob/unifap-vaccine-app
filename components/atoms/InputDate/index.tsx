import { ComponentType, useState } from "react"
import { useIntl } from "react-intl"
import { Pressable, Text, TextInput, View } from "react-native"
import { LucideProps } from "lucide-react-native"
import DateTimePicker from '@react-native-community/datetimepicker';

import type { TextInputProps } from "react-native"

import { COLOR } from "@/style/tokens"

import { styles } from "./styles"

interface InputDateProps extends TextInputProps {
  label?: string
  LabelIcon?: ComponentType<LucideProps>
  error?: string
  labelIconConfigs?: LucideProps
}

export function InputDate(props: InputDateProps) {
  const {
    label,
    LabelIcon,
    labelIconConfigs,
    error,
    style: textInputPropsStyle,
    ...textInputProps
  } = props
  
  const intl = useIntl()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const formattedDate = intl.formatDate(date, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

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
          value={date ? formattedDate : undefined}
        />
      </Pressable>

      {!!error && <Text style={styles.errorLabel}>{error}</Text>}

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