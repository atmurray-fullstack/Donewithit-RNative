import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style'
import colors from '../../assets/config/colors'



const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={40}
                    color="white" ></MaterialCommunityIcons>
            </View>

        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;