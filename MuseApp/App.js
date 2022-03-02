import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

console.log("App Executed");

  return (
    <View 
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
});
