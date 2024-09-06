//Profile/Invite.tsx

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Invite = () => {
  const handleInvite = () => {
    // Implement invite functionality
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite Friends</Text>
      <Button title="Invite" onPress={handleInvite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Invite;
