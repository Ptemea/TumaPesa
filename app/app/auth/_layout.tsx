import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './signin';
import Signup from './signup';
import forgotPassword from './forgot-Password';
import VerifyEmail from './verify-email';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="forgot-Password" component={forgotPassword} />
      <Stack.Screen name="verifyEmail" component={VerifyEmail} />
      
    </Stack.Navigator>
  );
};

export default AuthStack;


