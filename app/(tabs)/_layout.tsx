import { Tabs } from "expo-router";
import { BookOpen, Bug, Home, MapPin } from "lucide-react-native";

import { COLOR, SPACING } from "@/style/tokens";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationBarItem } from "@/components/molecules/NavigationBarItem";

export default function TabLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        tabBarLabelVisibilityMode: "unlabeled",
        tabBarActiveTintColor: COLOR.BLUE_DARK,
        tabBarInactiveTintColor: COLOR.GRAY_500,
        tabBarStyle: [
          styles.container,
          { height: 60 + insets.bottom }
        ],
        tabBarIconStyle: { width: '100%' }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            <NavigationBarItem
              label="Home"
              focused={focused}
              color={color}
              iconSize={24}
              Icon={Home}
            />,
        }}
      />

      <Tabs.Screen
        name="(stories)"
        options={{
          title: "História",
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            <NavigationBarItem
              label="História"
              focused={focused}
              color={color}
              iconSize={24}
              Icon={BookOpen}
            />
        }}
      />

      <Tabs.Screen
        name="(disease)"
        options={{
          title: "Doenças",
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            <NavigationBarItem
              label="Doenças"
              focused={focused}
              color={color}
              iconSize={24}
              Icon={Bug}
            />,
        }}
      />

      <Tabs.Screen
        name="(places)"
        options={{
          title: "Locais",
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            <NavigationBarItem
              label="Locais"
              focused={focused}
              color={color}
              iconSize={24}
              Icon={MapPin}
            />,
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingInline: SPACING.MD,
  },
})