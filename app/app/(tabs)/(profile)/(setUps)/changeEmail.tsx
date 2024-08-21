import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import useProfile from '../../../../hooks/userProfile';
import { ChangeEmailRouteProp } from '../../../../src/types';

interface ChangeEmailProps {
  route: ChangeEmailRouteProp;
}

const ChangeEmail: React.FC<ChangeEmailProps> = ({ route }) => {
  const { userId } = route.params;
  const { updateEmail, loading, error } = useProfile();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    updateEmail(userId, email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Update Email" onPress={handleSubmit} disabled={loading} />
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
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default ChangeEmail;
