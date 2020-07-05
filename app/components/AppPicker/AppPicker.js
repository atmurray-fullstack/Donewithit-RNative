import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from '../AppText/AppText'
import colors from '../../assets/config/colors'
import defaultStyles from '../../assets/config/styles'
import Screen from '../Screen/Screen'



const AppPicker = ({ icon, items, placeholder }) => {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            colors={colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        colors={colors.black}
                    />

                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='fade' >
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    {/* <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>}
                    /> */}
                </Screen>
            </Modal>
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,

    },
    text: {
        flex: 1,
        color: '#000'
    }
});

export default AppPicker;