import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import styles from '../Card/style';
const Card = () => {
    return (

        <ImageBackground style={styles.cardView} source={require("../../ assets / jacket.jpg")}>
            < View style={styles.titles} >
                <Text style={styles.cardTitle}>Title</Text>
                <Text style={styles.cardsubTitle}>subTitle</Text>
            </View >
        </ImageBackground >

    );
}

export default Card;