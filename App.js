import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from  './app/components/AppText';


export default function App() {
  //console.log('We can log out for debugging, but make sure to remove them');
  return (
    <View style={mainAppWrapperStyles.mainWrapper}>
        <WelcomeScreen />
    </View>
  )
  
};

const mainAppWrapperStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});