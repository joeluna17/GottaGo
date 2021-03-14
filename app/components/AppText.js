import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'; // shortcut 'imrn' stub this line

import colors from '../config/colors';
//Great example of how to encapsulate styles in RN
export default function AppText(props) {
    return <Text style={styles.text}>{props.children}</Text>
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.charcoal
    }
});



//Shortcut 'rsf' for creating a stub function in RN 