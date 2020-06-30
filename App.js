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

export default function App() {
  return (
    <View style={{
      backgroundColor: "#f8f4f4",
      padding: 20,
      paddingTop: 100,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"

    }} >
      <Card title="Red Jacket for Sale" subtitle="$100" image="./app/assets/jacket.jpg" />
    </View>
    // <WelcomeScreen />

    // <ViewImageScreen>

    // </ViewImageScreen>


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

