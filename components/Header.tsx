import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Header() {
    return <Text style={styles.header}>Todo List</Text>;
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
});
