import React from 'react';;
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton(props) {
    const bgColor = {
       backgroundColor: props.bgColor || colors.primary
    }
    return (
        <TouchableOpacity style={[ButtonStyles.button, bgColor]}>
            <Text style={ButtonStyles.buttonText} onPress={props.onPress}>{props.children}</Text>
       </TouchableOpacity>
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
        fontWeight:'bold'
    }
});




export default AppButton;