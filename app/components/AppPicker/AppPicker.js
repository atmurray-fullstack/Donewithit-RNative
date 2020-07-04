import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import colors from '../../assets/config/colors'
import defaultStyles from '../../assets/config/styles'
import AppTextInput from '../AppTextInput/AppTextInput';

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
    return (

        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    colors={colors.medium}
                    style={styles.icon}
                />
            )}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons
                name='chevron-down'
                size={20}
                colors={colors.medium}
            />

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

    },
    text: {
        flex: 1
    }
});

export default AppTextInput;