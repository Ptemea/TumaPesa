import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface Styles {
    text: TextStyle;
    bold: TextStyle;
    italic: TextStyle;
    title: TextStyle;
    defaultSemiBold: TextStyle;
    link: TextStyle;
  }
  
  const styles: Styles = StyleSheet.create({
    text: {
      fontSize: 16,
      color: 'black',
    },
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    defaultSemiBold: {
      fontWeight: '600',
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
  });
  