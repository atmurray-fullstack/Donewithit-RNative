import React from 'react';
import { View, SafeAreaView, ImagePropTypes } from 'react-native';
import styles from './style'
const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.Screen, style]}>
            {children}
        </SafeAreaView>
    );
}

export default Screen;