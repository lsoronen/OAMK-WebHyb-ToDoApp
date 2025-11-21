
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';
import { StatusBar } from 'expo-status-bar';
import { Item } from './types/Item';


const STORAGE_KEY = 'TASK_LIST_ITEMS';

export default function App() {
    const [items, setItems] = useState<Item[]>([]);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        (async () => {
            try {
                const json = await AsyncStorage.getItem(STORAGE_KEY);
                if (json) setItems(JSON.parse(json));
            } catch (e) {
                console.error('Failed to load items:', e);
                Alert.alert('Error', 'Could not load your tasks.');
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
            } catch (e) {
                console.error('Failed to save items:', e);
            }
        })();
    }, [items]);

    const addItem = () => {
        if (input.trim()) {
            setItems(prev => [
                ...prev,
                { id: Date.now().toString(), name: input.trim(), completed: false },
            ]);
            setInput('');
        }
    };

    const toggleItem = (id: string) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return (
        <View style={styles.container}>
            <Header />
            <InputBar input={input} onChangeText={setInput} onAddItem={addItem} />
            <TodoList items={items} onToggleItem={toggleItem} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },
});
