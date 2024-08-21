import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Section</Text>
      {children}
    </View>
  );
};

export default UserLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
