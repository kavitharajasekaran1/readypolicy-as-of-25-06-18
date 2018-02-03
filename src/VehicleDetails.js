/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Rest from './RestConfig';
import QuotesSelection from './QuotesSelection';
import { Navigator } from 'reactxp-navigation';
import DatePicker from 'react-datepicker';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,StyleSheet,FormControl,minDate,maxDate,HelpBlock,DateTimeField,Checkbox} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import moment from 'moment';


/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#ffffff'
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
        }),
        read:RX.Styles.createScrollViewStyle({
            borderRadius:15,
            width:"100%",
            marginLeft:20,
            align:'center'
        }),
        HomeScrollImageLogo: RX.Styles.createImageStyle({
            width:97,
            height: 72,
            paddingVertical:20,
            marginLeft:3,
            marginTop:-9
        }),
        
        
}



export default class VehicleDetails extends React.Component{
    _navigator
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.state = {
            startDate: moment()
          };
          this.handlechange = this.handlechange.bind(this);
        }
    renderSquare(i) {
        return <QuotesSelection value={i} />;
    }

   
    


    onChangeDummy = () => {
        this.state = {
            name: 'arun',
            email:'arun.hossamani@rapidqube.com',
            phone:'918369964582',
            regAreaCode:'DL01AB1245',
            previousPolicyExpiry:'15/11/2017',
            registrationYear:'2010',
            carModel:'maruti',
            fuelType:'Petrol',
            carVariant:'AC 4 SPEED(796CC)',
            existingInsurer:'BAJAJ ALLIANCE'
        };
    }

    onChangePost = () => {
        let {
            name='name',
            phone='phone',
            email='email',
            regAreaCode='regAreaCode',
            previousPolicyExpiry='previousPolicyExpiry',
            registrationYear ='registrationYear',
            carModel='carModel',
            fuelType='fuelType',
            carVariant='carVariant',
            existingInsurer='existingInsurer',
        } = this.state;
        let status='new';
        let _id='';
        let password = "donkeybrains";
        let usersPath = "motorfetchPolicyQuotes"
        console.log(name,"name");
        console.log(phone,"phone");
        console.log(email,"email");
        console.log(date,"date");
        console.log(regAreaCode,"regAreaCode");
        console.log(previousPolicyExpiry,"previousPolicyExpiry");
        console.log(registrationYear,"registrationYear");
        console.log(carModel,"carModel");
        console.log(fuelType,"fuelType");
        console.log(carVariant,"carVariant");
        console.log(existingInsurer,"existingInsurer");
        console.log(JSON.stringify({
            status, _id, name, phone,email,regAreaCode,previousPolicyExpiry,registrationYear,carModel,fuelType,carVariant,existingInsurer
            /*firstParam: 'yourValue',
            secondParam: 'yourOtherValue',*/
        }));
// var res="data";
        var res = {
            items: [{
                id: 0,
                name: "Buy milk"
            }, {
                id: 1,
                name: "Write unit tests"
            }, {
                id: 2,
                name: "Cook a meal"
            }]
        }

        this.props.onNavigateEight(res);

      /*  console.log(Rest.ApiUrl,"RestApiUrl");
        return fetch(`${Rest.ApiUrl}/${usersPath}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
            },
            body: JSON.stringify({
                status,_id,name, phone,email,regAreaCode,previousPolicyExpiry,registrationYear,carModel,fuelType,carVariant,existingInsurer

            })
        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.message;
            console.log(res,"res");
            this.props.onNavigateEight(res);
        })*/
    }

    onChangeTextValue = (value) => {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue,"inputValue");
    }


    onChangeName = (value) => {
        const length = this.state.name.length;
        console.log(length,"length");

        console.log(this.state.name,"name");
    }

    validateEmail(value) {
        let regex = /\w[-._\w]*@[-._\w]*\w\.\w{2,5}/;
        if (regex.test(value) === true) {
            return true;
        } else {
            return false;
        }
    }

    getValidationState(name) {
        console.log(this.state.name,"this.state.name");
        // const length = this.state.name.length;
        const value = this.state.name;
        if (this.validateEmail(value)) return 'success';
        else if (length > 5 && !this.validateEmail(value)) return 'warning';
        else if (length > 2 && !this.validateEmail(value)) return 'error';
        return null;
    }

    onChangePhone = (value) => {
        this.setState({ phone: value });
        console.log(this.state.phone,"phone");
    }

    onChangeEmail = (value) => {
        this.setState({ email: value });
        this.props.onUpdate(value);
        console.log(this.state.email,"email");
    }
  onChangeArea = (value) => {
        this.setState({ regAreaCode: value });
        console.log(this.state.regAreaCode,"regAreaCode");
    }

    onChangePolicy = (value) => {
        this.setState({ previousPolicyExpiry: value });
        console.log(this.state.previousPolicyExpiry,"previousPolicyExpiry");
    }


    onChangeReg = (value) => {
        this.setState({ registrationYear: value });
        console.log(this.state.registrationYear,"registrationYear");
    }

    onChangeModel = (value) => {
        this.setState({ carModel: value });
        console.log(this.state.carModel,"model");
    }

    onChangeFuel = (value) => {
        this.setState({ fuelType: value });
        console.log(this.state.fuelType,"fuelType");
    }

    onChangeCar = (value) => {
        this.setState({ carVariant: value });
        console.log(this.state.carVariant,"carVariant");
    }

    onChangeInsurer = (value) => {
        this.setState({ existingInsurer: value });
        console.log(this.state.existingInsurer,"existingInsurer");
    }

    onChangeRestValue = (value) => {
        this.setState({ testValue: value });
        console.log(this.state.testValue,"testValue");
    }


    render() {
        // this.props.onNavigateSixth(function(res) { return (res); })
        // this.props.QuotesSelection
       


        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ styling.container }>
                <RX.Button  onPress={ this.props.onNavigateSuper }><RX.Image
                             style={_styles.HomeScrollImageLogo}
                             source={'./src/img/Back.svg'}/>
                        <RX.Text style={styling.welcome }>
                        New Car Insurance
                    </RX.Text>
                       </RX.Button>
                    {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                        <RX.Text style={ styling.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>*/}
                </RX.View>
                <Grid>
                    {/*<Row className="show-grid">
                        <Col  md={2}></Col>
                        <Col md={4} style={styling.marTop10}>
                            <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                            <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>

                        </Col>
                        <Col md={4} style={styling.marTop10}>
                            <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                            <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>

                        </Col>
                        <Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>
                    </Row>*/}

                    <Row className="clearfix" >
                        <Col  md={8}></Col>
                        <Col  md={8}>
                        <div class="container">
                        <div class="btn-pref btn-group btn-group-justified btn-group-sm" role="group" style={styling.sideMar}aria-label="...">
        <div class="btn-group" role="group">
            <button type="button" id="stars" class="btn btn-primary" href="#tab1" data-toggle="tab"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                <div class="hidden-xs">New</div>
            </button>
        </div>
        <div class="btn-group" role="group"  style={styling.sideMar}  >
            <button type="button" id="favorites" class="btn btn-default" href="#tab2" data-toggle="tab"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                <div class="hidden-xs">Renew</div>
            </button>
        </div>
        </div>
        </div>
                    
                            <Tabs defaultActiveKey={1} style={_styles.read} id="left-tabs-example">
                                <Tab eventKey={1} style={_styles.read}title="New" className="myClass">
                                
                                    {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText}>
                                            Title
                                        </RX.Text>
                                        <form>
                                                <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                                    {/*<FormControl/>*/}
                                            <RX.TextInput
                                                type="email"
                                                style={styling.Form}
                                                placeholder="Enter Registration No"
                                                value={ this.state.name }
                                                onChangeText={this.onChangeName}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                                <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           First Name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Last Name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Email id
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Mobile no
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Date of birth
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            is New User
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            is Login check
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Occupation
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Nominee name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Nominee age
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Relationship with nominee
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Guardian Name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Guardian Age
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Relationshiip with guardian
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent address 1
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Permanent address 2
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent address 3
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Permanent address 3
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent address 4
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent City
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent pincode
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Same address Reg
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residential address 1
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Residential address 2
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residential address 3
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residentiial address 4
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                        Residence city
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residence pincode
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Password reseted
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Client name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           strStdcode
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>



                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           str Phone no
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Model"
                                                value={ this.state.email }
                                                onChangeText={this.onChangeEmail}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Variant"
                                                value={ this.state.regAreaCode }
                                                onChangeText={this.onChangeArea}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Year of manufacturer
                                        </RX.Text>
                                        <DatePicker
                                         selected={this.state.startDate}
                                         onChange={this.handlechange}
                                         />
                                     </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Driving experience 
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                      Voluntary Deductible
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle Manufacture name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                       IDV
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Policy Start Date
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle Mostly driven on
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle register Date
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicleregisteredin the name of
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          model Name
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Company name for car
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Enginee Number
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Chassis Number
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Is twowheeler financed
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Vehicle subline
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Fueltype
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Automobile association membership
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Region
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Car Register city
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Average monthly mileage run
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Engine capacity amount
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                        Personal accident coverfor paid driver
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Legalliability to paid driver
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           legalliability to employees
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                       \cover_elec_acc
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>

                                    {/*<RX.View style={styling.sideMar}>*/}
                                        {/*<RX.Text style={ styling.sideText }>*/}
                                            {/*Vehicle Model*/}
                                        {/*</RX.Text>*/}
                                        {/*<form>*/}
                                            {/*<RX.TextInput*/}
                                                {/*style={styling.Form}*/}
                                                {/*placeholder="Model"*/}
                                                {/*value={ this.state.carModel }*/}
                                                {/*onChangeText={this.onChangeModel}*/}
                                                {/*// defaultValue={ this.state.inputValue }*/}
                                            {/*/>*/}
                                        {/*</form>*/}
                                    {/*</RX.View>*/}

                                   {/* <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Fuel Type
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Fuel Type"
                                                value={ this.state.fuelType }
                                                onChangeText={this.onChangeFuel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>*/}

                                    {/*<RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Car Variant
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Car Variant"
                                                value={ this.state.carVariant }
                                                onChangeText={this.onChangeCar}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>*/}

                                    {/*<RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Previous Insurer
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Car Variant"
                                                value={ this.state.existingInsurer }
                                                onChangeText={this.onChangeInsurer}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>*/}
                                   {/* <Row className="show-grid">
                                        <Col  md={6} style={styling.marTop}>
                                            <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                                        </Col>
                                        <Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>
                                    </Row>*/}

                                    <Row className="show-grid">
                                        <Col md={12} style={styling.marTop10}>
                                            {/*<RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>*/}
                                            <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>

                                        </Col>
                                        {/*<Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>*/}
                                    </Row>

                                </Tab>
                                <Tab eventKey={2} style={_styles.read}  title="Renew">
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText}>
                                            Registration No
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                                validationState={this.getValidationState()}
                                            >
                                                {/*<FormControl/>*/}
                                                <RX.TextInput
                                                    controlId="formBasicText"
                                                    type="email"
                                                    style={styling.Form}
                                                    placeholder="Enter Registration No"
                                                    value={ this.state.name }
                                                    onChangeText={this.onChangeName}
                                                    // defaultValue={ this.state.inputValue }
                                                />
                                                <FormControl.Feedback/>
                                            </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Manufacturer
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.phone }
                                                onChangeText={this.onChangePhone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>


                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Model
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Model"
                                                value={ this.state.email }
                                                onChangeText={this.onChangeEmail}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Variant
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Variant"
                                                value={ this.state.regAreaCode }
                                                onChangeText={this.onChangeArea}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Registration Year
                                        </RX.Text>
                                       
                                       
                                        <div className="form-group">
                                        <div className="input-group date" id="datetimepicker1">
                                         <input type="text" className="form-control" />
                                         <span className="input-group-addon">
                                         <span className="glyphicon-calendar glyphicon">
                                         </span></span>
         </div>
</div>

                                     
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            RTO Location
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationYear }
                                                onChangeText={this.onChangeReg}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>

                                    {/*<RX.View style={styling.sideMar}>*/}
                                    {/*<RX.Text style={ styling.sideText }>*/}
                                    {/*Vehicle Model*/}
                                    {/*</RX.Text>*/}
                                    {/*<form>*/}
                                    {/*<RX.TextInput*/}
                                    {/*style={styling.Form}*/}
                                    {/*placeholder="Model"*/}
                                    {/*value={ this.state.carModel }*/}
                                    {/*onChangeText={this.onChangeModel}*/}
                                    {/*// defaultValue={ this.state.inputValue }*/}
                                    {/*/>*/}
                                    {/*</form>*/}
                                    {/*</RX.View>*/}

                                    {/* <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Fuel Type
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Fuel Type"
                                                value={ this.state.fuelType }
                                                onChangeText={this.onChangeFuel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>*/}

                                    {/*<RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Car Variant
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Car Variant"
                                                value={ this.state.carVariant }
                                                onChangeText={this.onChangeCar}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>*/}

                                    {/*<RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Previous Insurer
                                        </RX.Text>
                                        <form>
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Car Variant"
                                                value={ this.state.existingInsurer }
                                                onChangeText={this.onChangeInsurer}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                        </form>
                                    </RX.View>*/}
                                    {/* <Row className="show-grid">
                                        <Col  md={6} style={styling.marTop}>
                                            <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                                        </Col>
                                        <Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>
                                    </Row>*/}
                                    <Row className="show-grid">
                                        <Col md={10}  >
                                            <code style={styling.mobFont}><Checkbox>No Claims Last Year</Checkbox></code>
                                            <code style={styling.mobFont}><Checkbox>I Don't Know My Policy Expiry Date</Checkbox></code>
                                        </Col>

                                        {/*<Col xs={10} md={10}><code></code></Col>*/}
                                    </Row>
                                    <Row className="show-grid">
                                        <Col md={12} style={styling.marTop10}>
                                            {/*<RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>*/}
                                            <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>
                                            <RX.Button bsStyle="info" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
           <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateEight }>
        <RX.Text style={ _styles.buttonText }>
       NEXT
        </RX.Text>
        </RX.Button>

                                        </Col>
                                        {/*<Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>*/}
                                    </Row>


                                </Tab>
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
    handlechange(date) {
        this.setState({
          startDate: date
        });

      }
      handleSelect(date) {
        this.setState({
          startDate: date
        });
      }
      

    _onChangeText = (newText) => {
        this.setState({ password: newText });
    }

    _onChangeTest = (newText) => {
        this.setState({ password: newText });
    }
    
}
