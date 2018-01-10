/*
* This file demonstrates a basic ReactXP app.
*/

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,T,Visible,Checkbox,lg,xs} from 'react-bootstrap';
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
    Container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(213,222,219,0)',
        padding:5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
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
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
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
        justifyContent: 'center'
    }),
    password: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
    }),
    account: RX.Styles.createTextStyle({
        fontSize: 20,
        color: 'red',
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f5f5f3',
        padding: 11,
        alignSelf:'center',
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 25,
        color: 'red',
        alignSelf:'center',
        textalign:'center',
        justifyContent: 'center',
     
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
    }),
        logo:RX.Styles.createButtonStyle({
        padding: 10,

    }),
    register: RX.Styles.createImageStyle({
        height: 80,
        width: 110,
        justifyContent: 'center'
    }),
    sideText:RX.Styles.createTextStyle({
        fontSize: 20,
        color: '#1a153b'
    }),
    sideMar:RX.Styles.createTextStyle({
        marginTop: 10,
        marginLeft:30,
        marginRight:20
    }),
};

export default class RegisterPage extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todofield: '',
            secureTextEntry: true
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
                    <RX.Text style={ styles.welcome }>
                        Profile
                    </RX.Text>
                </RX.View>
                <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Please Create An Account
                        </RX.Text>
                    </RX.View>
                </RX.View>
                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Full Name
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Enter Name"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                    
                                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Phone Number
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="+91"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                          Date of Birth
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="DD/MM/YY"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Email
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Email-Address"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Password
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Password"
                                                    secureTextEntry= {true}
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                           Location
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Bangalore,India"
                                                    secureTextEntry= {true}
                                                />
                                                <RX.Image source={ './src/img/MapPin.svg' } styles={styles.logo} />
                                            </FormGroup>
                                            
                                        </form>
                                    
                                    <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={this.props.onNavigateFifth }
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
