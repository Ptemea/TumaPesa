import { Stack } from "expo-router"

export default function AuthLayout() {
  return (
    <Stack
      initialRouteName="signin"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    />
  )
}