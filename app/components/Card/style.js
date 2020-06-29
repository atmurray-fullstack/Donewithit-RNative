import { StyleSheet } from 'react-native';

import colors from '../../assets/config/colors'


const styles = StyleSheet.create({
    imagebgd: {
        height: "32%",
        width: "65%",
        borderRadius: 25,
        overflow: "hidden"
    },

    titles: {
        backgroundColor: "white",
        height: "20%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    cardTitle: {
        fontSize: 24,
        color: colors.black,
        marginLeft: 25,
        marginTop: 10,
    },
    cardsubTitle: {
        fontSize: 20,
        color: colors.secondary,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 10,
    }
})

export default styles;