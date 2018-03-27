/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';

import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';

const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'black'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        position: 'absolute',
        display: 'flex',
        flexdirection: 'column',
        flexgrow: 1,
        flexshrink: 1,
        overflow: 'hidden',
        alignitems: 'stretch',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }),
    welcome: RX.Styles.createTextStyle({
        color: 'Red',
        alignSelf: 'center',
        opacity: 0.9,
        marginTop: -175,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        marginLeft:65,
        textstyle:'italic',
        position:'absolute'


    }),
    Welcome: RX.Styles.createTextStyle({
        
        color: 'white',
        alignSelf: 'center',
        opacity: 0.9,
        marginTop: -175,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        marginLeft:190,
        position: 'absolute'

    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    button1Hover: RX.Styles.createButtonStyle({
        backgroundColor: '#EF5350'
    }),
    button1Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#EF5350',
        justifyContent: 'center',
        textAlign:'CENTER',
        alignSelf:'center'
    }),
    button1TextHover: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'White',
        justifyContent: 'center',
        margingright:50,
        textAlign:'CENTER',
        alignSelf:'center'
    }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: '#ddd',
        borderWidth: 1,
        margin: 20,
        padding: 12,
        borderRadius: 8,
        borderColor: '#EF5350',
        marginTop:500,

    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
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
    business: RX.Styles.createImageStyle({
        height: 821,
        width: 2392,
        marginTop:10,

    }),
    text: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 159,
        left: 507,
        marginBottom: 30,
        color: 'white',
    }),
    Text: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 297,
        left: 331,
        marginBottom: 30,
        color: 'white',
        justifyContent: 'center'
    }),
    TExt: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 351,
        left: 580,
        marginBottom: 30,
        color: 'pink',
        justifyContent: 'center',

        flex: number = 0,
        alignSelf: 'auto'
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 5,
        backgroundColor: '#2ecc71'
    }),
    Input: RX.Styles.createTextStyle({
        marginHorizontal: 4,
        marginVertical: 30,
        paddingHorizontal: 8,
        position: 'absolute',

    }),
    TEXT: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 371,
        left: 507,
        marginBottom: 30,
        color: 'white',
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 9,
        backgroundColor: '#2ecc71',
        marginTop: -239
    }),
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    quotes: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft:-7
    }),
    quotes1: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft: 61
    }),
    quotes2: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft:128
    }),
    quotes3: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft:-75
    }),
    otp: RX.Styles.createTextStyle({
        
            fontSize: 30,
            marginBottom: 16,
            color:'White',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            marginLeft: 1,
            marginTop:82,
            textAlign: 'center'
          
    }),
    image: RX.Styles.createViewStyle({
        height: 42,
        width: 37,
        marginTop:48,
        marginLeft:10


    }),
    Form:RX.Styles.createViewStyle({
        width: '25%',
         float:'left',
          margin: '5px',
           backgroundcolor:  '#fff',
    }),
    Form1:RX.Styles.createViewStyle({
        width: '25%',
        float:'left',
         margin: '5px',
          backgroundcolor:  '#fff',
     
    }),

    Form2:RX.Styles.createViewStyle({
        width: '25%',
        float:'left',
         margin: '5px',
          backgroundcolor:  '#fff',
     
    }),
   
    textInput1: RX.Styles.createTextInputStyle({
        flex: 1,
        maxWidth: 200,
        borderWidth: 1,
        fontSize: 14,
        padding: 4,
        borderColor: 'red'
    }),
    phone: RX.Styles.createViewStyle({
        height: 42,
        width: 37,
        marginTop:46,
        marginLeft:154
    }),
    resend: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: -117,
        marginTop:130
    
    }),
    Resend: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft:31,
        marginTop:130
    }),
    policy: RX.Styles.createScrollViewStyle({
    fontSize: 18,
    marginBottom: 16,
    color:'White',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 1,
    marginTop:-122
    }),
    Policy: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:-48,
        textAlign: 'center'
        }),
        POLICY: RX.Styles.createScrollViewStyle({
            fontSize: 18,
            marginBottom: 16,
            color:'Red',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            marginLeft: 1,
            marginTop:-48,
            textAlign: 'center'
            }),

        POlicy:RX.Styles.createTextStyle({
            fontSize: 18,
            color:'White',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            margin: '5',
            marginTop: '50',
            textAlign: 'justify',

    
        }),
    
};
var token
export default class OtpPage extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
            phone1:'',
            phone2:'',
            phone3:'',
        };
        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }

    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
                toValue: 0,
                easing: RX.Animated.Easing.OutBack(),
                duration: 500
            }
        );

        animation.start();
    }
    onChangeText = (value) => {
        this.setState({ value: value });
        
    }
    onChangePhone = (value) => {
        this.setState({ phone: value });
        console.log(this.state.phone,"phone");
    }
    onChangePhone = (value) => {
        this.setState({ phone1: value });
        console.log(this.state.phone1,"phone");
    }
    onChangePhone = (value) => {
        this.setState({ phone2: value });
        console.log(this.state.phone2,"phone");
    }
    onChangePhone = (value) => {
        this.setState({ phone3: value });
        console.log(this.state.phone3,"phone");
    }

    render() {
        token = this.props.navigatorRoute.token
        return (
            <RX.ScrollView style={ styles.scroll }>
            <RX.View style={ styles.container }>
            
                 
               
            <RX.Text style={ styles.welcome }>Ready</RX.Text>
            
            <RX.Text style={ styles.Welcome }>Policy</RX.Text>
         
                <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text> 
            <RX.Text style={styles.Policy}>Waiting to automatically detect an SMS to 9640266349.<RX.Text style={styles.POLICY}>WrongNumber?</RX.Text></RX.Text>
            <RX.Text style={styles.POlicy}>       
            <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    style={styles.Form}
                                                    value={this.state.value}
                                                    placeholder="00"
                                                    secureTextEntry= {true}
                                                />
                                            </FormGroup>
                                        </form>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    style={styles.Form1}
                                                    value={this.state.value}
                                                    placeholder="01"
                                                    secureTextEntry= {true}
                                                />
                                            </FormGroup>
                                        </form>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    style={styles.Form2}
                                                    value={this.state.value}
                                                    placeholder="02"
                                                    secureTextEntry= {true}
                                                />
                                            </FormGroup>
                                        </form>
                                     
                
                    </RX.Text>
                    <RX.Text style={ styles.otp}>
                        Enter OTP code
                    </RX.Text>
                    <RX.Text style={ styles.resend }>
                        <RX.Image source={ './src/img/logo.png' } style={ [styles.image] } />
                        Resend
                    </RX.Text>
                    <RX.Text style={ styles.Resend }>
                        <RX.Image source={ './src/img/download.jpeg' } style={ [styles.phone] } />
                        Phone
                    </RX.Text>
                    <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={this.props.onPressNavigate }
                >
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button>
                </RX.View>
            </RX.ScrollView>
        );
    }
}