/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';

const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        position: 'absolute',
        top: 66,
        left: 396,
        color: 'white',
        fontSize: 80,
        textTransform:'capitalize'
    }),
    Welcome: RX.Styles.createTextStyle({
        position: 'absolute',
        top: 66,
        left: 651,
        fontSize: 80,
        color: 'orange'
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
        position: 'absolute',
        top: 482,
        left: 558,
        marginBottom: 30,
        color: 'white',
        justifyContent: 'center'
    }),
    image: RX.Styles.createViewStyle({
        height: 42,
        width: 37,
        marginTop:48,
        marginLeft:10


    }),
    phone: RX.Styles.createViewStyle({
        height: 42,
        width: 37,
        marginTop:46,
        marginLeft:154
    }),
    resend: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        position: 'absolute',
        top: 482,
        left: 558,
        marginBottom: 30,
        color: 'white',
        justifyContent: 'center'
    }),

};

export default class OtpPage extends RX.Component{
    constructor(props) {
        super(props);
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

    render() {
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    <RX.Image source={ './src/img/business.jpg' } style={ [styles.business] } />
                    <RX.Text style={ styles.welcome }>
                        Ready
                    </RX.Text>
                    <RX.Text style={ styles.Welcome }>
                        Policy
                    </RX.Text>
                    <RX.Text style={ styles.text}>
                        Your policy partner
                    </RX.Text>
                    <RX.Text style={ styles.Text}>
                        Waiting to automatically detect an SMS sent to +9600192976.
                    </RX.Text>
                    <RX.Text style={ styles.TExt}>
                        Wrong Number?
                    </RX.Text>
                    <RX.Text style={ styles.quotes }>
                        00
                    </RX.Text>
                    <RX.Text style={ styles.quotes1 }>
                        01
                    </RX.Text>
                    <RX.Text style={ styles.quotes2 }>
                        02
                    </RX.Text>
                    <RX.Text style={ styles.quotes3}>
                        03
                    </RX.Text>
                    <RX.Text style={ styles.otp}>
                        Enter OTP code
                    </RX.Text>
                    <RX.Text style={ styles.resend }>
                        <RX.Image source={ './src/img/logo.png' } style={ [styles.image] } />
                        Resend
                    </RX.Text>
                    <RX.Text style={ styles.resend }>
                        <RX.Image source={ './src/img/download.jpeg' } style={ [styles.phone] } />
                        Phone
                    </RX.Text>
                    <RX.Button style={ styles.roundButton }  onPress={ this.props.onPressNavigate }>
                        <RX.Text style={ styles.buttonText }>
                            NEXT
                        </RX.Text>
                    </RX.Button>
                </RX.View>
            </RX.ScrollView>
        );
    }
}