import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

console.log("App Executed");

  return (  
        <View
        style={{
          flexDirection: "row",
          height: 50,
          justifyContent:"center",
         
        }}
       >
        <View style={{ backgroundColor: "blue", flex: 1 }}   >
        <Image
          style={styles.topImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        </View>
  
        <View style={{ backgroundColor: "red", flex: 1 }} >
        <Image
          style={styles.topImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        </View>
  
        <View style={{ backgroundColor: "green", flex: 1 }} >
        <Image
          style={styles.topImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topImage: {
    width: 50,
    height: 50,
    marginLeft:20
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