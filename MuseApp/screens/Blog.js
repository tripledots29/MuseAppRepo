import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';

export default function Blog() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.main}>
        
        <View style={styles.header}>
            <AppHeader />
        </View>
        
        <View style={styles.body}>
            <Text>This is the blog page</Text>
            <Button title="Test button - Go to events" onPress={() => navigation.navigate("Events")} />
        </View>

    </View>
    );
    
}