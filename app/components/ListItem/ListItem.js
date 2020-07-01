import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import AppText from '../AppText/AppText';
const ListItem = ({ title, subtitle, image }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require('../../assets/tongue.png')} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}

export default ListItem;