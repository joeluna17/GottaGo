import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

//This is another good example of Encapsulation for styles so that we have a common screen layout
//We installed the Constants that give us a bunch of great OS specific info
function Screen(props) {
    //console.log(Constants) // uncomment to see attributes
    return (
      <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight
    }
});