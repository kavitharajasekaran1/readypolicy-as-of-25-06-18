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
        flex:1,
        backgroundColor:'blue'
       
        
        
    }),
   Image: RX.Styles.createScrollViewStyle({
    flex: 1,
    width: '100%',
    height: '400%',
    resizemode:'cover'
   
      
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
        backgroundColor:'#0101028c'

    }),
    
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        color: 'Red',
        alignSelf: 'center',
        opacity: 0.9,
        width: '100%',
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        textstyle:'italic',
        position:'absolute',
        marginTop:-42
    }),
    Welcome: RX.Styles.createTextStyle({
        paddingTop: 45,
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: -60,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        alignItems:'center',
        fontSize:35,
       

    }),
    policy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:18
       
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
        justifyContent: 'center',
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
    marTop:RX.Styles.createViewStyle({
        marginTop:20,
    }),
    image:RX.Styles.createViewStyle({
        height: 100,
        width:'100%',
        marginTop:'20'

       
    }), 
    backgroundImage:RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: "stretch",
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
            <RX.Image
            source={ ('./src/img/policy.png' )}
            resizeMode="cover"
            fluidalt="Responsive Image"
            style={[styles.backgroundImage]}
        >
               <RX.View style={ styles.container }>
                <RX.Text style={ styles.welcome }>
               
                        <RX.Image source={ './src/img/Logo.svg' } style={ [styles.image] } />
                       
                    </RX.Text>
                                       <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text> 
                    <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={this.props.onNavigateForward}
                >
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button>
                </RX.View> 
                    </RX.Image>
        );
    }
}