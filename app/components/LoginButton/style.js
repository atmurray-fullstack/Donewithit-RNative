import { StyleSheet, Platform } from 'react-native';
import colors from '../../assets/config/colors'

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: colors.primary,
        height: 75,
        width: "90%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    },
    loginText: {
        color: "white",
        fontSize: 20,
        zIndex: 3,
        // fontFamily: "Avenir",

    }
});

export default styles