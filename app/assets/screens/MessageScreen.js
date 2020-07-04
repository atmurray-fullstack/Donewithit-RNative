import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItemSeperator from '../../components/ListItemSeperator/ListItemSeperator'
import ListItem from '../../components/ListItem/ListItem'
import ListItemDeleteAction from '../../components/ListItemDeleteAction/ListItemDeleteAction'
import Screen from '../../components/Screen/Screen'
import colors from '../config/colors'

const initialMessages = [
    {
        id: 1,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/tongue.png')
    },
    {
        id: 2,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/tongue.png')
    }
]

const MessageScreen = (props) => {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T1',
                            description: 'D1',
                            image: require('../../assets/tongue.png')
                        }
                    ])
                }}
            />

        </Screen>
    );
}

export default MessageScreen;

const styles = StyleSheet.create({


});