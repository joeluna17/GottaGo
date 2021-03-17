import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ListCategoryItems(props) {
    return (
        <TouchableHighlight underlayColor={'grey'} onPress={props.onPress}>
        <View style={styles.container}>
            <View style={[styles.icon, {backgroundColor: props.bgColor}]}>
                <MaterialCommunityIcons
                    name={props.iconName}
                    size={25}
                    color={colors.white}
                 />
            </View>
                <Text style={styles.title}>{props.title}</Text>
        </View>
        </TouchableHighlight>
    );
}

export default ListCategoryItems;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:75,
        backgroundColor: colors.white
    },
    icon:{
        width:50,
        height:50,
        backgroundColor: 'dodgerblue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:51,
        marginLeft:20,
        marginRight:12
    },
    title:{
        fontSize:18,
        fontWeight:'400'
    }
});