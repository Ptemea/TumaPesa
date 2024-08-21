import React from 'react';
import { Tabs, Slot, Stack } from 'expo-router';
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

export default Layout;