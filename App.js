import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

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
export default function App() {
  return (
    <MessageScreen />
    // <ListDetailsScreen /> 

    // <WelcomeScreen />

    // <ViewImageScreen />



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"

  },

});

