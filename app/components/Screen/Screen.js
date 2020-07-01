import React from 'react';
import { View, SafeAreaView, ImagePropTypes } from 'react-native';
import styles from './style'
const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.Screen}>
            {children}
        </SafeAreaView>
    );
}

export default Screen;