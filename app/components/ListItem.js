import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../config/colors';

function ListItem(props) {
    return (
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
    );
}

export default ListItem;

const ListItemStyles = StyleSheet.create({
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