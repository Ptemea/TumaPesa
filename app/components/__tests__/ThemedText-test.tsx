import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface ThemedTextProps {
    children: React.ReactNode;
    style?: TextStyle;
    type?: 'default' | 'bold' | 'italic'; 
}

const ThemedText: React.FC<ThemedTextProps> = ({ children, style, type = 'default' }) => {
    const textStyle = [styles.text, styles[type], style];

    return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#000', 
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
});

export default ThemedText; 
