import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity, Button } from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';

export default function Videos() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.main}>
        
        <View style={styles.header}>
            <AppHeader />
        </View>
        
        <View style={styles.body}>
            <Text>This is the videos page</Text>
        </View>

    </View>
    );
    
}