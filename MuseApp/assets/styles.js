import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //generic area

  main: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    height: 80,
    flex: 1,
    flexDirection: "row",
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 10,
  },

  body: {
    flex: 7,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  normalText: {
    fontFamily: "PlayfairDisplay_500Medium",
  },

  genericTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 30,
    paddingBottom: 15,
  },

  blueCaps: {
    fontFamily: "PlayfairDisplay_500Medium",
    fontSize: 16,
    textTransform: "uppercase",
    color: "#0D3691",
  },

  genericButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#707070',

  },

  genericSearchbar: {
    height: 40,
    margin: 12,
    backgroundColor: "#EDE7E7",
    padding: 10,
    borderRadius: 10,
  },

  //header stuff
  headerSections: {
    flex: 1,
    alignItems: "center",
  },

  headerMiddle: {
    flex: 4,
    alignItems: "center",
  },

  headerImage: {
    width: 50,
    height: 50,
  },

  //test for blog thumbnail -ignore for now
  BlogImage: {
    flex: 1,
    width: 500,
    height: 500,
    justifyContent: "center",
  },
});

export { styles };
