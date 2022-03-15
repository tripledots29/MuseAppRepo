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
      paddingLeft: 3,
      paddingRight:3,
    },

    body: {
      flex: 7,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight:10,
      //backgroundColor: 'gold',
    },

    genericTitle: {
      fontSize: 30,
      fontWeight: "300",
      paddingBottom: 15
    },

    blueCaps: {
      fontSize: 18,
      fontWeight:"400",
      textTransform: 'uppercase',
      color: "#0D3691",
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