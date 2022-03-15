import {StyleSheet} from 'react-native';

const Media = StyleSheet.create({

    blogTitleView: {
        flex: 1,
        color: "red",
    },

    blogMainView: {
        flex: 8,
        backgroundColor: "grey",
    },

    blogPreviewView: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
    },

    blogPreviewThumbnail: {
        flex: 1,
    },

    blogPreviewText: {
        flex: 3,
    },

});

export {Media};