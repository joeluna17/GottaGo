import React from 'react';
import {  Image, View, Text, StyleSheet } from 'react-native';
import AppText from './AppText';

import color from '../config/colors';

function Card(props) {
    return (
        <View style={CardStyles.cardWrapper}>
            <Image 
                source={props.image}              
                style={CardStyles.cardImage}
            
            />
            <View style={CardStyles.cardContentWrapper}>
                <AppText>{props.title}</AppText>
                <Text style={CardStyles.subTitle}>{props.subTitle}</Text>
            </View>
        </View>
    );
}


export default Card;

const CardStyles = StyleSheet.create({
    cardWrapper: {
        width:'90%',
        height:300,
        backgroundColor: color.white,
        borderRadius: 12
    },
    cardImage: {
        flex:1,   
        width:'100%',
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
    cardContentWrapper: {
        flexDirection:'column',
        padding:18
    },
    subTitle:{
        marginTop:5,
        color:color.secondary,
        fontWeight:'600',
        fontSize: 16
    }



});