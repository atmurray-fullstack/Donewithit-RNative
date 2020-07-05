import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText';
import colors from '../../assets/config/colors'

const PickerItem = ({ label, onPress }) => {
    return (

        <TouchableOpacity onPress={onPress} >
            <AppText style={styles.text} >{label}</AppText>
        </TouchableOpacity>

    );
}




const styles = StyleSheet.create({
    text: {
        padding: 20,
        color: colors.black
    }
})

export default PickerItem;