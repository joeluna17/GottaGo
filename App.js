import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from  './app/components/AppText';
import Card from './app/components/Card';
import DetailListingScreen from './app/screens/DetailListingScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  //console.log('We can log out for debugging, but make sure to remove them');
  return (
    <View style={mainAppWrapperStyles.mainWrapper}>
        {/* <WelcomeScreen /> */}
        {/* <Card 
          title="Red jacket for sale!"
          subTitle="$100"
          image={require('./app/assets/jacket.jpg')}
        />
    </View> */}
    {/* <DetailListingScreen 
          title="Red jacket for sale!"
          subTitle="$100"
          image={require('./app/assets/jacket.jpg')}
        /> */}
        {/* <ViewImageScreen /> */}
        <MessagesScreen />
    </View> 
    
  )
  
};

const mainAppWrapperStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});