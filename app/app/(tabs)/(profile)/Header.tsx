//Profile/Header.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user data and navigate to login screen
    router.replace('../auth/login');
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>My Profile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    fontSize: 16,
    color: 'red',
  },
});

export default Header;
