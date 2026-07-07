import { ChevronDown } from "lucide-react-native"
import { useState } from "react"
import { Pressable, ScrollView, Text, View } from "react-native"

import { Modal, ModalOptions } from "../Modal"

import { COLOR } from "@/style/tokens"
import { styles } from "./styles"

type SelectProps = {
  items: string[]
  onChange?: (value: string) => void
  modalOptions?: ModalOptions
  label?: string
  placeholder?: string
  disabled?: boolean
}

export function Select(props: SelectProps) {
  const {
    label,
    placeholder = '',
    items,
    onChange = () => { },
    modalOptions,
    disabled
  } = props
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

  const handleItemPress = (item: string) => {
    setSelectedValue(item)
    onChange(item)
    setIsModalOpened(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!!label && <Text style={styles.inputLabel}>{label}</Text>}

        <Pressable onPress={() => {if (!disabled) setIsModalOpened(true)}} disabled={disabled}>
          <View style={styles.input}>
            <Text
              style={[
                styles.inputText,
                { color: selectedValue ? COLOR.GRAY_900 : COLOR.PLACEHOLDER_COLOR }
              ]}
            >
              {selectedValue ? selectedValue : placeholder}
            </Text>

            <ChevronDown size={24} color={COLOR.GRAY_900} />
          </View>
        </Pressable>
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
                onPress={() => handleItemPress(item)}
              >
                <Text style={styles.listItem}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}