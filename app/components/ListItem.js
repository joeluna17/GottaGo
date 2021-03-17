import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'; 

import colors from '../config/colors';

function ListItem(props) {
    return (
        <Swipeable renderRightActions={props.renderRightActions}>
        <TouchableHighlight underlayColor={'grey'} onPress={props.onPress}>
        <View style={ListItemStyles.profileWrapper}>
        <Image 
            source={props.image} 
            style={ListItemStyles.detailProfileImg}
            />
        <View style={ListItemStyles.profileText}>
            <Text style={ListItemStyles.profileTitle}>{props.title}</Text>
            <Text style={ListItemStyles.profileSubTitle}>{props.subTitle}</Text>
        </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
    );
}

export default ListItem;

const ListItemStyles = StyleSheet.create({
    profileWrapper: {
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white
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
        color:colors.black
    }
});