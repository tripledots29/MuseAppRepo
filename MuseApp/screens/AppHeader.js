import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {styles} from '../assets/styles.js';

export default function AppHeader() {
  const navigation = useNavigation();
    return (
        <View style={styles.main}>
          <StatusBar/>
          <View style={styles.header}>
              <View style={styles.headerSections}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} >
                  <Image
                    style={styles.headerImage}
                    source={require('../assets/headerIcons/hamburger.png')}
                  />
                </TouchableOpacity>
              </View>
              
              <View style={styles.headerSections}>
                <TouchableOpacity onPress={() => navigation.navigate("My Muse")} >
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/logo.png')}
                        />
                </TouchableOpacity>
              </View>
              
              <View style={styles.headerSections}>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")} >
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                </TouchableOpacity>
              </View>

            </View>
    </View>
    );
    
}