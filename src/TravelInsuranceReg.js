/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Rest from './RestConfig';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#ffffff'
    }),
};



export default class TravelInsuranceReg extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            testValue:''
        };
    }

    onChangePost = (test) => {
        let {
            testValue = 'testValue'
        } = this.state;

        let email = "joe@example.com";
        let password = "donkeybrains";
        let myApiUrl = "http://www.example.com/api"
        let usersPath = "users"
        console.log(testValue,"testValue");
        console.log(password,"password");
        console.log(Rest.ApiUrl,"RestApiUrl");
        fetch(`${Rest.ApiUrl}/${usersPath}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {email, password}
                /*firstParam: 'yourValue',
                secondParam: 'yourOtherValue',*/
            })
        });
    }

    onChangeTextValue = (value) => {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue,"inputValue");
    }


    onChangeRestValue = (value) => {
        this.setState({ testValue: value });
        console.log(this.state.testValue,"testValue");
    }
    render() {
        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ styling.container }>
                    <RX.Text style={styling.welcome }>
                        New Travel Insurance
                    </RX.Text>
                    {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                        <RX.Text style={ styling.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>*/}
                </RX.View>
                <Grid>
                    <Row className="show-grid">
                        <Col  md={2}></Col>
                        <Col  md={8}>
                            <Tabs defaultActiveKey={1} id="tab">
                                <Tab eventKey={1} title="Self" className="myClass">
                                    {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Travelling Start Date
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Start Date"
                                                value={ this.state.testValue }
                                                onChangeText={this.onChangeRestValue}
                                                // defaultValue={ this.state.inputValue }
                                            />

                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Travelling End Date
                                        </RX.Text>
                                        <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="End Date"
                                            value={ this.state.inputValue }
                                            onChangeText={this.onChangeTextValue}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        </form>
                                    </RX.View>
                                     {/* <RX.View>
                                        <RX.TextInput
                                            placeholder="Placeholder"
                                            value={ this.state.testValue }
                                            onChangeText={this.onChangeRestValue}
                                            // defaultValue={ this.state.inputValue }
                                        />

                                    </RX.View>*/}

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Cover Amount
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Enter Amount"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Country Travelling To
                                        </RX.Text>
                                        <form>
                                            <FormGroup controlId="formControlsSelect">
                                                <FormControl componentClass="select" placeholder="select">
                                                    <option value="select">United States</option>
                                                    <option value="other">Australia</option>
                                                </FormControl>
                                            </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Age of Traveller
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Age"
                                                />
                                            </FormGroup>
                                        </form>
                                        <Button bsStyle="primary"  onPress={()=> this.onChangePost() }>Post</Button>
                                    </RX.View>

                                </Tab>
                                <Tab eventKey={2} title="Group">Tab 2 content</Tab>
                            </Tabs>
                        </Col>
                    </Row>
            </Grid>

                {/*<RX.Text style={styling.Text }>
                    {this.state.joke}
                </RX.Text>*/}
                {/*<form>
                    <FormGroup
                        controlId="formBasicText"

                    >
                        <ControlLabel>Input</ControlLabel>
                        <RX.TextInput
                            type="text"
                            placeholder="Enter text"
                            value={ this.state.Model }
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>*/}


{/*
                <RX.Button bsStyle="danger" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
*/}
            </RX.ScrollView>

        );
    }


    _onChangeReg = () => {
        this.setState({ Model: this.state.Model });
    }

    handleChange() {
        this.setState({ Model:'' });
    }

    _onChangeText = (newText) => {
        this.setState({ password: newText });
    }

    _onChangeTest = (newText) => {
        this.setState({ password: newText });
    }
}
