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
        position: 'absolute',
        top: 115,
        left: 396,
        color: 'white',
        fontSize: 80,
        textTransform:'capitalize'
    }),
    Welcome: RX.Styles.createTextStyle({
        position: 'absolute',
        top: 119,
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
        top: 244,
        left: 507,
        marginBottom: 30,
        color: 'white',
    }),
    Text: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 342,
        left: 331,
        marginBottom: 30,
        color: 'white',
    }),
        roundButton: RX.Styles.createViewStyle({
            margin: 16,
            borderRadius: 5,
            backgroundColor: '#2ecc71'
        }),
        editTodoItem: RX.Styles.createViewStyle({
            margin: 15,
            height: 47,
            fontSize: 20,
            justifyContent: 'center',
            alignSelf: 'center',
            marginLeft: 16,
            borderWidth: 2,
            bordercolor: '#cccccc'
        }),
        email: RX.Styles.createTextStyle({
            fontSize: 18,
            color: 'Black',
            justifyContent: 'center',
            position: 'absolute'

        }),
    Input: RX.Styles.createTextStyle({
        marginHorizontal: 4,
        marginVertical: 30,
        paddingHorizontal: 8,
        position: 'absolute',

    }),
    TEXT: RX.Styles.createTextStyle({
        fontSize: 26,
        position: 'absolute',
        top: 441,
        left: 512,
        marginBottom: 30,
        color: 'WHITE'
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
};

export default class FourthPanel extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            secureTextEntry: true
        }
        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }
    // onForward() {
    // console.log("Registerpage");
    // this
    // .props
    // .navigation
    // .navigate('RegisterPage');
// }*


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
                        Please Enter Your Phone Number To Login/Register
                        </RX.Text> 
                    <RX.Text style={ styles.TEXT}>
                        Phone Number
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ '+91' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    </RX.Text>
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForth }>
                        <RX.Text style={ styles.buybuttonText }>
                            NEXT
                        </RX.Text>
                    </RX.Button>
                </RX.View>
            </RX.ScrollView>

        );
    }
}