import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

console.log("App Executed");

  return (
    <NavigationContainer>
        <View style={styles.main}>
          <View style={styles.header}>
              <View style={styles.headerSections}>
                <Image
                  style={styles.headerImage}
                  source={require('./assets/headerIcons/hamburger.png')}
                />
              </View>
              <View style={styles.headerSections}>
              <Image
                  style={styles.headerImage}
                  source={require('./assets/headerIcons/logo.png')}
                />
              </View>
              <View style={styles.headerSections}>
              <Image
                  style={styles.headerImage}
                  source={require('./assets/headerIcons/messages.png')}
                />
              </View>
        </View>
        <View style={styles.body}>

        </View>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#ff0000',
    },

    header: {
      flex:1,
      flexDirection: 'row',
    },

    body: {
      flex: 6,
      backgroundColor: 'gold',
    },

    headerSections: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },

  headerImage: {
    width: 50,
    height: 50,
  },
});
