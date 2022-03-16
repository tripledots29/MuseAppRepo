import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppLoading from 'expo-app-loading';
//import fonts
import { useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic 
} from '@expo-google-fonts/playfair-display';

//Screens
import Home from './screens/Home';
import Events from './screens/Events';
import Blog from './screens/Blog';
import BlogPage from './screens/BlogPage';
import Videos from './screens/Videos';
import Reviews from './screens/Reviews';
import Chat from './screens/Chat';

//Functions to load content when chosen in navigation
function HomeScreen() {
  return (
    <Home />
  );
}

function EventsScreen() {
  return (
    <Events />
  );
}

function BlogScreen() {
  return (
    <Blog />
  );
}

function BlogPageScreen() {
  return (
    <BlogPage />
  );
}

function VideosScreen() {
  return (
    <Videos />
  );
}

function ReviewsScreen() {
  return (
    <Reviews />
  );
}

function ChatScreen() {
  return (
    <Chat />
  );
}


const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  let [fontsLoaded] = useFonts({
      PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        width: Dimensions.get('window').width,
      }
    }}
    //initialRouteName={"Events"}
    >
      <Drawer.Screen name="My Muse" component={HomeScreen} />
      <Drawer.Screen name="The Blog" component={BlogScreen} />
      <Drawer.Screen name="Blog Page" component={BlogPageScreen} options={{drawerItemStyle: {height: 0}}} />
      <Drawer.Screen name="Videos" component={VideosScreen} />
      <Drawer.Screen name="Events" component={EventsScreen} />
      <Drawer.Screen name="Reviews" component={ReviewsScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      
      
      {/*If needed, Setting height to 0 means the item doesn't show in the drawer, but is accessible by other pages: options={{drawerItemStyle: {height: 0} }*/}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
