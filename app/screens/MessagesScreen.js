import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View} from 'react-native';
import ListItem from '../components/ListItem';

import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';

const initialMessages = [
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
const [messages, setMessages] = useState(initialMessages);
const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        //Delete the messages from messages
      const newMessages = messages.filter(m => m.id !== message.id);
      setMessages(newMessages);
        //call the server 
    }


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
                    onPress={()=> console.log("Message Selected", item)}
                    renderRightActions={()=> 
                    <ListItemDeleteAction onPress={()=> handleDelete(item)} />}
                />
                }
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing} // only need this to use pull to refresh
            onRefresh={()=>{ // only need this to use pull to refresh
                setMessages([
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
                        }  
                ])
            }}
        />
        </SafeAreaView>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        width:'100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})