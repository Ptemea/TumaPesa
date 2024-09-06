/*import React from 'react';
import {  Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const Layout = () => {
  return (
    <>
      <StatusBar />
      <View style={{flex: 1}}>
        <Stack initialRouteName='index'screenOptions={{ headerShown: false }} />
      </View>
    </>
  );
};

export default Layout;*/
import React from 'react';
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const Layout = () => {
  
  return (
  <Slot />
   
);
};

export default Layout;
