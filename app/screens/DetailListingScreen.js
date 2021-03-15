import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';


function DetailListingScreen(props) {
    return (
        <View style={DetailStyles.mainDetailWrapper}>
            <View style={DetailStyles.cardWrapper}>
                <Image 
                    source={props.image}              
                    style={DetailStyles.cardImage}
                />
                <View style={DetailStyles.cardContentWrapper}>
                    <AppText>{props.title}</AppText>
                    <Text style={DetailStyles.subTitle}>{props.subTitle}</Text>
                </View>
            </View>
            <ListItem
                title={'Mosh Hamedani'}
                subTitle={'5 Listings'}
                image={require('../assets/mosh.jpg')}
            />
        </View>
    );
}

export default DetailListingScreen;

const DetailStyles = StyleSheet.create({
    mainDetailWrapper: {
        flex:1,
        width:'100%'
    },
    cardWrapper: {
        width:'100%',
        height:400,
        backgroundColor: colors.white
    },
    cardImage: {
        flex:1,   
        width:'100%',
    },
    cardContentWrapper: {
        flexDirection:'column',
        padding:18
    },
    subTitle:{
        marginTop:5,
        color:colors.secondary,
        fontWeight:'600',
        fontSize: 16
    }
});