import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import styles from "./style"
const AppText = ({ children }) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

export default AppText;
