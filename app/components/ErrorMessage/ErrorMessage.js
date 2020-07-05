import React from 'react';
import {
    StyleSheet
} from 'react-native';

import AppText from '../../components/AppText/AppText';
import AppTextInput from '../AppTextInput/AppTextInput';


const ErrorMessage = ({ error, visible }
) => {
    if (!visible || !error) {
        return null;
    }

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}


const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 20,
    }

})
export default ErrorMessage;