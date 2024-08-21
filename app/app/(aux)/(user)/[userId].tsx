import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

interface RouteParams {
  userId: string;
}

const UserId = () => {
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User ID: {userId}</Text>
    </View>
  );
};

export default UserId;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
