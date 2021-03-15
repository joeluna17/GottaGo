import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View} from 'react-native';
import ListItem from '../components/ListItem';

import ListItemSeperator from '../components/ListItemSeperator';

const messages = [
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/mosh.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/mosh.jpg')
    },
    {
        id:3,
        title:'T3',
        description:'D3',
        image:require('../assets/mosh.jpg')
    },
    {
        id:4,
        title:'T4',
        description:'D4',
        image:require('../assets/mosh.jpg')
    },


]; 

function MessagesScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                />
                }
            ItemSeparatorComponent={ListItemSeperator}
        />
        </SafeAreaView>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})