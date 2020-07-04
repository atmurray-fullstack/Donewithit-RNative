import { StyleSheet } from 'react-native';

import colors from '../../assets/config/colors'


const styles = StyleSheet.create({
    cardView: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: 400,
        width: 400,
        overflow: "hidden",
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    image: {
        height: "70%",
        width: "100%",
        borderRadius: 10,

    },
    titles: {
        backgroundColor: "white",
        height: "30%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    cardTitle: {
        fontSize: 22,
        color: colors.black,
        marginLeft: 25,
        marginTop: 10,
    },
    cardsubTitle: {
        fontSize: 18,
        color: colors.secondary,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 10,
    }
})

export default styles;