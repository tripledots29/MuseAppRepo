import {StyleSheet} from 'react-native';

const Social = StyleSheet.create({
    body: {
        //marginTop: 00,
        borderWidth:0,
        borderRadius:20,
        borderBottomWidth: 0,

    },

    title: {
        marginTop: 5,
        paddingBottom: 2
    },

    topImage: {
        width: "100%",
        height: 160
    },
    scrollViewMain: {
        //height: "100%",
        marginBottom: 100,
    
    },


    scrollView: {
        height: "100%",
        marginBottom: 20,
    
    },
    screenSummary: {
        fontSize: 16,
        color: "#000000",
        marginBottom: 15
    },
    category: {
        marginBottom: 10
    },

    eventPreview: {
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 20,
        height: 220
    },
    
    applyShadow: {
        //not working yet
    },

    previewTextTime: {
        paddingLeft: 15,
        fontSize: 16,
        color: "#676775"
    },

    previewTextTitle: {
        paddingLeft: 15,
        fontSize: 18,
    },

    previewLink: {
        marginTop: 15,
        paddingLeft: 15,
        fontSize: 16,
        textTransform: 'uppercase',
        fontFamily:  "PlayfairDisplay_600SemiBold",
        color: "#0D3691"
    },
    previewImage: {
        width: 230,
        height: 120,
        borderWidth:0,
        borderRadius:20,
        alignItems: 'center',
        marginBottom: 5
    }
});

export {Social};