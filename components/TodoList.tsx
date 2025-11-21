import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { Item } from '../types/Item';

interface Props {
    items: Item[];
    onToggleItem: (id: string) => void;
}

export default function TodoList({ items, onToggleItem }: Props) {
    return (
        <FlatList<Item>
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TodoItem
                    name={item.name}
                    completed={item.completed}
                    onToggle={() => onToggleItem(item.id)}
                />
            )}
        />
    );
}
