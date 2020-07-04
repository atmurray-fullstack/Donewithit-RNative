import React from 'react';
import { View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


import styles from './style';
import AppText from '../AppText/AppText';
import colors from '../../assets/config/colors';
import { render } from 'react-dom';




const ListItem = ({ title, subtitle, image, onPress, IconComponent, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container} >
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight >
        </Swipeable>
    );
}

export default ListItem;