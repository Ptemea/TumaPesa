import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import {Stack} from 'expo-router';
import { useRouter } from 'expo-router';

const ACCOUNTS = [
  {
    name: "Checking",
    balance: 100.03,
    accountNumber: 1234567890
  },
  {
    name: "Savings",
    balance: 1000.03,
    accountNumber: 1234567890,
  },
];

const NAME = "Phylis"

const Home = () => {
  const router = useRouter();

  const navigateToprofile = () => {
    router.push('../profile/ProfileLayout');
  };

  return (
    <>
      <Stack.Screen options={{
        headerShown: true,
        headerTitle: `Welcome ${NAME}`,
        title: `Welcome ${NAME}`,
        headerTitleStyle: {
          color: 'black'
        }
        }}
      />
      <ScrollView style={styles.container}>

      {ACCOUNTS?.map((account, index) => (
        <View key={index} style={{
          paddingHorizontal: 8,
          paddingVertical: 12,
          borderRadius: 4,
          backgroundColor: 'rgba(100,100,100,0.1)',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View>
            <Text style={{fontSize: 20}}>
              {account.name}
            </Text>
            <Text>
              {account.accountNumber}
            </Text>
          </View>
          <Text style={{fontSize: 20}}>${account.balance}</Text>
        </View>
      ))}
      {/* <Link href="../(tabs)/home" ></Link>
        <Link href="../auth/login">Signup</Link>
        <Link href="../(tabs)/send">Send</Link>
        <Link href="../auth/signup">Signin</Link>
        <Link href="../(tabs)/transactions"></Link>
        <Link href="../(tabs)/settings"></Link>
        <Link href="../(tabs)/recipient"></Link> */}
      </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    gap: 12,
    paddingHorizontal: 12
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;


/**
 * content and what we want in the home page
 * 
 * header (stack)
 * logout
 * accounts information
 * Personal infoformation
 * Payment information
 * 
 * 
 * Notes:
 * all transactions are private
 * we want treat more like a banking and less like a social media (venmo)
 * 
 * 
 * Starting: 
 * - display account information
 * Information access (checking account):
 * - account name
 * - balance
 * - account number
 * - account routing number
 * - transactions (to descrioiptn, amount, date, status, to account numbver, to account routing number)
 * - debit card information (#, exp, code)
 * 
 * bare minimum for an account
 * - account name
 * - account number
 * - balance
 */