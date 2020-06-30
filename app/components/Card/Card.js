import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../Card/style';
const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
            < View style={styles.titles} >
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardsubTitle}>{subTitle}</Text>
            </View >

        </View>

    );
}

export default Card;