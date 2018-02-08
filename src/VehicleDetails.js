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
   constructor(props) {
        super(props);
        this.state = {
                      title: '',
                      firstname: '',
                      lastname: '',
                      emailId: '',
                      mobileNo: '',
                      dateofbirth: '',
                      occupation: '',
                      nomineeName: '',
                      nomineeAge: '',
                      relationshipWithNominee: '',
                      guardianName: '',
                      guardianAge: '',
                      relationshipwithGuardian: '',
                      permanentAddress1: '',
                      permanentAddress2: '',
                      permanentAddress3: '',
                      permanentAddress4: '',
                      permanentCity: '',
                      permanentPincode: '',
                      sameAdressReg:'',
                      ResidenceAddressOne: '',
                      ResidenceAddressTwo: '',
                      ResidenceAddressThree: '',
                      ResidenceAddressFour: '',
                      ResidenceCity: '',
                      ResidencePinCode: '',
                      strStdCode: '',
                      strPhoneNo: '',
                      vehicleModelCode: '',
                      planOpted: '',
                      yearOfManufacture: '',
                      drivingExperience: '',
                      voluntaryDeductible:'',
                      vehicleManufacturerName: '',
                      idv: '',
                      policyStartDate: '',
                      vehicleMostlyDrivenOn: '',
                      vehicleRegDate: '',
                      vehicleRegisteredInTheNameOf: '',
                      modelName: '',
                      productName: '',
                      companyNameForCar: '',
                      engineNumber: '',
                      chassisNumber: '',
                      isTwoWheelerFinanced: '',
                      vehicleSubLine: '',
                      registrationchargesRoadtax: '',
                      fuelType: '',
                      automobileAssociationMembership: '',
                      region: '',
                      carRegisteredCity: '',
                      isProductCheck: '',
                      engineCapacityAmount: '',
                      personalAccidentCoverForUnnamedPassengers: '',
                      accidentCoverForPaidDriver: '',
                      legalliabilityToPaidDriver: '',
                      legalliabilityToEmployees: '',
                      cover_elec_acc: '',
                      NameOfElectronicAccessories: '',
                      MakeModel: '',
                      Value:'',
                      NameOfElectronicAccessories: '',
                          MakeModel: '',
                          Value: '',
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

        return fetch('http://192.168.1.7:3000/brandnewupdatevehical', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            },
        
            body: JSON.stringify({
                CALCULATEPREMIUMREQUEST: {
                    quoteId: "QVPBMN0008262",
                    premium: "2774.0",
                    authenticationDetails: {
                      apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
                      agentId: "RSAI"
                    },
                    proposerDetails: {
                      title: this.state.title,
                      firstName: this.state.firstname,
                      lastname: this.state.lastname,
                      emailId: this.state. emailId,
                      mobileNo: this.state. mobileNo,
                      dateOfBirth: this.state.dateofbirth,
                      occupation: this.state.occupation,
                      nomineeName: this.state. nomineeName,
                      nomineeAge: this.state.nomineeAge,
                      relationshipWithNominee: this.state.relationshipWithNominee,
                      guardianName: this.state. guardianName,
                      guardianAge: this.state. guardianAge,
                      relationshipwithGuardian: this.state.relationshipwithGuardian,
                      permanentAddress1: this.state.permanentAddress1,
                      permanentAddress2: this.state.permanentAddress2,
                      permanentAddress3: this.state.permanentAddress3,
                      permanentAddress4: this.state.permanentAddress4,
                      permanentCity: this.state. permanentCity,
                      permanentPincode: this.state. permanentPincode,
                      sameAdressReg: this.state.sameAdressReg,
                      ResidenceAddressOne: this.state.ResidenceAddressOne,
                      ResidenceAddressTwo: this.state.ResidenceAddressTwo,
                      ResidenceAddressThree: this.state.ResidenceAddressThree,
                      ResidenceAddressFour: this.state. ResidenceAddressFour,
                      ResidenceCity: this.state. ResidenceCity,
                      ResidencePinCode: this.state.ResidencePinCode,
                      strStdCode: this.state.strStdCode,
                      strPhoneNo: this.state.strPhoneNo,
                    },
                    vehicleDetails: {
                      vehicleModelCode: this.state.vehicleModelCode,
                      planOpted: this.state.planOpted,
                      yearOfManufacture: this.state. yearOfManufacture,
                      drivingExperience: this.state.drivingExperience,
                      voluntaryDeductible:this.state.voluntaryDeductible ,
                      vehicleManufacturerName:this.state.vehicleManufacturerName,
                      idv: this.state.idv,
                      policyStartDate:this.state.policyStartDate,
                      vehicleMostlyDrivenOn: this.state.vehicleMostlyDrivenOn,
                      vehicleRegDate:this.state.vehicleRegDate ,
                      vehicleRegisteredInTheNameOf: this.state.vehicleRegisteredInTheNameOf,
                      modelName:this.state.modelName ,
                      productName: this.state. productName,
                      companyNameForCar: this.state.companyNameForCar,
                      engineNumber:this.state. engineNumber,
                      chassisNumber: this.state. chassisNumber,
                      isTwoWheelerFinanced: this.state.isTwoWheelerFinanced,
                      vehicleSubLine: this.state. vehicleSubLine,
                      registrationchargesRoadtax: this.state.registrationchargesRoadtax,
                      fuelType: this.state.fuelType,
                      automobileAssociationMembership:this.state.automobileAssociationMembership,
                      region: this.state.region,
                      carRegisteredCity: this.state. carRegisteredCity,
                      averageMonthlyMileageRun: this.state.  averageMonthlyMileageRun,
                      isProductCheck: this.state.isProductCheck,
                      engineCapacityAmount: this.state.engineCapacityAmount,
                      personalAccidentCoverForUnnamedPassengers: this.state.personalAccidentCoverForUnnamedPassengers,
                      accidentCoverForPaidDriver: this.state.accidentCoverForPaidDriver,
                      legalliabilityToPaidDriver: this.state.legalliabilityToPaidDriver,
                      legalliabilityToEmployees:this.state. legalliabilityToEmployees,
                      cover_elec_acc: this.state.cover_elec_acc,
                      nonElectricalAccesories: {
                        nonelectronicAccessoriesDetails: {
                          NameOfElectronicAccessories: this.state.NameOfElectronicAccesories,
                          MakeModel: this.state.MakeModel,
                          Value: this.state.Value
                        }
                      },
                      electricalAccessories: {
                        electronicAccessoriesDetails: {
                          NameOfElectronicAccessories: this.state.NameOfElectronicAccessories,
                          MakeModel: this.state.MakeModel,
                          Value: this.state.Value
                        }
                      },
                    }
                }
                }),
        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.response;
            console.log(res,"res");
            this.props.onNavigateEight(res);
        })
     }
        
    onChangeTextValue = (value) => {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue,"inputValue");
    }


    onChangetitle = (value) => {
        this.setState({ title: value });
        console.log(this.state.title,"title");
    }
    onChangefirstName = (value) => {
        this.setState({ firstname: value });
        console.log(this.state.firstname,"firstname");
    }
    onChangelastName = (value) => {
        this.setState({ lastname: value });
        console.log(this.state.lastname,"lastname");
    }
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        console.log(this.state.emailId,"emailId");
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

    onChangemobileNo = (value) => {
        this.setState({ mobileNo: value });
        console.log(this.state.mobileNo,"mobileNo");
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
    onChangedateofbirth =  (value) => {
        this.setState({ dateofbirth: value });
        console.log(this.state.dateofbirth,"dateofbirth");
    }
    onChangeoccupation =   (value) => {
        this.setState({ occupation: value });
        console.log(this.state.occupation,"occupation");
    }
    onChangenomineename =   (value) => {
        this.setState({ nomineename: value });
        console.log(this.state.nomineename,"nomineename");
    }
    onChangenomineeage =   (value) => {
        this.setState({ nomineeage: value });
        console.log(this.state.nomineeage,"nomineeage");
    }
    onChangeguardianname =   (value) => {
        this.setState({ guardianname: value });
        console.log(this.state.guardianname,"guardianname");
    }
    onChangeguardianage =   (value) => {
        this.setState({ guardianage: value });
        console.log(this.state.guardianage,"guardianage");
    }
    onChangerelationship =   (value) => {
        this.setState({ relationship: value });
        console.log(this.state.relationship,"relationship");
    }
    onChangepermanent1 =   (value) => {
        this.setState({ permanent1: value });
        console.log(this.state.permanent1,"permanent1");
    }
    onChangepermanent2=   (value) => {
        this.setState({ permanent2: value });
        console.log(this.state.permanent2,"permanent2");
    }
    onChangepermanent3 =   (value) => {
        this.setState({ permanent3: value });
        console.log(this.state.permanent3,"permanent3");
    }
    onChangepermanent4 =   (value) => {
        this.setState({ permanent4: value });
        console.log(this.state.permanent4,"permanent4");
    }
    onChangepermanentcity =   (value) => {
        this.setState({ permanentcity: value });
        console.log(this.state.permanentcity,"permanentcity");
    }
    onChangepincode =   (value) => {
        this.setState({ pincode: value });
        console.log(this.state.pincode,"pincode");
    }
    onChangeaddress =   (value) => {
        this.setState({ address: value });
        console.log(this.state.address,"address");
    }

    onChangeresidencecity = (value) => {
        this.setState({residentialcity : value });
        console.log(this.state.residentialcity ,"residentialcity ");
    }
    onChangeresidencepin = (value) => {
        this.setState({residencepin : value });
        console.log(this.state.residencepin ,"residencepin");
    }
    onChangestrcode = (value) => {
        this.setState({strcode : value });
        console.log(this.state.strcode ,"strcode");
    }
    onChangestrpin = (value) => {
        this.setState({strpin : value });
        console.log(this.state.strpin ,"strpin");
    }
    onChangevehicle= (value) => {
        this.setState({vehicle : value });
        console.log(this.state.vehicle,"vehicle");
    }
    onChangeplan= (value) => {
        this.setState({plan : value });
        console.log(this.state.plan,"plan");
    }
    onChangedriving= (value) => {
        this.setState({driving : value });
        console.log(this.state.driving,"driving");
    }
    onChangevoluntary= (value) => {
        this.setState({voluntary : value });
        console.log(this.state.plan,"voluntary");
    }
    onChangeplan= (value) => {
        this.setState({plan : value });
        console.log(this.state.plan,"plan");
    }
    onChangemanufacture= (value) => {
        this.setState({manufacture: value });
        console.log(this.state.manufacture,"manufacture");
    }
    onChangeidv= (value) => {
        this.setState({idv : value });
        console.log(this.state.idv,"idv");
    }
    onChangepolicysd= (value) => {
        this.setState({policysd : value });
        console.log(this.state.policysd,"policysd");
    }
    onChangedriven= (value) => {
        this.setState({driven : value });
        console.log(this.state.driven,"driven");
    }
    onChangeregistersdate= (value) => {
        this.setState({registersdate : value });
        console.log(this.state.registersdate,"registersdate");
    }
    onChangevehicleregisteredin= (value) => {
        this.setState({vehicleregisteredin : value });
        console.log(this.state.vehicleregisteredin,"vehicleregisteredin");
    }
    onChangemodel= (value) => {
        this.setState({model : value });
        console.log(this.state.model,"model");
    }
    onChangeproduct= (value) => {
        this.setState({product : value });
        console.log(this.state.product,"product");
    }
    onChangecompany= (value) => {
        this.setState({company : value });
        console.log(this.state.company,"company");
    }
    onChangeenginee= (value) => {
        this.setState({enginee: value });
        console.log(this.state.enginee,"enginee");
    }
    onChangechassis= (value) => {
        this.setState({chassis: value });
        console.log(this.state.chassis,"chassis");
    }
    onChangetwowheeler= (value) => {
        this.setState({twowheeler: value });
        console.log(this.state.twowheeler,"twowheeler");
    }
    onChangesubline= (value) => {
        this.setState({subline: value });
        console.log(this.state.subline,"subline");
    }
    onChangetax= (value) => {
        this.setState({tax: value });
        console.log(this.state.tax,"tax");
    }
    onChangefuel= (value) => {
        this.setState({fuel: value });
        console.log(this.state.fuel,"fuel");
    }
    onChangeautomobile= (value) => {
        this.setState({automobile: value });
        console.log(this.state.automobile,"automobile");
    }
    onChangeregion= (value) => {
        this.setState({region: value });
        console.log(this.state.region,"region");
    }
    onChangecar= (value) => {
        this.setState({car: value });
        console.log(this.state.car,"car");
    }
    onChangemileage= (value) => {
        this.setState({mileage: value });
        console.log(this.state.mileage,"mileage");
    }
    onChangecheckbox= (value) => {
        this.setState({checkbox: value });
        console.log(this.state.checkbox,"checkbox");
    }



    onChangeresidential1 = (value) => {
        this.setState({ residential1: value });
        console.log(this.state.residential1,"residential1");
    }
    onChangeresidential2 = (value) => {
        this.setState({ residential2: value });
        console.log(this.state.residential2,"residential2");
    }
    onChangeresidential3 = (value) => {
        this.setState({ residential3: value });
        console.log(this.state.residential3,"residential3");
    }
    onChangeresidential4 = (value) => {
        this.setState({ residential1: value });
        console.log(this.state.residential4,"residential4");
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
                                                value={ this.state.title }
                                                onChangeText={this.onChangetitle}
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
                                                placeholder="First Name"
                                                value={ this.state.firstname }
                                                onChangeText={this.onChangefirstName}
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
                                                placeholder="Last Name"
                                                value={ this.state.lastname }
                                                onChangeText={this.onChangelastName }
                                                // defaultValue={ this.state.inputValue }
                                            />
                                             
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Email id
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Email id"
                                                value={ this.state.emailId }
                                                onChangeText={this.onChangeemailId}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Mobile no
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Mobile no"
                                                value={ this.state.mobile }
                                                onChangeText={this.onChangemobile}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                             <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Date of birth
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Date of Birth"
                                                value={ this.state.dateofbirth }
                                                onChangeText={this.onChangedateofbirth}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                             <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Occupation
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Occupation"
                                                value={ this.state.occupation}
                                                onChangeText={this.onChangeoccupation}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                        
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Nominee name
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Enter Manufacturer"
                                                value={ this.state.nomineename }
                                                onChangeText={this.onChangenomineename}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Nominee age
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Nominee age"
                                                value={ this.state.nomineeage }
                                                onChangeText={this.onChangnomineeage}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Guardian Name
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Guardian Name"
                                                value={ this.state.guardianname}
                                                onChangeText={this.onChangeguardianname}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Guardian Age
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Guardian age"
                                                value={ this.state.guardianage }
                                                onChangeText={this.onChangeguardianage}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Relationshiip with guardian
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Relationship with guardian"
                                                value={ this.state.relationship }
                                                onChangeText={this.onChangerelationship}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent address 1
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Permanent address 1"
                                                value={ this.state.permanent1 }
                                                onChangeText={this.onChangepermanent1}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Permanent address 2
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Permanent address 2"
                                                value={ this.state.permanent2}
                                                onChangeText={this.onChangepermanent2}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Permanent address 3
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Permanent address 3"
                                                value={ this.state.permanent3 }
                                                onChangeText={this.onChangepermanent3}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent address 4
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Permanent address 4"
                                                value={ this.state.permanent4 }
                                                onChangeText={this.onChangepermanent4}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent City
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Permanent city"
                                                value={ this.state.permanentcity }
                                                onChangeText={this.onChangepermanetcity}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Permanent pincode
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Permanent pincode"
                                                value={ this.state.pincode }
                                                onChangeText={this.onChangepincode}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Same address Reg
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Same address reg"
                                                value={ this.state.address }
                                                onChangeText={this.onChangeaddress}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residential address 1
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="esidential address 1"
                                                value={ this.state.residential1}
                                                onChangeText={this.onChangeresidential1}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Residential address 2
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Residential address 2"
                                                value={ this.state.residential2 }
                                                onChangeText={this.onChangeonChangeresidential2}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residential address 3
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Residential address 3"
                                                value={ this.state.residential3 }
                                                onChangeText={this.onChangeresidential3}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residentiial address 4
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Residential address 4"
                                                value={ this.state.residential4 }
                                                onChangeText={this.onChangeresidential4}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                        Residence city
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Residence city"
                                                value={ this.state.residencecity }
                                                onChangeText={this.onChangeresidencecity}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Residence pincode
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Residence pincode"
                                                value={ this.state.residencepin }
                                                onChangeText={this.onChangeresidencepin}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           strStdcode
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="strstdcode"
                                                value={ this.state.strcode }
                                                onChangeText={this.onChangestrcode}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                   <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           str Phone no
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="str phone no"
                                                value={ this.state.strphone }
                                                onChangeText={this.onChangestrphone}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle model code  
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Vehicle model code"
                                                value={ this.state.vehicle}
                                                onChangeText={this.onChangevehicle}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Plan opted 
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Plan opted"
                                                value={ this.state.plan }
                                                onChangeText={this.onChangeplan}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
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
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Driving experience"
                                                value={ this.state.driving }
                                                onChangeText={this.onChangedriving}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                      Voluntary Deductible
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Voluntary detuctable"
                                                value={ this.state.voluntary }
                                                onChangeText={this.onChangevoluntary}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle Manufacture name
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Vehicle manufacturer name"
                                                value={ this.state.manufacturer}
                                                onChangeText={this.onChangemanufacturer}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                       IDV
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="IDV"
                                                value={ this.state.idv }
                                                onChangeText={this.onChangeidv}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Policy Start date
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=" staPolicy"
                                                value={ this.state.policysd }
                                                onChangeText={this.onChangepolicysd}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle Mostly driven on
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="vehicle mostly driven on"
                                                value={ this.state.driven }
                                                onChangeText={this.onChangedriven}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle register Date
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Vehicle register date"
                                                value={ this.state.registerdate }
                                                onChangeText={this.onChangeregisterdate}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicleregisteredin the name of
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Vehicle registered in the name of"
                                                value={ this.state.Vehicleregisteredin }
                                                onChangeText={this.onChangeVehicleregisteredin}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          model Name
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="model name"
                                                value={ this.state.model }
                                                onChangeText={this.onChangemodel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Product Name
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Product name"
                                                value={ this.state.product }
                                                onChangeText={this.onChangeproduct}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Company name for car
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Company name for car"
                                                value={ this.state.company }
                                                onChangeText={this.onChangecompany}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Enginee Number
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="enginee number"
                                                value={ this.state.enginee }
                                                onChangeText={this.onChangeenginee}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Chassis Number
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Chassis Number"
                                                value={ this.state.chassis }
                                                onChangeText={this.onChangechassis}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Is twowheeler financed
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Is twowheeler FInanced"
                                                value={ this.state.twowheeler }
                                                onChangeText={this.onChangetwowheeler}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Vehicle subline
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Vehicle subline"
                                                value={ this.state.subline }
                                                onChangeText={this.onChangesubline}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Registration charges road tax
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.tax }
                                                onChangeText={this.onChangetax}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Fueltype
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Fueltype"
                                                value={ this.state.fuel }
                                                onChangeText={this.onChangefuel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Automobile association membership
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Automobile association membership"
                                                value={ this.state.automobile }
                                                onChangeText={this.onChangeautomobile}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Region
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Region"
                                                value={ this.state.region }
                                                onChangeText={this.onChangeregion}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Car Register city
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Car Register city"
                                                value={ this.state.car }
                                                onChangeText={this.onChangecar}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Average monthly mileage run
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Averege monthly mileage run"
                                                value={ this.state.mileage }
                                                onChangeText={this.onChangemileage}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Is Product Checkbox
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Is product checkbox"
                                                value={ this.state.checkbox }
                                                onChangeText={this.onChangecheckbox}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Engine capacity amount
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Engine capacity amount"
                                                value={ this.state.engine }
                                                onChangeText={this.onChangeengine}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                   <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Personal accident cover for unnamed passengers
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Personal accident cover for unnamed passenger"
                                                value={ this.state.accident}
                                                onChangeText={this.onChangeaccident}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                        Personal accident coverfor paid driver
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Personal accident coverfor paid driver"
                                                value={ this.state.paiddriver }
                                                onChangeText={this.onChangepaiddriver}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Legalliability to paid driver
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="      Legalliability to paid driver"
                                                value={ this.state.legal }
                                                onChangeText={this.onChangelegal}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           legalliability to employees
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="legalliability to employees"
                                                value={ this.state.employees }
                                                onChangeText={this.onChangeemployees}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                       cover_elec_acc
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=" cover_elec_acc"
                                                value={ this.state.cover }
                                                onChangeText={this.onChangecover}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                    Name of Electronic accessories
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Name of Electronic accessories"
                                                value={ this.state.electronic}
                                                onChangeText={this.onChangeRegelcetronic}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                               Make Model
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Make Model"
                                                value={ this.state.model}
                                                onChangeText={this.onChangemodel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                               Value
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Value"
                                                value={ this.state.value }
                                                onChangeText={this.onChangevalue}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                    Name of Electronic accessories
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Name of Electronic accessories"
                                                value={ this.state.noneleectronic }
                                                onChangeText={this.onChangenonelectronic}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                               Make Model
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Make Model"
                                                value={ this.state.makemodel }
                                                onChangeText={this.onChangemakemodel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Value
                                        </RX.Text>
                                        <form>
                                        <FormGroup
                                                    controlId="formBasicText"
                                                    validationState={this.getValidationState()}
                                                >
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="VAlue"
                                                value={ this.state.Value}
                                                onChangeText={this.onChangeValue}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            <FormControl.Feedback/>
                                                </FormGroup>
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
                                            <RX.Button bsStyle="info" onPress={()=> this.onChangePost() }>Primary</RX.Button>

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

