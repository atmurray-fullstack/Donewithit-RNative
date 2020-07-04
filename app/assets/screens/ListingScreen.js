import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../../components/Screen/Screen'
import Card from '../../components/Card/Card';
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red Jacket for Sale',
        price: 100,
        image: require('../../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../../assets/couch.jpg')
    }
];


const ListingScreen = (props) => {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
    }

})
export default ListingScreen;