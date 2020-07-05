import { StyleSheet } from 'react-native';

import colors from '../../assets/config/colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "90%",
        marginVertical: 10,
        alignSelf: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"

    }
})

export default styles;
