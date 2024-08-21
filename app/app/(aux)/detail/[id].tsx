import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
    title: 'Details: ${id}',
  });
  }, [id, navigation]);

return (
  <View style ={styles. container}>
    <Text>Details: {id}</Text>
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Detail;