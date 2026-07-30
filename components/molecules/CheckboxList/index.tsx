import { Checkbox } from "@/components/atoms/Checkbox";
import { LucideProps } from "lucide-react-native";
import { ComponentType, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { ErrorMessage } from "@/components/atoms/ErrorMessage";

type CheckboxItem = {
  label: string
  id: string
}

type CheckboxListProps = {
  items: CheckboxItem[]
  title?: string
  TitleIcon?: ComponentType<LucideProps>
  titleIconConfigs?: LucideProps
  initialSelectedId?: string
  onChangeItem?: (selectedId: string | null) => void
  error?: string
  theme?: ThemeColorsEnum
}

export function CheckboxList(props: CheckboxListProps) {
  const {
    items,
    title,
    TitleIcon,
    titleIconConfigs,
    error,
    initialSelectedId,
    onChangeItem = () => {},
    theme
  } = props

  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId ?? null)

  useEffect(() => {onChangeItem(selectedId)}, [selectedId])

  if (items.length === 0) return null

  return (
    <View style={styles.container}>
      {!!title && (
        <View style={styles.titleContainer}>
          {!!TitleIcon && <TitleIcon {...titleIconConfigs} />}

          <Text style={styles.titleText}>
            {title}
          </Text>
        </View>
      )}

      <View style={styles.listContainer}>
        {items.map((item, index) => {
          return (
            <View
              key={`${index}-${item.id}`}
              style={styles.listItem}
            >
              <Checkbox
                isActive={item.id === selectedId}
                label={item.label}
                theme={theme}
                onPress={() => { setSelectedId(item.id) }}
              />
            </View>
          )
        })}
      </View>

      {!!error && <ErrorMessage message={error} />}
    </View>
  )
}