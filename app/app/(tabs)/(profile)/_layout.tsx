/*import React from 'react';
import { Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const ProfileLayout = () => {
  const router = useRouter();

  return (
    <Stack screenOptions={{ headerShown: false }} >
      {/* <Stack.Screen name='changeEmail' options={{headerShown: true}}/> */
   /* </Stack>
  );
};

export default ProfileLayout; */

//Profile/ProfileLayout.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileOverview from './ProfileView';
import PersonalInfo from './PersonalInfo';
import PaymentInfo from './PaymentInfo';
import Recipients from './Recipients';
import Limits from './Limit';
import Invite from './Invite';
import { ProfileStackParamList } from './ProfileStackParamList';


const Stack = createStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileOverview" component={ProfileOverview} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="Recipients" component={Recipients} />
      <Stack.Screen name="Limits" component={Limits} />
      <Stack.Screen name="Invite" component={Invite} />
    </Stack.Navigator>
  );
}
