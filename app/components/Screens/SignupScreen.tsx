
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const SignupScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] =useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/Signup', { name, email, password });
      setMessage('Signup successful!');

      navigation.navigate('Login');
    } catch (error) {
      setMessage('Signup failed!');
    }
  };

  return (
    <View style={styles.container}>
        <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
        <Button title="Signup" onPress={handleSignup} />
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


export default SignupScreen;