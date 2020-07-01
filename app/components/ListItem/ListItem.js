import React from 'react';
import { View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


import styles from './style';
import AppText from '../AppText/AppText';
import colors from '../../assets/config/colors';
import { render } from 'react-dom';




const ListItem = ({ title, subtitle, image, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container} >
                    <Image style={styles.image} source={require('../../assets/tongue.png')} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight >
        </Swipeable>
    );
}

export default ListItem;