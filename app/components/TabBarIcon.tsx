import React from 'react';
import { Ionicons } from '@expo/vector-icons';
//@expo/vector-Iconicons';

type TabBarIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size }) => {
    return <Ionicons name={name} color={color} size={size} />;
  };
  
  export default TabBarIcon;