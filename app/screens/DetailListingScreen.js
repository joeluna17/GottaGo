import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import AppText from '../components/AppText';
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
            <View style={DetailStyles.profileWrapper}>
                <Image 
                    source={require('../assets/mosh.jpg')} 
                    style={DetailStyles.detailProfileImg}
                    />
                <View style={DetailStyles.profileText}>
                    <Text style={DetailStyles.profileTitle}>Mosh Hamedani</Text>
                    <Text style={DetailStyles.profileSubTitle}>5 Listings</Text>
                </View>
            </View>
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
    },
    profileWrapper: {
        marginTop:15,
        padding:20,
        flexDirection:'row',
        alignItems:'center'
    },
    detailProfileImg:{
        width:65,
        height:65,
        borderRadius:35,
    },
    profileText:{
        marginLeft:8
    },
    profileTitle: {
        fontWeight:'600'
    },
    profileSubTitle: {
        color:colors.charcoal
    }
});