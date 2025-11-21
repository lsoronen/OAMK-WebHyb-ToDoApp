import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
    completed: boolean;
    onToggle: () => void;
}

export default function TodoItem({ name, completed, onToggle }: Props) {
    return (
        <Pressable onPress={onToggle}>
            <Text style={[styles.rowText, completed && styles.rowStrike]}>
                {name}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    rowText: {
        fontSize: 16,
        padding: 12,
    },
    rowStrike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: '#888',
    },
});
