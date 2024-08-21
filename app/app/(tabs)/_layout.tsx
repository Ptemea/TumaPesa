

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {

  const layoutBaseProps: any = {
    headerTitleStyle: { display: 'none' },
    tabBarShowLabel: false,
  };

  const tabStyles = {
    backgroundColor: 'white',
    borderTopWidth: 0,
  };

  return (
    <Tabs
      backBehavior='history'
       screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarStyle: tabStyles,
          // tabBarShowLabel: false,
        }}
    >
      <Tabs.Screen name="index"  options={{
        ...layoutBaseProps,
        headerTitle: 'Home',
        headerShown: true,
        tabBarIcon: ({ color, focused }) =>
          focused ? (
            <Ionicons name="home" size={24} color={color} />
          ) : (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        href: './index'
      }}/>
      <Tabs.Screen name="send" options={{
        href: '/send'
      }}/>
      <Tabs.Screen name="transactions" options={{
        href: '/transactions'
      }}/>
      <Tabs.Screen name="(profile)" options={{
        href: '/(profile)'
      }}/>
    </Tabs>
  );
};

export default Layout;