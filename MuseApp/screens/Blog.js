import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, ImageBackground } from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';
import {Peter} from '../assets/stylesPeter';


export default function Blog() {
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
            <Text style = {styles.genericTitle}>On the Blog</Text>

            <Text style = {styles.blueCaps}>Wellness</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu urna metus. Aenean laoreet sed odio vitae faucibus. Maecenas nec ante massa. </Text>
            
            <Text style = {styles.blueCaps}>Beauty</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu urna metus. Aenean laoreet sed odio vitae faucibus. Maecenas nec ante massa. </Text>
            
            <Text style = {Peter.blogTitle}>Journaling</Text>

            <Button title="Go to example blog" onPress={() => navigation.navigate("Blog Page")} />
        </View>

    </View >
    );
    
}