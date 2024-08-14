import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
   <Stack
    screenOptions= {{
        headerStyle: {
            backgroundColor: '#1c357f',
        },
        headerTintColor: '#fff',
    }}>
        <Stack.Screen name="index" options={{ title: 'Inside Home'}} />
        <Stack.Screen name="{id}" options={{title: 'Inside Home'}} />
    </Stack>
  );
};
export default Layout;