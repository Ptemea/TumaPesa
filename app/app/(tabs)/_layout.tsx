

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
         tabBarInactiveTintColor: 'gray',
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
      }}/>
      <Tabs.Screen name="send" options={{
        ...layoutBaseProps,
        headerTitle: 'send',
        headerShown: true,
        tabBarIcon: ({ color, focused}) =>
          <Ionicons name='send' size={22} color={color}/>
        
      }}/>
       <Tabs.Screen name="recipient" options={{
        ...layoutBaseProps,
        headerTitle: 'recipient',
        headerShown: true,
        tabBarIcon: ({ color, focused}) =>
          <Ionicons name='people' size={22} color={color}/>
      }}/>

      {/* add icon */}
      <Tabs.Screen name="transactions" options={{
        ...layoutBaseProps,
        headerTitle: 'transcations',
        headerShown: true,
        tabBarIcon: ({ color, focused}) =>
          <MaterialCommunityIcons name='bank-transfer' size={22} color={color}/>
     
      }}/>

      {/* add icon */}
      <Tabs.Screen name="(profile)" options={{
      ...layoutBaseProps,
      headerTitle: 'profile',
      headerShown: true,
      tabBarIcon: ({ color, focused}) =>
        <Ionicons name='person' size={22} color={color}/>
      }}/>
    </Tabs>
  );
};

export default Layout;