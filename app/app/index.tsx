import React, {useEffect} from 'react';
import { Text , View} from 'react-native';
import { useLayoutEffect } from 'react';
import { router } from 'expo-router';

const AppTabs = () => {
  // auth logic live here
  // if a valid auth token exists => forward to (tabs)
  // if token is expired, malformed, etc. => forward to sign in page

  // run when the app is done rendering/ loading
  useLayoutEffect(() => {
    router.replace('/(tabs)')
  })

  return (
    <>
    </>
  );
};

export default AppTabs;
