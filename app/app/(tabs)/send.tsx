import React, { useState } from 'react';
import {View, Text,ScrollView, Button, StyleSheet, TextInput } from 'react-native';
import { Stack } from 'expo-router';

interface Transaction {
  recipient: string;
  amountToSend: string;
  amountReceived: string;
  date: string;
}
const Send = () => {
  const [ recipient, setRecipient] = useState('');
  const [ amountToSend, setAmountToSend] =useState('');
  const [amountReceived, setAmountReceived] =useState('');
  const [transactionHistory, setTransactionsHistory] = useState<Transaction[]>([]);

  const handleContinue = () => {
    if (recipient && amountToSend && amountReceived) {
      const newTransaction = {
      recipient,
      amountToSend,
      amountReceived,
      date: new Date().toLocaleString(),

      };

      setTransactionsHistory([...transactionHistory, newTransaction]);
      setRecipient('');
      setAmountToSend('');
      setAmountReceived('');
    }
  };
 return (
   <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen 
      options={{
        title: "Hello",
        headerTitle: "Hello",
        headerShown: true,
        headerTitleStyle: {
          color: 'black'
        }
      }}
      />
  
      <Text style={styles.title}></Text>

      <Text style={styles.title}>Send Money</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Recipient"
        value={recipient}
        onChangeText={setRecipient}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Amount to Send"
        value={amountToSend}
        keyboardType="numeric"
        onChangeText={setAmountToSend}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount Received"
        value={amountReceived}
        keyboardType="numeric"
        onChangeText={setAmountReceived}
      />
      
      <Button title="Continue" onPress={handleContinue} />

      <Text style={styles.subTitle}>Transaction History</Text>
      {transactionHistory.length > 0 ? (
        transactionHistory.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <Text style={styles.transactionText}>
              {transaction.date} - {transaction.recipient} - Sent: {transaction.amountToSend}, Received: {transaction.amountReceived}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noTransactions}>No transactions yet.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    marginTop: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  transactionItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    width: '100%',
  },
  transactionText: {
    fontSize: 16,
  },
  noTransactions: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Send;


/**
 * 1. x move the welcome/ greeting to the "send" tab header
 * 2. x remove transaction history section in "send"
 * 3. x weird tab behavior with styling and missing routes
 * 4. 
 */