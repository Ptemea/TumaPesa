import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import useProfile from '../../../../hooks/userProfile';
import { upDatemailRouteProp } from '../../../src/types';

interface upDatemailProps {
  route: upDatemailRouteProp;
}

const upDatemail: React.FC<upDatemailProps> = ({ route }) => {
  const { userId } = route.params;
  const { upDatemail, loading, error } = useProfile();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    upDatemail(userId, email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize='none'
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="UpDatemail" onPress={handleSubmit} disabled={loading} />
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

export default upDatemail;
