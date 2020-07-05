import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Switch } from 'react-native';

import AppText from './app/components/AppText/AppText'
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from "./app/assets/screens/ViewImageScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import LoginButton from './app/components/LoginButton/LoginButton';
import Card from './app/components/Card/Card';
import AppButton from './app/components/AppButton/AppButton';
import ListDetailsScreen from './app/assets/screens/ListingDetailsScreen'
import ListItem from './app/components/ListItem/ListItem'
import MessageScreen from './app/assets/screens/MessageScreen'
import Screen from './app/components/Screen/Screen'
import Icon from './app/components/Icon/Icon'
import colors from './app/assets/config/colors'
import AccountScreen from './app/assets/screens/AccountScreen'
import ListingScreen from './app/assets/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import AppPicker from './app/components/AppPicker/AppPicker'

export default function App() {
  const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 }
  ]

  const [category, setCategory] = useState(categories[0]);



  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={item => setCategory(item)}
        items={categories} icon='apps' placeholder='Category' />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>




  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"

  },

});

