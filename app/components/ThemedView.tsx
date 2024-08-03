// app/components/ThemedView.tsx
import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface ThemedViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const ThemedView: React.FC<ThemedViewProps> = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', // Default light theme background
        padding: 10,
        borderRadius: 5,
    },
});

export default ThemedView;