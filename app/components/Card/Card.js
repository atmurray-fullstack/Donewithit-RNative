import React from 'react';
import { View, Image, Text } from 'react-native';
import AppText from "../AppText/AppText"
import styles from '../Card/style';
const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={image} />
            < View style={styles.titles} >
                <AppText style={styles.cardTitle}>{title}</AppText>
                <AppText style={styles.cardsubTitle}>{subTitle}</AppText>
            </View >

        </View>

    );
}

export default Card;