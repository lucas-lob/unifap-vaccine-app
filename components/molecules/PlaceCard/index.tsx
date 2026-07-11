import { Text, View } from "react-native"
import { Clock, MapPin, Navigation, Phone } from "lucide-react-native"

import Button from "@/components/atoms/Button"
import { COLOR } from "@/style/tokens"

import { styles } from "./styles"

type PlaceCardProps = {
  name: string
  street: string
  number: string
  neighborhood: string
  ddd: string
  phone: string
  workingHours: string
}

export function PlaceCard(props: PlaceCardProps) {
  const {
    name,
    street,
    number,
    neighborhood,
    ddd,
    phone,
    workingHours
  } = props

  const formattedAddress = `${street}, ${number} - ${neighborhood}`
  const formattedPhone = `(${ddd}) ${phone}`

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name}
      </Text>

      <View style={styles.textContainer}>
        <MapPin width={16} color={COLOR.BLUE_DARK} />

        <Text style={styles.text}>
          {formattedAddress}
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Clock width={16} color={COLOR.ORANGE_DARK} />

        <Text style={styles.text}>
          {workingHours}
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Phone width={16} color={COLOR.GREEN_DARK} />

        <Text style={styles.text}>
          {formattedPhone}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          label="Rotas"
          Icon={Navigation}
          variant="primary-solid"
        />

        <Button
          label="Ligar"
          Icon={Phone}
          variant="secondary-solid"
        />
      </View>
    </View>
  )
}