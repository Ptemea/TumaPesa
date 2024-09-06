//Profile/PersonalInfo.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      {/* Add your form fields here */}
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

export default PersonalInfo;
