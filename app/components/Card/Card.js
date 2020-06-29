import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import styles from '../Card/style';
const Card = () => {
    return (
        <View style={{
            backgroundColor: "tomato",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: "100%",
            width: "100%"
        }}>
            <ImageBackground style={styles.imagebgd} imageStyle={{ height: "100%", width: "100%" }} source={require("../../assets/jacket.jpg")}>
                < View style={styles.titles} >
                    <Text style={styles.cardTitle}>Title</Text>
                    <Text style={styles.cardsubTitle}>subTitle</Text>
                </View >
            </ImageBackground >
        </View>

    );
}

export default Card;