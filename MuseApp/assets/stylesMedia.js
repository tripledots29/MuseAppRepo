import {StyleSheet} from 'react-native';
//import {EStyleSheet} from 'react-native-extended-stylesheet';
const Media = StyleSheet.create({

    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////Blog Main////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //title
    blogTitleView: {
        flex: 0.2,
        margin: 20,
    },

    //everything else
    blogMainView: {
        flex: 1,
        margin: 20,
    },

    //the actual blog rectangles (clickable)
    //placeholder
    blogPreview: {
        flexDirection: "row",
        height: 150,
        borderBottomWidth: 2,
        borderColor: "#FAE9E8",
        marginTop: 10,
        marginBottom: 10, 

        
    },

    //'blogPreview:nth-child-even': {
    //    backgroundColor: 'gray' // make stripped
    //  },


    //pic to the side of the blogs info
    //placeholder
    blogPreviewThumbnail: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },

    //actual data
    blogPreviewThumbnailPic: {
        height: "100%",
        width: 100,

    },

    //blogs info to the side of the blog pic
    //placeholder
    blogPreviewText: {
        flex: 2,
    },

    //actual data
    blogPreviewCategory: {
        fontSize: 15,
        padding: 5,
    },

    blogPreviewTitle: {
        fontWeight:"400",
        fontSize: 20,
        textTransform: 'uppercase',
        padding: 5,
    },

    blogPreviewSummary: {
        fontSize: 12,
        padding: 5,
    },

    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////Blog Pages///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    //everything above the blog content
    blogPageTopView: {
    },

    //same thumbnail as in preview but takes up all of the top and overlaps header (will try to overlap header later)
    blogPageThumbnailPic:{
        height: 200,
        width: "100%",
    },

    //blog page main 
    //placeholder
    blogPageContentView: {
    },

    //Summary area: category and title
    //placeholder
    blogPageSummary: {

    },

    //category of the blog
    blogPageCategory: {

    },

    //title of the blog
    blogPageTitle: {

    },

    //Content area of the blog
    //placeholder
    blogPageContentView: {
        
    },

    //blog post
    //placeholder
    blogPagePost: {

    },

    //the actual text of the blog post
    blogPageText: {
        fontWeight: "400",
    },

    blogPageSimilarPosts: {

    },


    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////Video Main///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    videoTopView: {
        flex: 0.2,
    },

    videoContentView: {
        flex: 5
    },

    videoPreview: {
        flex: 1,
    },

    videoPreviewThumbnail: {
        height: 400,
        width: 350,
        margin: "auto",
    },

    videoPreviewCategory: {
        padding: 10,
    },

    //video title + length
    //placeholder
    videoPreviewSubSection: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },

    //placeholder
    videoPreviewSSTitle: {
        flex: 4,
    },

    videoPreviewTitle: {
        fontSize: 20,
        paddingRight: 1,
    },

    //placeholder
    videoPreviewSSLength: {
        flex: 1,
        marginTop: 20,
        
    },

    videoPreviewLength: {
        color: "#707070",
        fontSize: 15,
    },

    //placeholder
    videoSortView: {
        
    },

    videoSortText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});

export {Media};