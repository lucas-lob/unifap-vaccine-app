import { Stack } from "expo-router";

export default function AuthPagesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="LoginForm" options={{ headerShown: false }} />
      <Stack.Screen name="RegisterForm" options={{ headerShown: false }} />
    </Stack>
  )
}