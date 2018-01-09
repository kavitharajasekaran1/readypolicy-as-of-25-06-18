/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';

import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'black'
    }),
    container: RX.Styles.createViewStyle({
        paddingTop: 60,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        paddingTop: 45,
        color: 'Red',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: 133,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        marginLeft:-124,
        textstyle:'italic'


    }),
    Welcome: RX.Styles.createTextStyle({
        paddingTop: 45,
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: -94,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        padingleft: 149,
        fontSize:35,
        marginLeft:122

    }),
    policy:RX.Styles.createTextStyle({
        paddingTop: 45,
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: -38,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        padingleft: 149,
        fontSize:20,
        marginLeft:-10
       
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
        paddingTop: 4,
        width: '49%',
        height: 40,
        color:'pink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    
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
       
    }),
    button1Hover: RX.Styles.createButtonStyle({
        backgroundColor: '#EF5350'
    }),
    button1Text: RX.Styles.createTextStyle({
        fobutton1HoverntSize: 14,
        color: '#EF5350',
        justifyContent: 'center',
        
    }),
    button1TextHover: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'White',
        justifyContent: 'center',
        margingright:50,
        
    }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: '#ddd',
        borderWidth: 1,
        margin: 20,
        padding: 12,
        borderRadius: 8,
        borderColor: '#EF5350',
        marginTop:120,
    }),
    marTop:RX.Styles.createViewStyle({
        marginTop:20,
    }),
};

export default class MainPanel extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
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

    render() {
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                
                     
                   
                <RX.Text style={ styles.welcome }>Ready</RX.Text>
                
                <RX.Text style={ styles.Welcome }>Policy</RX.Text>
             
                    <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text> 
                    {/* <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForward}>
                        <RX.Text style={ styles.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button> */}
                
                <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={this.props.onNavigateForward }
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