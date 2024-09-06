import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ProfileStackParamList } from './ProfileStackParamList';


const Profile = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile </Text>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('PersonalInfo')}>
        <Text style={styles.sectionText}>Personal Info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('PaymentInfo')}>
        <Text style={styles.sectionText}>Payment Info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Recipients')}>
        <Text style={styles.sectionText}>Recipients</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Limits')}>
        <Text style={styles.sectionText}>Limits</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Invite')}>
        <Text style={styles.sectionText}>Invite </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  sectionText: {
    fontSize: 18,
  },
});

export default Profile;
