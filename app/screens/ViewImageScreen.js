import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../config/colors';

export default function ViewImageScreen(){

        return (
            <View style={viewImageStyles.mainViewConatiner}>
              <View style={viewImageStyles.buttonWrapper}>
              <MaterialCommunityIcons 
               style={[viewImageStyles.button, viewImageStyles.closeBtn]}
               name='window-close' 
               size={30} 
               color={colors.white} />
              <MaterialCommunityIcons 
               style={[viewImageStyles.button, viewImageStyles.deleteBtn]}
               name='trash-can-outline' 
               size={30} 
               color={colors.white} />
            </View>
            <Image 
                resizeMode='contain' 
                source={require('../assets/chair.jpg')} 
                style={viewImageStyles.image} />
            </View>
        )

}


const viewImageStyles = StyleSheet.create({
    mainViewConatiner: {
        flex:1,
        width:'100%',
        backgroundColor: colors.black,
        justifyContent:'center'
        },
    image:{ 
        width: '100%',
        height:'100%'
    },
    buttonWrapper: {
      width:'100%',
      flexDirection:'row'
    },
    button: {
        width:50,
        height:50
    },
    closeBtn: {
        position:'absolute',
        top:40,
        left:30,
    },
    deleteBtn:{
        position:'absolute',
        top:40,
        right:30,
    }


});

