import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import useProfile from '../../../../hooks/userProfile';
import { updatePasswordRouteProp } from '../../../../app/src/types';

interface changePasswordRouteProp {
  route: updatePasswordRouteProp;
}

const changePassword: React.FC<changePasswordRouteProp > = ({ route }) => {
  const { userId } = route.params;
  const { updatePassword, loading, error } = useProfile();
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    updatePassword(userId, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Update Password" onPress={handleSubmit} disabled={loading} />
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

export default changePassword;
