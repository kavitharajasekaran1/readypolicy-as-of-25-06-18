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
        alignItems: 'center'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 100,
        marginTop: -441,
        color: 'white'
    }),
    Welcome: RX.Styles.createTextStyle({
        fontSize: 100,
        marginTop: -441,
        color: 'ORANGE',
        marginLeft: 23
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
        height: 821,
        width: 2392,
        marginTop:10,

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
                    <RX.Image source={ './src/img/business.jpg' } style={ [styles.business] } />
                    <RX.Text style={ styles.welcome }>
                        Ready
                        <RX.Text style={ styles.Welcome }>
                            Policy
                        </RX.Text>
                    </RX.Text>
                    <RX.Text style={ styles.text}>
                        Your policy partner
                    </RX.Text>
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForward}>
                        <RX.Text style={ styles.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>
                </RX.View>
            </RX.ScrollView>

        );
    }
}