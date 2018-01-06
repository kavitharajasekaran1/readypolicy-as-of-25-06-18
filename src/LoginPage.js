/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import Rest from './RestConfig';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,} from 'react-bootstrap';
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
        marginLeft:-48,
        fontWeight:'bold'

    }),
    Welcome: RX.Styles.createTextStyle({
        fontSize: 36,
        marginBottom: 16,
        color:'ORANGE',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 67,
        fontweight: 'bold'

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
    Policy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:67
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
    
 
    TEXT: RX.Styles.createTextStyle({
        fontSize: 26,
        position: 'absolute',
        top: 441,
        left: 512,
        marginBottom: 30,
        color: 'WHITE'
    }),
};
    
export default class LoginPage extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
        };
    }

    onChangeDummy = () => {
        this.state = {
            
            phone:'9553715856',
            testValue:'test93',
        };
    }

    onChangePost = () => {
        let {
            testValue = 'testValue',
            phone='phone',
            
        } = this.state;

        let password = "donkeybrains";
        let myApiUrl = "http://119.81.59.59:8082/newLogin"
        let usersPath = "users"
        console.log(phone,"phone");
        console.log(myApiUrl,"myApiUrl");


        console.log(Rest.ApiUrl,"RestApiUrl");
        fetch(`${Rest.ApiUrl}/${usersPath}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {phone}
                /*firstParam: 'yourValue',
                secondParam: 'yourOtherValue',*/
            })
        });
    }

    onChangeTextValue = (value) => {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue,"inputValue");
    }

    onChangePhone = (value) => {
        this.setState({ phone: value });
        console.log(this.state.phone,"phone");
    }
        

    render() {
        return (
            <RX.ScrollView style={ styles.scroll }>
            <RX.View style={ styles.container }>
                <RX.Image source={ './src/img/main.png' } style={ [styles.business] } />
                <RX.Text style={ styles.welcome }>Ready</RX.Text>
                <RX.Text style={ styles.Welcome }>Policy</RX.Text>
                <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text>
                    <RX.Text style={ styles.Policy}>
                        Please Enter Your Phone Number To Login/Register
                        </RX.Text> 
                    <RX.Text style={ styles.TEXT}>
                        Phone Number
                    <RX.TextInput
                         style={styles.Form}
                         placeholder="phone"
                         value={ this.state.phone }
                         onChangeText={this.onChangePhone}
                         // defaultValue={ this.state.inputValue }
                    />
                    </RX.Text>
                    <Row className="show-grid">
                                        <Col  md={6}>
                                            <RX.Button bsStyle="primary"  onPress={()=> this.onChangePost() }>Post</RX.Button>
                                        </Col>
                                        <Col  md={6}>
                                            <RX.Button bsStyle="warning"  onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        </Col>

                                    </Row>

                </RX.View>
            </RX.ScrollView>

        );
    }
}