import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, ImageBackground } from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';
import {Media} from '../assets/stylesMedia';
import { ScrollView } from 'react-native-gesture-handler';


export default function BlogPage() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.main}>

    
    {/* TEST FOR BACKGROUND IMAGE ON BLOG THUMBNAIL
        <View style={styles.header}>
            <ImageBackground 
            style={styles.BlogImage}
            resizeMode="cover"
            source={require('../assets/blogThumbnails/OILS.png')}
            >
                <AppHeader />
            </ImageBackground>
        </View>
    */}

        <View style={styles.header}>
            <AppHeader />
        </View>


        <View style={styles.body}>

            <View style={Media.blogPageTopView}>
                <Image
                    style={Media.blogPageThumbnailPic}
                    source={require('../assets/blogThumbnails/OILS.png')}
                />
            </View>

            <ScrollView style={Media.blogPageContentView}>
                <View style={Media.blogPageSummary}>
                    <Text style={[styles.blueCaps, Media.blogPageCategory]}>Beauty</Text>
                    <Text style={[styles.genericTitle, Media.blogPageTitle]}>Sense and Sensitivity: Cancer and Skincare</Text>
                </View>
                <View style={Media.blogPagePost}>
                    <Text style={Media.blogPageText}> Being diagnosed with cancer and undergoing treatment - be it chemotherapy or radiotherapy or beyond - is hard enough, without feeling trapped in a body that no longer looks or feels like your own.<br></br><br></br>“With many types of treatment, skin can become more sensitive and people often find they are left dealing with a skin type that they have never dealt with before,” comments Imelda Burke, founder of Content Beauty & Wellbeing in Marylebone. From hair loss to mouth ulcers and everything in between, the drugs we're all so grateful for are not kind to the body, and as our biggest organ, the skin can be compromised in a way that makes treatment even harder to bear, as well as posing a risk to your already ill health.<br></br><br></br> Being diagnosed with cancer and undergoing treatment - be it chemotherapy or radiotherapy or beyond - is hard enough, without feeling trapped in a body that no longer looks or feels like your own.<br></br><br></br>“With many types of treatment, skin can become more sensitive and people often find they are left dealing with a skin type that they have never dealt with before,” comments Imelda Burke, founder of Content Beauty & Wellbeing in Marylebone. From hair loss to mouth ulcers and everything in between, the drugs we're all so grateful for are not kind to the body, and as our biggest organ, the skin can be compromised in a way that makes treatment even harder to bear, as well as posing a risk to your already ill health.</Text>
                </View>
            </ScrollView>

        </View>

    </View >
    );
    
}