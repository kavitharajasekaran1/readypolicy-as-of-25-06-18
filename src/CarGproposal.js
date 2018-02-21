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
            marginTop:-9,
            marginleft: 117
        }),
        
        
}

//var message
var quoteid
var premium
export default class VehicleDetails extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
                      quoteid:this.props.navigatorRoute.quoteid,
                      premium:this.props.navigatorRoute.mypremium,
                      title: 'Ms',
                      firstname: 'Neelima',
                      lastname: 'Rani',
                      emailId: 'neeluneelima67@gmail.com',
                      mobileNo: '9553715856',
                      dateofbirth: '02/12/1994',
                      occupation: 'Student',
                      nomineeName: 'Harini',
                      nomineeAge: '50',
                      relationshipWithNominee: 'Cousin',
                      guardianName: 'Prakhya',
                      guardianAge: '60',
                      relationshipwithGuardian: 'Sister',
                      permanentAddress1: 'Guntupalli',
                      permanentAddress2: 'Vijayawada',
                      permanentAddress3: 'Krishna',
                      permanentAddress4: 'Ibrahimpatnam',
                      permanentCity: 'Chennai',
                      permanentPincode: '600034',
                      sameAdressReg:'No',
                      ResidenceAddressOne: 'Hyderabad',
                      ResidenceAddressTwo: 'Guntupalli',
                      ResidenceAddressThree: 'Krishna',
                      ResidenceAddressFour: 'Kurnool',
                      ResidenceCity: 'Chennai',
                      ResidencePinCode: '600032',
                      strStdCode: '0866',
                      strPhoneNo: '2831608',
                      vehicleModelCode: 'ZWTV310',
                      planOpted: 'Fixed Plan',
                      yearOfManufacture: '2017',
                      drivingExperience: '1',
                      voluntaryDeductible:'0',
                      vehicleManufacturerName: 'TVS',
                      idv: '87164',
                      policyStartDate: '21/02/2018',
                      vehicleMostlyDrivenOn: 'Roads',
                      vehicleRegDate: '21/02/2018',
                      vehicleRegisteredInTheNameOf: 'Company',
                      modelName: 'APACHE RTR ABS-2 Seater',
                      productName: 'BrandNewTwoWheeler',
                      companyNameForCar: 'xerago',
                      engineNumber: '565465466',
                      chassisNumber: '56546546',
                      isTwoWheelerFinanced: 'No',
                      vehicleSubLine: 'motorCycle',
                      registrationchargesRoadtax: 'No',
                      fuelType: 'Petrol',
                      automobileAssociationMembership: 'No',
                      region: 'East Region',
                      carRegisteredCity: '24PARGANAS',
                      isProductCheck: 'No',
                      engineCapacityAmount: '153 CC',
                      personalAccidentCoverForUnnamedPassengers: '5000',
                      accidentCoverForPaidDriver: '5000',
                      legalliabilityToPaidDriver: 'Yes',
                      legalliabilityToEmployees: 'Yes',
                      cover_elec_acc: 'Yes',
                      NameOfElectronicAccessories: 'Tyre',
                      MakeModel: 'TVS',
                      Value:'345',
                      NameOfElectronicAccessories: 'Handle',
                          MakeModel: 'HONDA',
                          Value: '365',
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


    


    onChangePost = () => {
        console.log("Rahul")

        return fetch('http://192.168.1.7:3000/gproposalcar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            },
        
            body: JSON.stringify({
                GPROPOSALREQUEST: {
                    authenticationDetails: {
                      agentI: "BA502092",
                      apikey: "310ZQmv/bYJMYrWQ1iYa7s43084="
                    },
                    premium: "114516.0",
                    quoteId: "BA502092VPC0018256",
                    strEmail: "neeluneelima67@gmail.com",
                    reqType: "xml"
                  }
                }),
                    
                    
        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.response;
            var resJson1 = JSON.parse(res)
            console.log(resJson1,"res");
        //    this.props.onNavigateFifty(resJson);
            var Message = resJson1.PREMIUMDETAILS.Status.Message
            console.log(Message,"Message");
            alert(''+Message+'')
            if (Message==="Quote Approved,Proceed Buy Policy"){
           // this.props.onNavigateprposal(res);
            }else{
                return false
            }

        })
     }
        
 
    onChangequoteid = (value) => {
        var quote = quoteid
        this.setState ({ quote});
        console.log(this.state.quoteid,"quoteId");
    }
    onChangepremium = (value) => {
        this.setState({premium: value });
        console.log({premium},"premium");
    }


   
   
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        console.log(this.state.emailId,"emailId");
    }
    
    render() {
        // this.props.onNavigateSixth(function(res) { return (res); })
        // this.props.QuotesSelection
       
     //   message = this.props.navigatorRoute.message
       var quoteid = this.props.navigatorRoute.quoteid
        var mypremium = this.props.navigatorRoute.mypremium

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

   
                    
                            <Tabs defaultActiveKey={1} style={_styles.read} id="left-tabs-example">
                                <Tab eventKey={1} style={_styles.read}title="New" className="myClass">
                                
                                    {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText}>
                                            Quote ID
                                        </RX.Text>
                                        <form>

                                            <RX.TextInput
                                                type="Quote ID"
                                                style={styling.Form}
                                                placeholder="Quote Id"
                                                value={ quoteid }
                                                onChangeText={this.onChangequoteid}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                              
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText}>
                                            Premium 
                                        </RX.Text>
                                        <form>

                                            <RX.TextInput
                                                type="Premium"
                                                style={styling.Form}
                                                placeholder="Premium"
                                                value={mypremium}
                                                onChangeText={this.onChangepremium}
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
                                                placeholder="Email id"
                                                value={ this.state.emailId }
                                                onChangeText={this.onChangeemailId}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                   

                                    <Row className="show-grid">
                                        <Col md={12} style={styling.marTop10}>
                                            {/*<RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>*/}
                                            <RX.Button style={styling.button} onPress={()=> this.onChangePost() }>Primary</RX.Button>

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

