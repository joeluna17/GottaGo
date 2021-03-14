import React from 'react';;
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function Button(props) {
    const bgColor = {
       backgroundColor: props.bgColor
    }
    return (
       <View style={[ButtonStyles.button, bgColor]}>
         <Text style={ButtonStyles.buttonText}>{props.children}</Text>
       </View>
    );
}


const ButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        width:'90%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        margin:10,
    },
    buttonText: {
        fontSize:20,
        color: colors.white,
        textTransform:'uppercase',
    }
});




export default Button;