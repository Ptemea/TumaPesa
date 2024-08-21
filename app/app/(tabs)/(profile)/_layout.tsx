import React from 'react';
import { Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const ProfileLayout = () => {
  const router = useRouter();

  return (
    <Stack screenOptions={{ headerShown: false }} >
      {/* <Stack.Screen name='changeEmail' options={{headerShown: true}}/> */}
    </Stack>
  );
};

export default ProfileLayout;

