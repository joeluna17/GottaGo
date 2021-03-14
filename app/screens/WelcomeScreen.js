import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import Button from '../components/Button';
import colors from '../config/colors';

const bgImage = {uri: ''};
const bgImage_1 = require('../assets/background.jpg');

export default function WelcomeSceen() {
  //console.log('We can log out for debugging, but make sure to remove them')
  return (
          <ImageBackground source={bgImage_1} style={styles.bgImage} blurRadius={10}>
            <View style={styles.topContentContainer}>
              <Image source={require('../assets/logo-red.png')} style={{width:75, height:75, marginBottom: '2%'}} />
              <Text style={{fontWeight:'600', fontSize:18}}>When it's Gotta Go, It's GottaGo!</Text>
            </View>

            <View style={styles.buttonWrapper}>
            <Button bgColor={colors.primary}>Login</Button>
            <Button bgColor={colors.secondary}>Register</Button>
            </View>
          </ImageBackground>
        
  );
}

const styles = StyleSheet.create({

  bgImage: {
    flex: 1,
    width:'100%',
    justifyContent: 'flex-end'
  },
  loginButton: {
    width: '100%',
    height:70, 
    backgroundColor: '#fc5c65'
  },
  registerButton: {
    width: '100%',
    height:70, 
    backgroundColor: '#4ECDC4'
  },
  topContentContainer: {
    flex: 1,
    width: '100%',
    alignItems:"center",
    top:100
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  }
});
