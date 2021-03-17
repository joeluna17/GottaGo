import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons 
                name='trash-can'
                size={35}
                color={colors.white}
            />
        </View>
        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
   container: { 
       backgroundColor:colors.danger,
       width:70,
       height:'100%',
       justifyContent:'center',
       alignItems:'center'
    }
});