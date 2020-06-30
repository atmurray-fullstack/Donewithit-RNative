import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Platform } from 'react-native';
import LoginButton from '../../components/LoginButton/LoginButton';
import RegisterButton from '../../components/RegisterButton/RegisterButton';
import AppButton from "../../components/AppButton/AppButton"
function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={Platform.OS === "android" ? 3 : 10} style={styles.background}
            source={require("../background.jpg")} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../logo-red.png")} />
                <Text style={styles.tagline}>Sell what you don't need</Text>

            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />

            </View>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }

})

export default WelcomeScreen;
