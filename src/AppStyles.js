/**
 * TodoStyles.js
 ****/
// import StyleSheet from 'react-native-extensible-stylesheet';
// import { StyleSheet } from 'react-native';
import RX from 'reactxp';
import React from 'react';
module.exports = {
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center',

    }),
    welcome: RX.Styles.createScrollViewStyle({
        fontSize: 40,
        color: 'white',
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#f5f5f3',
        padding:5
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 30,
        color: '#3b3751',
        textTransform:'capitalize'
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#232229',
        textTransform:'capitalize',
        marginTop:19
    }),
    sideHeadxs: RX.Styles.createScrollViewStyle({
        fontSize: 10,
        color: '#232229',
        textTransform:'capitalize',
        marginTop:19
    }),
    quotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#ff0000',
        textTransform:'capitalize',
        marginTop:32,
        height:41,
        width:169,
        padding:4
    }),
    quotesxs: RX.Styles.createScrollViewStyle({
        fontSize: 10,
        color: '#ff0000',
        textTransform:'capitalize',
        marginTop:32,
        height:41,
        width:169,
        padding:4
    }),
    valid: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#f8ba01',
        textTransform:'capitalize',
        marginTop:32,
        height:41,
        width:169,
        padding:4,
        marginLeft:71
    }),
    quoted: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169,
        padding:4,
        marginLeft:92
    }),
    subQuotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169

    }),
    ncb: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4
    }),
    subNcb: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        alignItems:'left',
        height:41
    }),
    tryHead: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#3b3a47',
        textTransform:'capitalize'
    }),
    tryHeadxs: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#3b3a47',
        textTransform:'capitalize'
    }),
    clientHead: RX.Styles.createScrollViewStyle({
        fontSize: 20,
        color: '#413a6f',
        textTransform:'capitalize'
    }),
    clientHeadts: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#000000',
        textTransform:'capitalize'
    }),
    clientHeadQuotes: RX.Styles.createScrollViewStyle({
        fontSize: 20,
        color: '#000000',
        textTransform:'capitalize'
    }),
    clientHeadxs: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#413a6f',
        textTransform:'capitalize'
    }),
    clientDate: RX.Styles.createScrollViewStyle({
        fontSize: 10,
        color: '#85848c',
        textTransform:'capitalize'
    }),
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:"#ff0000"
    }),
    clientLeft: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderLeftWidth:2,
        borderColor:"#ff0000"
    }),
    expired: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:"#f8ba01"
    }),
    btn: RX.Styles.createViewStyle({
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row'
    }),
    nextBtn: RX.Styles.createViewStyle({
        marginTop:15,
        marginLeft:62
    }),
    titleText: RX.Styles.createTextStyle({
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
        color: 'black'
    }),
    txtCenter: RX.Styles.createTextStyle({
        textAlign: 'center',
    }),
    videoTitleText: RX.Styles.createTextStyle({
        marginBottom: 8
    }),
    progressMargin: RX.Styles.createViewStyle({
        margin: 8
    }),
    video: RX.Styles.createViewStyle({
        height: 176,
        width: 320
    }),
    roundButton: RX.Styles.createViewStyle({
        marginTop: 16,
        borderRadius: 5,
        backgroundColor: '#2ecc71'
    }),
    roundButtonQuote: RX.Styles.createViewStyle({
        marginTop: 23,
        borderRadius: 5,
        backgroundColor: '#2ecc71'
    }),
    buyButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    sideText:RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#2f2a4d',
        fontWeight:'bold'

    }),
    sideMar:RX.Styles.createTextStyle({
        marginTop: 10
    }),
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createTextStyle({
        margin: 8,
        height: 18,
        fontSize: 14,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderWidth:1 ,
        borderRightWidth:0,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderStyle:'solid',
        borderColor:'#ccc'
    }),
    image: RX.Styles.createViewStyle({
        height: 45,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    quoteImage: RX.Styles.createViewStyle({
        height: 45,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:19
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#f5f5f3',
        padding:5
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 30,
        color: '#3b3751',
        textTransform:'capitalize'
    }),
    assitance: RX.Styles.createTextStyle({
        fontSize: 20,
        color: '#1a1828',
        textTransform:'capitalize',
    }),
    assitanceMob: RX.Styles.createTextStyle({
        fontSize: 15,
        color: '#1a1828',
        textTransform:'capitalize',
    }),
    assitanceBor: RX.Styles.createTextStyle({
        borderBottomWidth:'1',
        borderColor:'#cccccc'
    }),
    check: RX.Styles.createViewStyle({
       marginTop:5
    }),
    contain: RX.Styles.createViewStyle({
        backgroundColor:'#FFFFFF',
    }),
    Text:RX.Styles.createTextStyle({
        fontSize:15,
        color:'#000000'
    }),
    Self: RX.Styles.createViewStyle({
        backgroundColor:'#FF6347'

    }),
    button1Hover: RX.Styles.createButtonStyle({
        backgroundColor: '#EF5350'
    }),
    button1Text: RX.Styles.createTextStyle({
        fobutton1HoverntSize: 14,
        color: '#EF5350',
        justifyContent: 'center'
    }),
    button1TextHover: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'White',
        justifyContent: 'center',
        margingright:50
    }),
    Form:RX.Styles.createViewStyle({
        display: 'block',
         width: '100%',
         height: 34,
         // padding: 6px 12px;
          fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius: 4
    }),
    Tab:RX.Styles.createViewStyle({
        backgroundColor: "#f8ad46",
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius: 4,
        color:"#FFF"
    }),
    customBtn:RX.Styles.createViewStyle({
        color: "#fff",
        backgroundColor: "#ff606b",
        borderColor: "#ff606b",
        borderWidth:1,
        padding:10,
        borderRadius: 4
    }),
    marTop:RX.Styles.createViewStyle({
      marginTop:20,
    }),
    marTop40:RX.Styles.createViewStyle({
        marginTop:40,
    }),
    marTopxs:RX.Styles.createViewStyle({
        marginTop:58,
        color:'#fa774d'
    }),
    marTopcs:RX.Styles.createViewStyle({
        marginTop:20,
        textAlign:'right'
    }),
    btnMaxWidth:RX.Styles.createViewStyle({
        width:"100%"
    }),
    marTop10:RX.Styles.createViewStyle({
        marginTop:10
    }),
    mobFont:RX.Styles.createViewStyle({
        color:"#000000",
        padding:'5'
    }),
    marTop17:RX.Styles.createViewStyle({
        marginTop:17
    }),
    cmpBack:RX.Styles.createViewStyle({
        backgroundColor: "#ffffff",
    }),
    clientBor: RX.Styles.createViewStyle({
        borderBottomWidth:1,
        borderColor:"#cccccc"
    }),
}




