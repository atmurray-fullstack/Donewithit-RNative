import { StyleSheet, Platform } from 'react-native';
import colors from '../../assets/config/colors'

const styles = StyleSheet.create({
    registerButton: {
        backgroundColor: colors.secondary,
        height: 75,
        width: "90%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,

    },
    registerText: {
        color: "white",
        fontSize: 20,
        zIndex: 3,
        // fontFamily: "Avenir",

    }
});

export default styles