/*import { Tabs } from 'expo-router';
import { Ionicons  } from '@expo/vector-icons';
import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Feather } from '@expo/vector-icons';

// TODO: uncommnet when pallete is done
// import Colors from '@constants/Colors';


const TabLayout = () => {
  
  return (
    <Tabs
      screenOptions={{
        // TODO: uncommnet when pallete is done
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
      >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={'home'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="send"
        options={{
          title: 'Send',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={'home'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="transacitons"
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
  )
};

export default TabLayout;*/
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="auth/login" options={{ title: 'Login' }} />
      <Stack.Screen name="auth/signup" options={{ title: 'Signup' }} />
      {/* Add other screens here */}
    </Stack>
  );
}
