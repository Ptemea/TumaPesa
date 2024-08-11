import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/Screens/Home">Go to Home</Link>
      <Link href="/Screens/LoginScreen">Go to Login</Link>
      <Link href="/Screens/Send">Go to Send</Link>
      <Link href="/Screens/SignupScreen">Go to Signup</Link>
      <Link href="/Screens/Transactions">Go to Transactions</Link>
    </View>
  );
};

export default Home;
