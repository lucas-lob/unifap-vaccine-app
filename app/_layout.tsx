import { Stack } from "expo-router";
import { IntlProvider } from "react-intl";

export default function RootLayout() {
  return (
    <IntlProvider locale="pt-BR">
      <Stack>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </IntlProvider>
  )
}
