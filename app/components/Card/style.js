import { StyleSheet } from 'react-native';

import colors from '../../assets/config/colors'


const styles = StyleSheet.create({
    cardView: {
        height: 400,
        width: 700,
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 50,
        overflow: "hidden"

    },

    titles: {
        backgroundColor: "orange",
        height: "30%",
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