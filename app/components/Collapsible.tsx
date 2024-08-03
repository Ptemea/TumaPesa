
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            {isOpen && <View style={styles.content}>{children}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    header: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
    },
});

export default Collapsible;

