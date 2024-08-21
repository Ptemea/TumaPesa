import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import useProfile from '../../../../hooks/userProfile';
import { RouteProp } from '@react-navigation/native';

type EditAccountRouteProp = RouteProp<{ params: { userId: string } }, 'params'>;

interface AccountData {
  name: string;
  phone: string;
}

const EditAccount = ({ route }: { route: EditAccountRouteProp }) => {
  const { userId } = route.params;
  const { editAccount, loading, error } = useProfile();
  const [accountData, setAccountData] = useState<AccountData>({
    name: '',
    phone: '',
  });

  const handleSubmit = () => {
    editAccount(userId, accountData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={accountData.name}
        onChangeText={(value) => setAccountData({ ...accountData, name: value })}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={accountData.phone}
        onChangeText={(value) => setAccountData({ ...accountData, phone: value })}
        style={styles.input}
        keyboardType="phone-pad"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Edit Account" onPress={handleSubmit} disabled={loading} />
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

export default EditAccount;
