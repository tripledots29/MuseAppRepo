import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  //generic area 

  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    },

    header: {
      flex:1,
      flexDirection: 'row',
    },

    body: {
      flex: 7,
      paddingTop: 50,
      paddingLeft: 10,
      paddingRight:10,
      //backgroundColor: 'gold',
    },

    genericTitle: {
      fontSize: 50,
      fontWeight: "300",
    },

    blueCaps: {
      fontWeight:"bold",
      textTransform: 'uppercase',
      color: "blue",
    },

    genericButton: {

    },

    genericSearchbar: {

    },

    //header stuff
    headerSections: {
      flex: 1,
      //backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      //borderWidth: 1,
    },

    headerMiddle: {
      flex: 4,
      //backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      //borderWidth: 1,
    },

  headerImage: {
    width: 50,
    height: 50,
  },

  //test for blog thumbnail -ignore for now
  BlogImage: {
    flex: 1,
    width:500,
    height: 500,
    justifyContent: "center"
  },
})

export {styles};