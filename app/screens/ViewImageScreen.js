import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';

import colors from '../config/colors';

export default function ViewImageScreen(){

        return (
            <View style={viewImageStyles.mainViewConatiner}>
              <View style={viewImageStyles.buttonWrapper}>
                <View style={[viewImageStyles.button, viewImageStyles.closeBtn]}></View>
                <View style={[viewImageStyles.button, viewImageStyles.deleteBtn]}></View>
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
        backgroundColor: colors.primary
    },
    deleteBtn:{
        position:'absolute',
        top:40,
        right:30,
        backgroundColor:colors.secondary
    }


});

