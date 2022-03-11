import {StyleSheet} from 'react-native';

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
      //borderWidth: 1,
    },

  headerImage: {
    width: 50,
    height: 50,
  },
})

export {styles};