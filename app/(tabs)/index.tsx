import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen...</Text>
      <Link href={'/(tabs)/(stories)'}>Vá para a outra tela</Link>
    </SafeAreaView>
  );
}
