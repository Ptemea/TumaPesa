import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Link href="/(home)"> Home</Link>
      <Link href="../auth/login">Login</Link> 
      <Link href="/send">Send</Link>
      <Link href={'/auth/signup'}>Signup</Link>
      <Link href="/transactions">Transactions</Link>
      <Link href="/settings">Settings</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default Home;
