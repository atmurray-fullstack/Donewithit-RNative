import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Platform } from 'react-native';
import LoginButton from '../../components/LoginButton/LoginButton';
import RegisterButton from '../../components/RegisterButton/RegisterButton';
function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={Platform.OS === "android" ? 3 : 10} style={styles.background}
            source={require("../background.jpg")} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../logo-red.png")} />
                <Text>Sell what you don't need</Text>

            </View>
            <LoginButton />
            <RegisterButton />
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
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
    }
})

export default WelcomeScreen;
