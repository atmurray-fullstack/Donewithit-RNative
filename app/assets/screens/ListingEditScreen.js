import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../../components/Screen/Screen'

const validationSchema = Yup.object().shape()({
    title: Yup.string().required().min(5).label('Title'),
    price: Yup.number().required().min(1).label('Price'),
    description: Yup.string().required().min(1).label('Description'),
    category: Yup.string().required().min(1).nullable().label('Category'),

});

function ListingEditScreen(props) {
    return (
        <Screen>


        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default ListingEditScreen;