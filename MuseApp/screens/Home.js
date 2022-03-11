import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import AppHeader from './AppHeader';
import {styles} from '../assets/styles.js';

export default function Home() {
 const navigation = useNavigation();
    return (
      <View style={styles.main}>
          
          <View style={styles.header}>
            <AppHeader />
          </View>
          
          <View style={styles.body}>
            <Text>This is the home page</Text>
          </View>

      </View>
    );
    
    
}
