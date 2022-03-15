import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, ScrollView, Pressable} from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';
import {Social} from '../assets/stylesSocial.js';

export default function Events() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.main}>
        
        <View style={styles.header}>
            <AppHeader />
            
        </View>
        
        <View style={[styles.body, Social.body]}>
        <ScrollView>
            <Image
                style={Social.topImage}
                source={require('../assets/eventThumbnails/pexels-radomir-jordanovic-1644888.jpg')}
            />
            <Text style={[styles.genericTitle,Social.title]}>Events for You</Text>
            <Text style={Social.screenSummary}>Join an event to meet a new bestie, boost your knowledge, and simply have a fun time!</Text>
                <Text style={[styles.blueCaps, Social.category]}>Beauty Events</Text>
                
                <ScrollView style={Social.scrollView} horizontal={true}>
                    
                    <View style={[Social.eventPreview, Social.applyShadow]}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/beauty-pexels-george-milton-6954005.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/beauty-pexels-george-milton-6954005.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/beauty-pexels-george-milton-6954005.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/beauty-pexels-george-milton-6954005.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                </ScrollView>

                <Text style={[styles.blueCaps, Social.category]}>Wellness Events</Text>
                <ScrollView style={Social.scrollView} horizontal={true}>
                    
                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/wellness-pexels-chevanon-photography-317155.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/wellness-pexels-chevanon-photography-317155.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/wellness-pexels-chevanon-photography-317155.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                    <View style={Social.eventPreview}>
                        <Image
                            style={Social.previewImage}
                            source={require('../assets/eventThumbnails/wellness-pexels-chevanon-photography-317155.jpg')}
                        />
                        <Text style={Social.previewTextTime}>Friday, June 26 - 14:00</Text>
                        <Text style={Social.previewTextTitle}>LGFB Makeup Tutorial</Text>
                        <Pressable><Text style={Social.previewLink}>Find out more</Text></Pressable>
                    </View>

                </ScrollView>
            </ScrollView>
            
        </View>

    </View>
    );
    
}