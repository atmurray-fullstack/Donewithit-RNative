import { StyleSheet } from 'react-native';
import colors from '../../assets/config/colors'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 30,
        backgroundColor: colors.white
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
        color: colors.black,

    },
    subtitle: {
        color: colors.medium,
    }
});

export default styles;