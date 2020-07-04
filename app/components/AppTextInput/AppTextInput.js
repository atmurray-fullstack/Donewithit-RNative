import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import colors from '../../assets/config/colors'
import defaultStyles from '../../assets/config/styles'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (

        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} colors={colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,

    }
});

export default AppTextInput;