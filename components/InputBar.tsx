import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
    input: string;
    onChangeText: (text: string) => void;
    onAddItem: () => void;
}

export default function InputBar({ input, onChangeText, onAddItem }: Props) {
    return (
        <View style={styles.inputRow}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={onChangeText}
                placeholder="Enter task"
            />
            <Button title="Save" onPress={onAddItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        marginBottom: 16,
        paddingHorizontal: 6,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginRight: 8,
        fontSize: 16,
    },
});
