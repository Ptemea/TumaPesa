import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IconiconGlyphs } from '@expo/vector-icons/build/Iconicons';

type TabBarIconProps = {
  name: IconiconGlyphs;
  color: string;
  size: number;
}

const TabBarIcon = ({ name, color, size }: TabBarIconProps) => {
    return <Ionicons name={name} color={color} size={size} />;
  };
  
  export default TabBarIcon;