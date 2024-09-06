import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import useProfile from '../../../../hooks/userProfile'; 
import { updateUsernameRouteProp } from '../../../../src/types';

interface ChangeUsernameRouteProp {
  route: updateUsernameRouteProp;
}

const changeUsername: React.FC<ChangeUsernameRouteProp> = ({ route }) => {
  const { userId } = route.params;
  const { updateUsername, loading, error } = useProfile();
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    updateUsername(userId, username);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Update Username" onPress={handleSubmit} disabled={loading} />
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

export default changeUsername;
