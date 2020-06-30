import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from "./style"
import colors from '../../assets/config/colors';

const AppButton = ({ title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress} >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity >
    );
}

export default AppButton;

