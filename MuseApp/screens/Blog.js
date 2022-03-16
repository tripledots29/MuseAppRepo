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
  Pressable,
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

        <View style={Media.blogTitleView}>
                <Text style={styles.genericTitle}>On the Blog</Text>
            </View>

        <View style={styles.body}>

            <ScrollView  style={Media.blogMainView}>
                <Pressable onPress={() => navigation.navigate("Blog Page")}> 
                    <View style={Media.blogPreview}>
                            <View style={Media.blogPreviewThumbnail}>
                            <Image
                                style={Media.blogPreviewThumbnailPic}
                                source={require('../assets/blogThumbnails/journaling.png')}
                            />
                            </View> 
                            <View style={Media.blogPreviewText}>
                                <Text style={[styles.blueCaps, Media.blogPreviewCategory]}>inner peace</Text>
                                <Text style={Media.blogPreviewTitle}>Journaling</Text>
                                <Text style={Media.blogPreviewSummary}>Discover the power of writing out your inner thoughts to help clear your mind…</Text>
                            </View>
                    </View>
                </Pressable>

                <View style={Media.blogPreview}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={Media.blogPreviewThumbnailPic}
                        source={require('../assets/blogThumbnails/meditation.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text style={[styles.blueCaps, Media.blogPreviewCategory]}>inner peace</Text>
                        <Text style={Media.blogPreviewTitle}>The Power Of</Text>
                        <Text style={Media.blogPreviewSummary}>The mind is powerful, let's learn to use that power for good, chanel positive thoughts with Dr Romy…</Text>
                    </View>
                </View>

                <View style={Media.blogPreview}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={Media.blogPreviewThumbnailPic}
                        source={require('../assets/blogThumbnails/dating.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text style={[styles.blueCaps, Media.blogPreviewCategory]}>inner peace</Text>
                        <Text style={Media.blogPreviewTitle}>Dating 101</Text>
                        <Text style={Media.blogPreviewSummary}>Dating can be tough, bring an illness into the mix and it can feel overwhelming. Let us walk you through it…</Text>
                    </View>
                </View>

                <View style={Media.blogPreview}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={Media.blogPreviewThumbnailPic}
                        source={require('../assets/blogThumbnails/dating.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text style={[styles.blueCaps, Media.blogPreviewCategory]}>inner peace</Text>
                        <Text style={Media.blogPreviewTitle}>Dating 101</Text>
                        <Text style={Media.blogPreviewSummary}>Dating can be tough, bring an illness into the mix and it can feel overwhelming. Let us walk you through it…</Text>
                    </View>
                </View>

                <View style={Media.blogPreview}>
                    <View style={Media.blogPreviewThumbnail}>
                    <Image
                        style={Media.blogPreviewThumbnailPic}
                        source={require('../assets/blogThumbnails/dating.png')}
                    />
                    </View> 
                    <View style={Media.blogPreviewText}>
                        <Text style={[styles.blueCaps, Media.blogPreviewCategory]}>inner peace</Text>
                        <Text style={Media.blogPreviewTitle}>Dating 101</Text>
                        <Text style={Media.blogPreviewSummary}>Dating can be tough, bring an illness into the mix and it can feel overwhelming. Let us walk you through it…</Text>
                    </View>
                </View>
            </ScrollView >   
      </View>
    </View>
    
  );
}
