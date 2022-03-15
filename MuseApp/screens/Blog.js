import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import AppHeader from "./AppHeader";
import { styles } from "../assets/styles.js";
import { Media } from "../assets/stylesMedia";

export default function Blog() {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>

        <View style={styles.header}>
            <AppHeader />
        </View>

        <View style={styles.body}>

            <View style={Media.blogTitleView}>
                <Text style={styles.genericTitle}>On the Blog</Text>
            </View>

            <ScrollView  style={Media.blogMainView}>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>
                
                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>

                <View style={Media.blogPreviewView}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={styles.headerImage}
                        source={require('../assets/headerIcons/messages.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text>Category</Text>
                        <Text>Title</Text>
                        <Text>Summary</Text>
                    </View>
                </View>
            </ScrollView >

            <Button
            title="Go to example blog"
            onPress={() => navigation.navigate("Blog Page")}
            />          
      </View>
    </View>
  );
}
