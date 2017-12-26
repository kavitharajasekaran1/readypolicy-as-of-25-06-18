/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:54,
        marginTop:41
    }),
    
    SideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:389,
        marginTop:51
    }),
    quotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
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
        fontSize: 18,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"white",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4,
        marginLeft:62
    }),
    Ncb: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"white",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4,
        marginLeft:592
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
        color: '#3e376d',
        textTransform:'capitalize'
    }),
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#cccccc"
    }),
    Client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#cccccc"
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
        marginTop:30,
        marginLeft:62
    }),
    titleText: RX.Styles.createTextStyle({
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
        color: 'black'
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
        margin: 16,
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
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white',
        justifyContent: 'center'
    }),
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'WHITE',
        padding:5
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3b3751',
        textTransform:'capitalize',
        marginLeft: 60
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    wrapper: {
        backgroundColor: '#ff0081',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },

    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },

    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },

    subtitle: {
        color: 'white',
        fontWeight: 'normal'
    },

    subtitleWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },

    splashscreenLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },

    splashscreenLoadingWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },

    loginscreenContainer: {
        flex: 1,
        backgroundColor: 'emerald'
    },

    loginscreenLogoContainer: {
        paddingTop: 60,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    loginscreenLogo: {
        width: 100,
        height: 100
    },

    loginTitle: {
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: 10,
        width: 160
    },

    loginTitle1: {
        paddingTop: 45,
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: 3,
        width: 350

    },
    loginscreenInputContainer: {
        marginHorizontal: 4,
        marginVertical: 30,
        paddingHorizontal: 8
    },

    loginscreenLoginContainer: {
        paddingTop: 20
    },
    otpscreenContainer: {
        paddingTop: 1,
        width: '49%',
        height: 40
    },

    loginscreenCreateAccountContainer: {
        flex: 1
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },



};

export default class TwelvePanel extends RX.Component {
    static navigationOptions = {
        header: null
    }
    componentWillUnmount() {
        // clear the interval
        clearInterval(this.autoRefreshHandler);
    }

    render() {
        return (
            <RX.ScrollView keyboardShouldPersistTaps="always" style={styles.scrollContainer}>
            <RX.View style={styles.scrollViewContainer}>
                <RX.View style={styles.scrollImage}>
                    <RX.Image
                        style={styles.homeImageLayout}
                        source={require('../../../assets/images/marine_cargo_insurance.jpg')}/>
                </RX.View>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitIssuedPolicy(token, userType)}>

                    <RX.View style={styles.scrollBox}>

                        <RX.Image
                            style={styles.homeScrollImageLogo}
                            source={require('../../../assets/images/mypolicies_icon.png')}/>
                        <RX.Text style={styles.scrollBoxText}>Issued Policies</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitSavedPolicy(token, userType, policyHolderName, email)}>
                    <RX.View style={styles.scrollBox}>
                        <RX.Image
                            style={styles.homeScrollImageLogo}
                            source={require('../../../assets/images/savedpolicy_icon.png')}/>
                        <RX.Text style={styles.scrollBoxText}>Saved Policies</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>

                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitNewPolicy(token, userType, policyHolderName, email)}>
                    <RX.View style={styles.scrollBox}>
                        <RX.Image
                            style={styles.homeScrollImageLogo}
                            source={require('../../../assets/images/newpolicy_icon.png')}/>
                        <RX.Text style={styles.scrollBoxText}>New Policy</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitMyClaims(token, userType)}>
                    <RX.View style={styles.scrollBox}>
                        <RX.Image
                            style={styles.homeScrollImageLogo}
                            source={require('../../../assets/images/claims_icon.png')}/>
                        <RX.Text style={styles.scrollBoxText}>My Claims</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitLogout(token, userType, policyHolderName, email)}>
                    <RX.View style={styles.scrollBox}>
                        <RX.Image
                            style={styles.homeScrollImageLogo}
                            source={require('../../../assets/images/Logout_icon.png')}/>
                        <RX.Text style={styles.scrollBoxText}>Logout</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitClaimStatus(token, userType)}>
                    <RX.View style={scrollBox}>
                        <RX.Image
                            style={homeScrollImageLogo}
                            source={require('../../../assets/images/claimstatus.png')}/>
                        <RX.Text style={scrollBoxText}>Claim Status</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitChat(token, userType)}>
                    <RX.View style={scrollBox}>
                        <RX.Image
                            style={homeScrollImageLogo}
                            source={require('../../../assets/images/chat.png')}/>

                    </RX.View>
                </RX.TouchableOpacity>
                <RX.TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.onSubmitUpdate(token, userType, email, fname, lname, phone, password)}>
                    <RX.View style={styles.scrollBox}>
                        <RX.Image
                            style={styles.homeScrollImageLogo}
                            source={require('../../../assets/images/updateprofile.png')}/>
                        <RX.Text style={scrollBoxText}>Update Profile</RX.Text>
                    </RX.View>
                </RX.TouchableOpacity>
            </RX.View>
        </RX.ScrollView>

    );
}
}
