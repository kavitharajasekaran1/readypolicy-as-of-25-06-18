/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
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
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 36,
        marginBottom: 16,
        color:' white',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft:-48

    }),
    Welcome: RX.Styles.createTextStyle({
        fontSize: 36,
        marginBottom: 16,
        color:'ORANGE',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 67

    }),
    policy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:34
    }),
        
    text: RX.Styles.createTextStyle({
        fontSize: 30,
        marginBottom: 30,
        color: 'white',
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
        backgroundColor: '#2ecc71'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    business: RX.Styles.createImageStyle({
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
       
    })
};

export default class MainPanel extends RX.Component{
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
                    <RX.Image source={ './src/img/main.png' } style={ [styles.business] } />
                    <RX.Text style={ styles.welcome }>Ready</RX.Text>
                    <RX.Text style={ styles.Welcome }>Policy</RX.Text>
                    <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text>
                    {/* <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForward}>
                        <RX.Text style={ styles.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button> */}
                </RX.View>
            </RX.ScrollView>

        );
    }
}