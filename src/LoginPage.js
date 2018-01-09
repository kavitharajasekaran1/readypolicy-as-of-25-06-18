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
        backgroundColor: 'BLACK'
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
    policy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:-122
    }),
    Policy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:3,
        textAlign: 'center'

    }),
    POlicy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:120,
        textAlign: 'center'

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
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
        }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 1,
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
    Form:RX.Styles.createViewStyle({
        display: 'block',
         width: '100%',
         height: 34,
         // padding: 6px 12px;
          fontSize: 14,
        // line: 1.42857143;
        color: "white",
        backgroundColor: "grey",
        borderWidth:1,
        borderColor:"white",
        borderRadius: 4,
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
    loginscreenLogoContainer:RX.Styles.createButtonStyle({
        paddingTop: 60,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    loginTitle1: RX.Styles.createButtonStyle({
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
       

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
          
        };
    }

    onChangePost = () => {
        let {
            testValue = 'testValue',
            phone='phone',
            
        } = this.state;

        let password = "donkeybrains";
        let myApiUrl = 'http://119.81.59.59:8082'
        let usersPath = "newLogin"
        console.log(phone,"phone");
        console.log(myApiUrl,"myApiUrl");


        console.log(Rest.ApiUrl,"RestApiUrl",phone);
        fetch(`${Rest.ApiUrl}/${usersPath}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
            },
            body: JSON.stringify({"phone":phone})
        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.message;
            console.log(res,"res");
            this.props.onNavigateForth(res);
        })
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
            
                 
               
            <RX.Text style={ styles.welcome }>Ready</RX.Text>
            
            <RX.Text style={ styles.Welcome }>Policy</RX.Text>
         
                <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text> 
            <RX.Text style={styles.Policy}>Please Enter Your Phone Number To Login/Register</RX.Text>
            <RX.Text style={styles.POlicy}>
            <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="+91"
                                                    secureTextEntry= {true}
                                                />
                                            </FormGroup>
                                        </form>
                                        </RX.Text>
                   <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={this.props.onNavigateForth }
                >
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button>
                </RX.View>
                <Row className="show-grid">
                                        <Col  md={6}>
                                            <RX.Button bsStyle="primary"  onPress={()=> this.onChangePost() }>Post</RX.Button>
                                        </Col>
                                        <Col  md={6}>
                                            <RX.Button bsStyle="warning"  onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        </Col>

                                    </Row>
                
            </RX.ScrollView>

        );
    }
}