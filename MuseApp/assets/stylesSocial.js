import {StyleSheet} from 'react-native';

const Social = StyleSheet.create({
    body: {
        //marginTop: 00,
        borderWidth:0,
        borderRadius:20,
        borderBottomWidth: 0,

    },

    title: {
        marginTop: 20,
    },

    topImage: {
        width: "100%",
        height: 180
    },

    scrollView: {
        marginTop: 10,
        height: "100%",
        marginBottom: 20,
    
    },
    screenSummary: {
        fontSize: 16,
        color: "#000000",
        marginBottom: 10
    },
    category: {
        marginTop: 15,
        marginBottom: 5
    },

    eventPreview: {
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 20,
        height: 270
    },
    
    applyShadow: {
        //not working yet
    },

    previewTextTime: {
        paddingLeft: 20,
        fontSize: 16,
        color: "#676775"
    },
    previewTextTitle: {
        paddingLeft: 20,
        fontSize: 20,
    },
    previewLink: {
        marginTop: 15,
        paddingLeft: 20,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: "400",
        color: "#0D3691"
    },
    previewImage: {
        width: 230,
        height: 150,
        borderWidth:0,
        borderRadius:20,
        alignItems: 'center',
        marginBottom: 10
    }
});

export {Social};