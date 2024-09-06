//Profile/Limits.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Limits = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Limits</Text>
      {/* Display user's transaction limits here */}
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

export default Limits;
