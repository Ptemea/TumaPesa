import React from 'react';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="Profile"
        options={{
          headerLeft: () => (
            <Button onPress={() => router.back()} title="Back" />
          ),
        }}
      />
      {children}
    </Stack>
  );
};

export default Layout;
