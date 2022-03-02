import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

console.log("App Executed");

  return (
        <View style={styles.main}>
          <View style={styles.header}>
              <View style={styles.headerSections}>
                <Image
                  style={styles.headerImage}
                  source={require('./assets/icon.png')}
                />
              </View>
              <View style={styles.headerSections}>
              <Image
                  style={styles.headerImage}
                  source={require('./assets/icon.png')}
                />
              </View>
              <View style={styles.headerSections}>
              <Image
                  style={styles.headerImage}
                  source={require('./assets/icon.png')}
                />
              </View>
        </View>
        <View style={styles.body}>

        </View>
    </View>
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
      backgroundColor: '#00ff00',
    },

    body: {
      flex: 6,
      backgroundColor: 'gold',
    },

    headerSections: {
      flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },

  headerImage: {
    width: 50,
    height: 50,
  },
});


{/*<View 
    style = {{
      backgroundColor: "dodgerblue",
      flex: 1,
    }}
    >
      <View style = {{
        backgroundColor: "white",
        flex: 1,

      }}/>


      <View style = {{
        backgroundColor: "dodgerblue",
        flex: 6

      }}/>

    </View>*/}