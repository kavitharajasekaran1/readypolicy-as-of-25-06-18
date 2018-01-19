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
}



export default class VehicleDetails extends React.Component{
    _navigator
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
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
            date='date'
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
onChangedate = (value) => {
    this.setState({ date:value});
    console.log(this.state.date,"date");
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
                    <RX.Text style={styling.welcome }>
                        New Car Insurance
                    </RX.Text>
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

                    <Row className="clearfix">
                        <Col  md={2}></Col>
                        <Col  md={8}>
                    
                            <Tabs defaultActiveKey={1} id="left-tabs-example">
                                <Tab eventKey={1} title="New" className="myClass">
                                
                                    {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}

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
                                        <DatePicker
             style={styling.Form}                             
        value={this.state.date}
        onChangeText={this.onChangedate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        />

                                      
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
                                <Tab eventKey={2} title="Renew">
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

    _onChangeText = (newText) => {
        this.setState({ password: newText });
    }

    _onChangeTest = (newText) => {
        this.setState({ password: newText });
    }
}
