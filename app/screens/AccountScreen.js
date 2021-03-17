import React from 'react';
import { View, StyleSheet,  } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListCategoryItems from '../components/ListCategoryItems';
import ListItemSeperator from '../components/ListItemSeperator';

function AccountScreen(props) {
    return (
       <Screen style={styles.container}>
            <ListItem
                title={'Joe Luna'}
                subTitle={'joeluna17@yahoo.com'}
                image={require('../assets/mosh.jpg')}
            /> 
        <View style={styles.categoriesContainer}>
            <ListCategoryItems
             title={'My Listings'}
             bgColor={colors.primary}
             iconName={'format-list-bulleted'}
             onPress={()=>{console.log('My Listing')}}
             />
             <ListItemSeperator />
                <ListCategoryItems
             title={'My Messages'}
             bgColor={colors.secondary}
             iconName={'email'}
             onPress={()=>{console.log('Email')}}
             />
        </View>
                <ListCategoryItems
             title={'Log Out'}
             bgColor={colors.yellow}
             iconName={'logout'}
             onPress={()=>{console.log('Log Out')}}
             />


       </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightBeige
    },
    categoriesContainer:{
        marginTop:50,
        marginBottom:20
    }
})