//auth/AuthLayout.tsx
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signup" />
      <Stack.Screen name="signin" />
    </Stack>
  );
};

export default AuthLayout;

