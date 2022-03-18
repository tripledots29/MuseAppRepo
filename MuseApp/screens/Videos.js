import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity, Button, TextInput, Pressable } from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';
import { Media } from '../assets/stylesMedia';
import { ScrollView } from 'react-native-gesture-handler';

export default function Videos() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.main}>
        
        <View style={styles.header}>
            <AppHeader />
        </View>
        
        <View style={styles.body}>

            <View style={Media.videoTopView}>
                <Text style={styles.genericTitle}>Browse Videos</Text>
                <TextInput
                    style={styles.genericSearchbar}
                    placeholder="Search for a video"
                />
            </View>

            <ScrollView style={Media.videoContentView}>


                <Pressable onPress={() => navigation.navigate("Videos Page")}> 
                    <View style={Media.videoPreview}>
                        <Image
                            style={Media.videoPreviewThumbnail}
                            source={require('../assets/videoThumbnails/meditation.png')}
                        />
                        <Text style={[styles.blueCaps, Media.videoPreviewCategory]}>Wellness</Text>
                        <View style={Media.videoPreviewSubSection}>
                            <View style={Media.videoPreviewSSTitle}>
                                <Text style={Media.videoPreviewTitle}>Guided Meditation with Meghan Lane</Text>
                            </View>
                            <View style={Media.videoPreviewSSLength}>
                                <Text style={Media.videoPreviewLength}>32:05</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Videos Page")}> 
                    <View style={Media.videoPreview}>
                        <Image
                            style={Media.videoPreviewThumbnail}
                            source={require('../assets/videoThumbnails/meditation.png')}
                        />
                        <Text style={[styles.blueCaps, Media.videoPreviewCategory]}>Wellness</Text>
                        <View style={Media.videoPreviewSubSection}>
                            <View style={Media.videoPreviewSSTitle}>
                                <Text style={Media.videoPreviewTitle}>Guided Meditation with Meghan Lane</Text>
                            </View>
                            <View style={Media.videoPreviewSSLength}>
                                <Text style={Media.videoPreviewLength}>32:05</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>


            </ScrollView>

            <View style={Media.videoSortView}>
            <Pressable style={styles.genericButton} onPress={() => navigation.navigate("Blog Page")}>
                <Text style={Media.videoSortText}>SORT</Text>
            </Pressable>

            </View>
            
        </View>

    </View>
    );
    
}