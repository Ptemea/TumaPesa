import { Tabs } from 'expo-router';
import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Feather } from '@expo/vector-icons';

// TODO: uncommnet when pallete is done
// import Colors from '@constants/Colors';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <Stack.Screen name="(home)" />
      <Stack.Screen name="settings" />
    </Stack>

    <Tabs
      screenOptions={{
        // TODO: uncommnet when pallete is done
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
      >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={'home'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(send)"
        options={{
          title: 'Send',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={'home'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(transacitons)"
        options={{
          title: 'Transacitons',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={'home'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={'home'} color={color} />
          ),
        }}
      />
    </Tabs>
    </>
  );
}
