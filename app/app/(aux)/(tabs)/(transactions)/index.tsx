// screens/TransactionScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Transactions = () => {
    const [senderId, setSenderId] = useState('');
    const [receiverId, setReceiverId] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleTransaction = async () => {
        try {
            const response = await axios.post('http://localhost:5000/transaction', { senderId, receiverId, amount });
            setMessage('Transaction successful!');
        } catch (error) {
            setMessage('Transaction failed!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Sender ID" value={senderId} onChangeText={setSenderId} style={styles.input} />
            <TextInput placeholder="Receiver ID" value={receiverId} onChangeText={setReceiverId} style={styles.input} />
            <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} style={styles.input} />
            <Button title="Send Money" onPress={handleTransaction} />
            {message && <Text>{message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Transactions;