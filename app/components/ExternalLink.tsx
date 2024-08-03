
import React from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

interface ExternalLinkProps {
    url: string;
    children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, children }) => {
    const handlePress = () => {
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.link}>
            <Text style={styles.linkText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        marginVertical: 10,
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default ExternalLink;