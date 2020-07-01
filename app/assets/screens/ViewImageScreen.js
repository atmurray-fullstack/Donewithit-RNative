import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors'
const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={"close"} size={45} style={styles.closeIcon} />
            <MaterialCommunityIcons name={"trash-can-outline"} size={45} style={styles.deleteIcon} />
            <Image resizeMode="contain" style={styles.chairImage} source={require("../../assets/chair.jpg")} />
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({

    chairImage: {
        width: "100%",
        height: "80%",
    },
    closeIcon: {
        color: "white",
        position: "absolute",
        top: 40,
        left: 30,
        zIndex: 3,
        elevation: 3,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    deleteIcon: {
        color: "white",
        position: "absolute",
        top: 40,
        right: 30,
        zIndex: 3,
        elevation: 3,
    }
})