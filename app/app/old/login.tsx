
import React, { useState } from 'react';
import { View, TextInput, Button, Text} from 'react-native';
import useAuth from '../hooks/useAuth';

const LoginScreen = ({ navigation }: any) => {
    const { login, loading, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        login(email, password);
    };


    return (
        <View >
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
            {loading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
        </View>
    );
};


export default LoginScreen;