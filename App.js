import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import AppText from './app/components/AppText/AppText'
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from "./app/assets/screens/ViewImageScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import LoginButton from './app/components/LoginButton/LoginButton';
import Card from './app/components/Card/Card';

export default function App() {
  return (
    <Card />
    // <WelcomeScreen>

    // </WelcomeScreen>
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

