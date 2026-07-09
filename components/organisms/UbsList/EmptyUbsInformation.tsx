import { CircleAlert } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { COLOR } from "@/style/tokens";

export function EmptyUbsInformation() {
  return (
    <View style={styles.emptyListContainer}>
      <CircleAlert color={COLOR.WHITE} size={100}/>

      <Text style={styles.emptyListDescription}>
        Nenhuma UBS foi encontrada!
      </Text>
    </View>
  )
}