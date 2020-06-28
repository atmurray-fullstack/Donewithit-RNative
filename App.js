import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import AppText from './app/components/AppText'
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from "./app/assets/screens/ViewImageScreen"

export default function App() {
  return (
    <View style={styles.container}>

      <AppText>I love React Native! Here's some more text!</AppText>

    </View>

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

