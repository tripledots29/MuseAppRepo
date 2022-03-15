import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        width: Dimensions.get('window').width,
      }
    }}>
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
