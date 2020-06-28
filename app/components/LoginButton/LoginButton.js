
import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

import colors from "../../assets/config/colors"
import styles from "./style"
import AppText from '../AppText/AppText';

const LoginButton = () => {
    return (
        <View style={styles.loginButton}>
            <Text style={styles.loginText}>Login Here</Text>
        </View>
    )

}

export default LoginButton;