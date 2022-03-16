import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, Image, Text, TouchableOpacity, Button, ScrollView, Pressable, ImageBackground} from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';
import {Social} from '../assets/stylesSocial.js';

//import {APIrequest} from './APIrequest.js';


export default function Events() {
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let formData = new FormData();
    formData.append("action", "get-events");
        
    let url = "https://muse-app-project.herokuapp.com/api/events";
       
    const APIrequest = async (url) => {
        try{
            let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: formData

            });
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            //shows spinning icon while data is loaded from API
            setLoading(false);
        }
    };
       
    useEffect( () => {
        APIrequest(url);
    }, []);
        
    
    
    return (
    <View style={styles.main}>
    
        <ImageBackground    
            style={Social.topImage}
            source={require('../assets/eventThumbnails/pexels-radomir-jordanovic-1644888.jpg')}
        > 
            <View style={[styles.header, styles.transparent, Social.header]}>
                <AppHeader />
            </View>
        
        </ImageBackground>
        
        <View style={[styles.body, Social.body]}>
            <ScrollView style={Social.scrollViewMain}>
                <Text style={[styles.genericTitle,Social.title]}>Events for You</Text>

                <Text style={[styles.normalText,Social.screenSummary]}>Join an event to meet a new bestie, boost your knowledge, and simply have a fun time!</Text>
                <Text style={[styles.blueCaps, Social.category]}>Beauty Events</Text>
                    
                <ScrollView style={Social.scrollView} horizontal={true}>
                
                    {isLoading ? <View><Text style={styles.normalText}>Loading events...</Text></View>: (
                    <FlatList horizontal={"true"}
                        data={data}
                        keyExtractor={({ event_id }, index) => event_id}
                        renderItem={({ item }) => (
                            <View style={[Social.eventPreview, Social.applyShadow]}>
                            <Image
                                style={Social.previewImage}
                                source={require('../assets/eventThumbnails/beauty-pexels-george-milton-6954005.jpg')}
                            />
                            <Text style={[styles.normalText, Social.previewTextTime]}>{item.event_date} {item.event_start}</Text>
                            <Text style={[styles.normalText,Social.previewTextTitle]}>{item.event_name}</Text>
                            <Pressable><Text style={[Social.previewLink]}>Find out more</Text></Pressable>
                        </View>
                        )}
                    />
                            
                    )}
                </ScrollView>

                <Text style={[styles.blueCaps, Social.category]}>Wellness Events</Text>
                
                <ScrollView style={Social.scrollView} horizontal={true}>
                    
                    {isLoading ? <View><Text style={styles.normalText}>Loading events...</Text></View> : (
                    <FlatList horizontal={"true"}
                        data={data}
                        keyExtractor={({ event_id }, index) => event_id}
                        renderItem={({ item }) => (
                            <View style={[Social.eventPreview, Social.applyShadow]}>
                            <Image
                                style={Social.previewImage}
                                source={require('../assets/eventThumbnails/beauty-pexels-george-milton-6954005.jpg')}
                            />
                            <Text style={[styles.normalText, Social.previewTextTime]}>{item.event_date} {item.event_start}</Text>
                            <Text style={[styles.normalText,Social.previewTextTitle]}>{item.event_name}</Text>
                            <Pressable><Text style={[Social.previewLink]}>Find out more</Text></Pressable>
                        </View>
                        )}
                    />
                                
                        )}

                </ScrollView>
            </ScrollView>
            
        </View>

    </View>
    );
    
}