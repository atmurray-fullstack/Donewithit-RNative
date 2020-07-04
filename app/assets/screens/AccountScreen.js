import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../config/colors'
import Screen from '../../components/Screen/Screen'
import ListItem from '../../components/ListItem/ListItem'
import Icon from '../../components/Icon/Icon'
import ListItemSeperatorComponent from '../../components/ListItemSeperator/ListItemSeperator'


const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }

]


const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Andrew Murray'
                    subtitle='atmurray.fullstack@gmail.com'
                    image={require('../../assets/tongue.png')}
                >
                </ListItem>

            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperatorComponent}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                        />
                    }
                >

                </FlatList>
            </View>
            <ListItem
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
            />
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: '5%'
    },
    screen: {
        backgroundColor: colors.light
    }
});



export default AccountScreen;