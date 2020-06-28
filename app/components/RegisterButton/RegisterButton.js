
import React from 'react';
import { Text, View } from 'react-native';

import colors from "../../assets/config/colors"
import styles from "./style"
import AppText from '../AppText/AppText';

const RegisterButton = () => {
    return (
        <View style={styles.registerButton}>
            <Text style={styles.registerText}>Register</Text>
        </View>
    )

}

export default RegisterButton;