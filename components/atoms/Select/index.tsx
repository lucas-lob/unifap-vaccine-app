import { ChevronDown, LucideProps } from "lucide-react-native"
import { ComponentType, useEffect, useState } from "react"
import { Pressable, ScrollView, Text, View } from "react-native"

import { Modal, ModalOptions } from "../../molecules/Modal"

import { COLOR } from "@/style/tokens"
import { styles } from "./styles"
import { ErrorMessage } from "../ErrorMessage"

type SelectProps = {
  items: string[]
  onChange?: (value: string) => void
  initialValue?: string
  modalOptions?: ModalOptions
  label?: string
  labelColor?: string
  LabelIcon?: ComponentType<LucideProps>
  labelIconConfigs?: LucideProps
  error?: string
  placeholder?: string
  disabled?: boolean
  inputTextLines?: number
}

export function Select(props: SelectProps) {
  const {
    label,
    labelColor,
    placeholder = '',
    items,
    onChange = () => { },
    initialValue,
    LabelIcon,
    labelIconConfigs,
    error,
    modalOptions,
    disabled,
    inputTextLines = 1
  } = props
  const [selectedValue, setSelectedValue] = useState<string | null>(initialValue ?? null)
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

  useEffect(() => { 
    if(!selectedValue) return
    onChange(selectedValue) 
  }, [selectedValue])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!!label && (
          <View style={styles.labelContainer}>
            {!!LabelIcon && <LabelIcon {...labelIconConfigs} />}

            <Text style={[
              styles.labelText,
              ...(labelColor ? [{ color: labelColor }] : [])
            ]}>
              {label}
            </Text>
          </View>
        )}

        <Pressable onPress={() => setIsModalOpened(true)} disabled={disabled}>
          <View style={[
            styles.input,
            disabled ? styles.inputDisabled : {}
          ]}>
            <Text
              numberOfLines={inputTextLines}
              style={[
                styles.inputText,
                { color: selectedValue ? COLOR.GRAY_900 : COLOR.PLACEHOLDER_COLOR }
              ]}
            >
              {selectedValue ? selectedValue : placeholder}
            </Text>

            <ChevronDown size={24} color={disabled ? COLOR.GRAY_500 : COLOR.GRAY_900} />
          </View>
        </Pressable>

        {!!error && <ErrorMessage message={error} />}
      </View>

      <Modal
        visible={isModalOpened}
        setVisible={setIsModalOpened}
        {...modalOptions}
      >
        <ScrollView
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}
        >
          <View style={styles.listContainer}>
            {items.map((item, index) => (
              <Pressable
                key={`${index}-${item}`}
                onPress={() => {
                  setSelectedValue(item)
                  setIsModalOpened(false)
                }}
              >
                <Text
                  style={[
                    styles.listItem,
                    item === selectedValue ? styles.listItemSelected : {}
                  ]}
                >{item}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}