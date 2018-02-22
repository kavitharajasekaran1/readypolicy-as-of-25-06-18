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
            width:5000,
            height: 72,
            paddingVertical:20,
            marginLeft:-1200,
            marginTop:12
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
                      mypremium:this.props.navigatorRoute.premium,
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
                      policyStartDate: '22/02/2018',
                      vehicleMostlyDrivenOn: 'Roads',
                      vehicleRegDate: '22/02/2018',
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
console.log("quoteid",this.state.quoteid)
console.log("quoteid_",this.props.navigatorRoute.quoteid)
        return fetch('http://192.168.1.7:3000/brandnewupdatevehical', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            },
        
            body: JSON.stringify({
                CALCULATEPREMIUMREQUEST: {
                    "quoteId": this.state.quoteid,
                    "premium": this.state.premium,
                    authenticationDetails: {
                      apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
                      agentId: "RSAI"
                    },
                    proposerDetails: {
                      "title": this.state.title,
                      "firstName": this.state.firstname,
                      "lastname": this.state.lastname,
                      "emailId": this.state. emailId,
                      "mobileNo": this.state. mobileNo,
                      "dateOfBirth": this.state.dateofbirth,
                      "occupation": this.state.occupation,
                      "nomineeName": this.state. nomineeName,
                      "nomineeAge": this.state.nomineeAge,
                      "relationshipWithNominee": this.state.relationshipWithNominee,
                      "guardianName": this.state. guardianName,
                      "guardianAge": this.state. guardianAge,
                      "relationshipwithGuardian": this.state.relationshipwithGuardian,
                      "permanentAddress1": this.state.permanentAddress1,
                      "permanentAddress2": this.state.permanentAddress2,
                      "permanentAddress3": this.state.permanentAddress3,
                      "permanentAddress4": this.state.permanentAddress4,
                      "permanentCity": this.state. permanentCity,
                      "permanentPincode": this.state. permanentPincode,
                      "sameAdressReg": this.state.sameAdressReg,
                      "ResidenceAddressOne": this.state.ResidenceAddressOne,
                      "ResidenceAddressTwo": this.state.ResidenceAddressTwo,
                      "ResidenceAddressThree": this.state.ResidenceAddressThree,
                      "ResidenceAddressFour": this.state. ResidenceAddressFour,
                      "ResidenceCity": this.state. ResidenceCity,
                      "ResidencePinCode": this.state.ResidencePinCode,
                      "strStdCode": this.state.strStdCode,
                      "strPhoneNo": this.state.strPhoneNo,
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
            var resJson1 = JSON.parse(res)
            console.log(resJson1,"res");
           // this.props.onNavigateEight(res);
            var Message = resJson1.PREMIUMDETAILS.Status.Message
            console.log(Message,"Message");
            var mypremium = resJson1.PREMIUMDETAILS.DATA.PREMIUM
            //console.log("premium",premium)
            alert(''+mypremium+'')
            if (Message==="Premium Calculated and Vehicle details saved successfully"){
            this.props.onNavigateEight(res,quoteid,mypremium);
            }else{
                return false
            }

        })
     }
        
    onChangeTextValue = (value) => {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue,"inputValue");
    }
    onChangequoteid = (value) => {
        console.log("VenhicleDetails", value)
        var quote = quoteid
        this.setState ({ quoteid:value});
        console.log(this.state.quoteid,"quoteId");
    }
    onChangepremium = (value) => {
        this.setState({mypremium: value });
        console.log({premium},"premium");
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
    onChangevehicleManufacturerName = (value) => {
        this.setState({ vehicleManufacturerName: value });
        console.log(this.state.vehicleManufacturerName,"vehicleManufacturerName");
    }

    // validateEmail(value) {
    //     let regex = /\w[-._\w]*@[-._\w]*\w\.\w{2,5}/;
    //     if (regex.test(value) === true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //  }

    // // getValidationState = (value)=> {
    // //     this.setState({ name: value });
    // //     console.log(this.state.name,"name");
    // //     // const length = this.state.name.length;
    // //     const value = this.state.name;
    // //     if (this.validateEmail(value)) return 'success';
    // //     else if (length > 5 && !this.validateEmail(value)) return 'warning';
    // //     else if (length > 2 && !this.validateEmail(value)) return 'error';
    // //     return null;
    // // }
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
    onChangenomineeName =   (value) => {
        this.setState({ nomineeName: value });
        console.log(this.state.nomineeName,"nomineeName");
    }
    onChangenomineeAge =   (value) => {
        this.setState({ nomineeAge: value });
        console.log(this.state.nomineeAge,"nomineeAge");
    }
    onChangeguardianName =   (value) => {
        this.setState({ guardianName: value });
        console.log(this.state.guardianName,"guardianName");
    }
    onChangeguardianAge =   (value) => {
        this.setState({ guardianAge: value });
        console.log(this.state.guardianAge,"guardianAge");
    }
    onChangerelationshipWithNominee =   (value) => {
        this.setState({ relationshipWithNominee: value });
        console.log(this.state.relationshipWithNominee,"relationshipWithNominee");
    }
    onChangerelationshipWithGuardian =   (value) => {
        this.setState({ relationshipWithGuardian: value });
        console.log(this.state.relationshipWithGuardian,"relationshipWithGuardian");
    }
    onChangepermanentAddress1 =   (value) => {
        this.setState({ permanentAddress1: value });
        console.log(this.state.permanentAddress1,"permanentAddress1");
    }
    onChangepermanentAddress2=   (value) => {
        this.setState({ permanentAddress2: value });
        console.log(this.state.permanentAddress2,"permanentAddress2");
    }
    onChangepermanentAddress3 =   (value) => {
        this.setState({ permanentAddress3: value });
        console.log(this.state.permanentAddress3,"permanentAddress3");
    }
    onChangepermanentAddress4 =   (value) => {
        this.setState({ permanentAddress4: value });
        console.log(this.state.permanentAddress4,"permanentAddress4");
    }
    onChangepermanentCity =   (value) => {
        this.setState({ permanentCity: value });
        console.log(this.state.permanentCity,"permanentCity");
    }
    onChangepermanentPincode =   (value) => {
        this.setState({ permanentPincode: value });
        console.log(this.state.permanentPincode,"Pincode");
    }
    onChangesameAdressReg =   (value) => {
        this.setState({ sameAdressReg: value });
        console.log(this.state.sameAdressReg,"sameAdressReg");
    }

    onChangeResidenceCity = (value) => {
        this.setState({ResidenceCity : value });
        console.log(this.state.ResidenceCity ,"ResidentialCity ");
    }
    onChangeResidencePinCode = (value) => {
        this.setState({ResidencePinCode : value });
        console.log(this.state.ResidencePinCode ,"ResidencePinCode");
    }
    onChangestrStdCode = (value) => {
        this.setState({strStdCode : value });
        console.log(this.state.strStdCode ,"strStdCode");
    }
    onChangestrPhoneNo = (value) => {
        this.setState({strPhoneNo : value });
        console.log(this.state.strPhoneNo ,"strPhoneNO");
    }
    onChangestrpin = (value) => {
        this.setState({strpin : value });
        console.log(this.state.strpin ,"strpin");
    }
    onChangevehicleModelCode= (value) => {
        this.setState({vehicleModelCode : value });
        console.log(this.state.vehicleModelCode,"vehicleModelCode");
    }
    onChangeplanOpted= (value) => {
        this.setState({planOpted : value });
        console.log(this.state.planOpted,"planOpted");
    }
    onChangedrivingExperience= (value) => {
        this.setState({drivingExperience : value });
        console.log(this.state.drivingExperience,"drivingExperience");
    }
    onChangevoluntaryDeductible= (value) => {
        this.setState({voluntaryDeductible : value });
        console.log(this.state.voluntaryDeductible,"voluntaryDetuctible");
    }
    onChangepermanetCity= (value) => {
        this.setState({permanentCity : value });
        console.log(this.state.permanentCity,"permanentCity");
    }
    onChangeplan= (value) => {
        this.setState({plan : value });
        console.log(this.state.plan,"plan");
    }
    onChangeyearOfManufacture= (value) => {
        this.setState({yearOfManufacture: value });
        console.log(this.state.yearOfManufacture,"yearOfManufacture");
    }
    onChangeidv= (value) => {
        this.setState({idv : value });
        console.log(this.state.idv,"idv");
    }
    onChangepolicyStartDate= (value) => {
        this.setState({policyStartDate : value });
        console.log(this.state.policyStartDate,"policyStartDate");
    }
    onChangevehicleMostlyDrivenOn= (value) => {
        this.setState({vehicleMostlyDrivenOn: value });
        console.log(this.state.vehicleMostlyDrivenOn,"vehicleMostlyDrivenOn");
    }
    onChangevehicleRegDate = (value) => {
        this.setState({vehicleRegDate  : value });
        console.log(this.state.vehicleRegDate ,"vehicleRegDate ");
    }
    onChangevehicleRegisteredInTheNameOf= (value) => {
        this.setState({vehicleRegisteredInTheNameOf : value });
        console.log(this.state.vehicleRegisteredInTheNameOf,"vehicleRegisteredInTheNameOf");
    }
    onChangemodelName= (value) => {
        this.setState({modelName : value });
        console.log(this.state.modelName,"modelName");
    }
    onChangeproductName= (value) => {
        this.setState({productName : value });
        console.log(this.state.productName,"productName");
    }
    onChangecompanyNameForCar= (value) => {
        this.setState({companyNameForCar : value });
        console.log(this.state.companyNameForCar,"companyNameForCar");
    }
    onChangeengineNumber= (value) => {
        this.setState({engineNumber: value });
        console.log(this.state.engineNumber,"engineNumber");
    }
    onChangechassisNumber= (value) => {
        this.setState({chassisNumber: value });
        console.log(this.state.chassisNumber,"chassisNumber");
    }
    onChangeisTwoWheelerFinanced= (value) => {
        this.setState({isTwoWheelerFinanced: value });
        console.log(this.state.isTwoWheelerFinanced,"isTwoWheelerFinanced");
    }
    onChangevehicleSubline= (value) => {
        this.setState({vehicleSubline: value });
        console.log(this.state.vehicleSubline,"vehicleSubline");
    }
    onChangeregistrationchargesRoadtax= (value) => {
        this.setState({registrationchargesRoadtax: value });
        console.log(this.state.registrationchargesRoadtax,"registrationchargesRoadtax");
    }
    onChangefuelType= (value) => {
        this.setState({fuelType: value });
        console.log(this.state.fuelType,"fuelType");
    }
    onChangeautomobileAssociationMembership= (value) => {
        this.setState({automobileAssociationMembership: value });
        console.log(this.state.automobileAssociationMembership,"automobileAssociationMembership");
    }
    onChangeregion= (value) => {
        this.setState({region: value });
        console.log(this.state.region,"region");
    }
    onChangecarRegisteredCity= (value) => {
        this.setState({carRegisteredCity: value });
        console.log(this.state.carRegisteredCity,"carRegisteredCity");
    }
    onChangemileage= (value) => {
        this.setState({mileage: value });
        console.log(this.state.mileage,"mileage");
    }
    onChangeisProductCheck= (value) => {
        this.setState({isProductCheck: value });
        console.log(this.state.isProductCheck,"isProductCheck");
    }



    onChangeResidenceAddressOne = (value) => {
        this.setState({  ResidenceAddressOne: value });
        console.log(this.state. ResidenceAddressOne," ResidenceAddressOne");
    }
    onChangeResidenceAddressTwo = (value) => {
        this.setState({  ResidenceAddressTwo: value });
        console.log(this.state. ResidenceAddressTwo," ResidenceAddressTwo");
    }
    onChangeResidenceAddressThree= (value) => {
        this.setState({  ResidenceAddressThree: value });
        console.log(this.state. ResidenceAddressThree," ResidenceAddressThree");
    }
    onChangeResidenceAddressFour = (value) => {
        this.setState({  ResidenceAddressFour: value });
        console.log(this.state. ResidenceAddressFour," ResidenceAddressFour");
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

    onChangeengineCapacityAmount = (value) => {
        this.setState({engineCapacityAmount: value });
        console.log(this.state.engineCapacityAmount,"engineCapacityAmount");
    }
    onChangepersonalAccidentCoverForUnnamedPassengers = (value) => {
        this.setState({ personalAccidentCoverForUnnamedPassengers: value });
        console.log(this.state.personalAccidentCoverForUnnamedPassengers,"personalAccidentCoverForUnnamedPassengers");
    }
    onChangeaccidentCoverForPaidDriver = (value) => {
        this.setState({accidentCoverForPaidDriver: value });
        console.log(this.state.accidentCoverForPaidDriver,"accidentCoverForPaidDriver");
    }
    onChangelegalliabilityToPaidDriver = (value) => {
        this.setState({ legalliabilityToPaidDriver: value });
        console.log(this.state.legalliabilityToPaidDriver,"legalliabilityToPaidDriver");
    }
    onChangelegalliabilityToEmployees= (value) => {
        this.setState({ legalliabilityToEmployees: value });
        console.log(this.state.legalliabilityToEmployees,"legalliabilityToEmployees");
    }
    onChangecover_elec_acc = (value) => {
        this.setState({ cover_elec_acc: value });
        console.log(this.state.cover_elec_acc,"cover_elec_acc");
    }
    onChangeNameOfElectronicAccessories = (value) => {
        this.setState({ NameOfElectronicAccessories: value });
        console.log(this.state.NameOfElectronicAccessories,"NameOfElectronicAccessories");
    }
    onChangeMakeModel = (value) => {
        this.setState({ MakeModel: value });
        console.log(this.state.MakeModel,"MakeModel");
    }
    onChangeValue = (value) => {
        this.setState({ Value: value });
        console.log(this.state.Value,"Value");
    }


    render() {
        // this.props.onNavigateSixth(function(res) { return (res); })
        // this.props.QuotesSelection
       
     //   message = this.props.navigatorRoute.message
        quoteid = this.props.navigatorRoute.quoteid
         mypremium = this.props.navigatorRoute.premium
        console.log("quoteid",quoteid)
        console.log("premium",mypremium)

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
                        <div className="container">
                        <div className="btn-pref btn-group btn-group-justified btn-group-sm" role="group" style={styling.sideMar}aria-label="...">
        <div className="btn-group" role="group">
            <button type="button" id="stars" className="btn btn-primary" href="#tab1" data-toggle="tab"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                <div className="hidden-xs">New</div>
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
                                            Quote ID
                                        </RX.Text>
                                        <form>

                                            <RX.TextInput
                                                type="Quote ID"
                                                style={styling.Form}
                                                placeholder="Quote Id"
                                                value={quoteid }
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
                                        <RX.Text style={ styling.sideText}>
                                            Title
                                        </RX.Text>
                                        <form>

                                            <RX.TextInput
                                                type="email"
                                                style={styling.Form}
                                                placeholder="Enter Registration No"
                                                value={ this.state.title }
                                                onChangeText={this.onChangetitle}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                              
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
                                       

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Email id"
                                                value={ this.state.emailId }
                                                onChangeText={this.onChangeemailId}
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
                                                placeholder="Mobile no"
                                                value={ this.state.mobileNo }
                                                onChangeText={this.onChangemobileNo}
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
                                                placeholder="Date of Birth"
                                                value={ this.state.dateofbirth }
                                                onChangeText={this.onChangedateofbirth}
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
                                                placeholder="Occupation"
                                                value={ this.state.occupation}
                                                onChangeText={this.onChangeoccupation}
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
                                                value={ this.state.nomineeName }
                                                onChangeText={this.onChangenomineeName}
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
                                                placeholder="Nominee age"
                                                value={ this.state.nomineeAge }
                                                onChangeText={this.onChangenomineeAge}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                        RelationshipWithNominee
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RelationshipWithNominee"
                                                value={ this.state.  relationshipWithNominee}
                                                onChangeText={this.onChangerelationshipWithNominee}
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
                                                placeholder="Guardian Name"
                                                value={ this.state.guardianName}
                                                onChangeText={this.onChangeguardianName}
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
                                                placeholder="Guardian age"
                                                value={ this.state.guardianAge }
                                                onChangeText={this.onChangeguardianAge}
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
                                                placeholder="Relationship with guardian"
                                                value={ this.state.relationshipWithGuardian }
                                                onChangeText={this.onChangerelationshipWithGuardian}
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
                                                placeholder="Permanent address 1"
                                                value={ this.state.permanentAddress1 }
                                                onChangeText={this.onChangepermanentAddress1}
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
                                                placeholder="Permanent address 2"
                                                value={ this.state.permanentAddress2}
                                                onChangeText={this.onChangepermanentAddress2}
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
                                                placeholder="Permanent address 3"
                                                value={ this.state.permanentAddress3 }
                                                onChangeText={this.onChangepermanentAddress3}
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
                                                placeholder="Permanent address 4"
                                                value={ this.state.permanentAddress4 }
                                                onChangeText={this.onChangepermanentAddress4}
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
                                                placeholder="Permanent city"
                                                value={ this.state.permanentCity }
                                                onChangeText={this.onChangepermanentCity}
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
                                                placeholder="Permanent pincode"
                                                value={ this.state.permanentPincode }
                                                onChangeText={this.onChangepermanentPincode}
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
                                                placeholder="Same address reg"
                                                value={ this.state.sameAdressReg }
                                                onChangeText={this.onChangesameAdressReg}
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
                                                placeholder="esidential address 1"
                                                value={ this.state. ResidenceAddressOne}
                                                onChangeText={this.onChangeResidenceAddressOne}
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
                                                placeholder="Residential address 2"
                                                value={ this.state. ResidenceAddressTwo }
                                                onChangeText={this.onChangeResidenceAddressTwo}
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
                                                placeholder="Residential address 3"
                                                value={ this.state. ResidenceAddressThree }
                                                onChangeText={this.onChangeResidenceAddressThree}
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
                                                placeholder="Residential address 4"
                                                value={ this.state. ResidenceAddressFour }
                                                onChangeText={this.onChangeResidenceAddressFour}
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
                                                placeholder="Residence city"
                                                value={ this.state.ResidenceCity }
                                                onChangeText={this.onChangeResidenceCity}
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
                                                placeholder="Residence pincode"
                                                value={ this.state.ResidencePinCode }
                                                onChangeText={this.onChangeResidencePinCode}
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
                                                placeholder="strstdcode"
                                                value={ this.state.strStdCode }
                                                onChangeText={this.onChangestrStdCode}
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
                                                placeholder="str phone no"
                                                value={ this.state.strPhoneNo }
                                                onChangeText={this.onChangestrPhoneNo}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Vehicle model code  
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Vehicle model code"
                                                value={ this.state.vehicleModelCode}
                                                onChangeText={this.onChangevehicleModelCode}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Plan opted 
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Plan opted"
                                                value={ this.state.planOpted }
                                                onChangeText={this.onChangeplanOpted}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Year of manufacturer
                                        </RX.Text>
                                        <RX.TextInput
                                                style={styling.Form}
                                                placeholder=" Year of manufacturer"
                                                value={ this.state.yearOfManufacture}
                                                onChangeText={this.onChangeyearOfManufacture}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                     </RX.View>

                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Driving experience 
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Driving experience"
                                                value={ this.state.drivingExperience }
                                                onChangeText={this.onChangedrivingExperience}
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
                                                placeholder="Voluntary detuctable"
                                                value={ this.state.voluntaryDeductible }
                                                onChangeText={this.onChangevoluntaryDeductible}
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
                                                placeholder="Vehicle manufacturer name"
                                                value={ this.state.vehicleManufacturerName}
                                                onChangeText={this.onChangevehicleManufacturerName}
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
                                                placeholder="IDV"
                                                value={ this.state.idv }
                                                onChangeText={this.onChangeidv}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Policy Start date
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=" staPolicy"
                                                value={ this.state.policyStartDate }
                                                onChangeText={this.onChangepolicyStartDate}
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
                                                placeholder="vehicle mostly driven on"
                                                value={ this.state.vehicleMostlyDrivenOn }
                                                onChangeText={this.onChangevehicleMostlyDrivenOn}
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
                                                placeholder="Vehicle register date"
                                                value={ this.state.vehicleRegDate }
                                                onChangeText={this.onChangevehicleRegDate }
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
                                                placeholder="Vehicle registered in the name of"
                                                value={ this.state.vehicleRegisteredInTheNameOf }
                                                onChangeText={this.onChangevehicleRegisteredInTheNameOf}
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
                                                placeholder="model name"
                                                value={ this.state.modelName }
                                                onChangeText={this.onChangemodelName}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Product Name
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Product name"
                                                value={ this.state.productName }
                                                onChangeText={this.onChangeproductName}
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
                                                placeholder="Company name for car"
                                                value={ this.state.companyNameForCar }
                                                onChangeText={this.onChangecompanyNameForCar}
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
                                                placeholder="enginee number"
                                                value={ this.state.engineNumber }
                                                onChangeText={this.onChangeengineNumber}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Chassis Number
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Chassis Number"
                                                value={ this.state.chassisNumber }
                                                onChangeText={this.onChangechassisNumber}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Is twowheeler financed
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Is twowheeler FInanced"
                                                value={ this.state.isTwoWheelerFinanced }
                                                onChangeText={this.onChangeisTwoWheelerFinanced}
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
                                                placeholder="Vehicle subline"
                                                value={ this.state.vehicleSubline}
                                                onChangeText={this.onChangevehicleSubline}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Registration charges road tax
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="RTO Location"
                                                value={ this.state.registrationchargesRoadtax }
                                                onChangeText={this.onChangeregistrationchargesRoadtax}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                          Fueltype
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Fueltype"
                                                value={ this.state.fuelType }
                                                onChangeText={this.onChangefuelType}
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
                                                placeholder="Automobile association membership"
                                                value={ this.state.automobileAssociationMembership }
                                                onChangeText={this.onChangeautomobileAssociationMembership }
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
                                                placeholder="Region"
                                                value={ this.state.region }
                                                onChangeText={this.onChangeregion}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Car Register city
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Car Register city"
                                                value={ this.state.carRegisteredCity }
                                                onChangeText={this.onChangecarRegisteredCity}
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
                                                placeholder="Averege monthly mileage run"
                                                value={ this.state.mileage }
                                                onChangeText={this.onChangemileage}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Is Product Checkbox
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Is product checkbox"
                                                value={ this.state.isProductCheck }
                                                onChangeText={this.onChangeisProductCheck}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Engine capacity amount
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Engine capacity amount"
                                                value={ this.state.engineCapacityAmount }
                                                onChangeText={this.onChangeengineCapacityAmount}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                   <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Personal accident cover for unnamed passengers
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Personal accident cover for unnamed passenger"
                                                value={ this.state.personalAccidentCoverForUnnamedPassengers}
                                                onChangeText={this.onChangepersonalAccidentCoverForUnnamedPassengers}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                        Personal accident coverfor paid driver
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Personal accident coverfor paid driver"
                                                value={ this.state.accidentCoverForPaidDriver }
                                                onChangeText={this.onChangeaccidentCoverForPaidDriver}
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
                                                placeholder="Legalliability to paid driver"
                                                value={ this.state.legalliabilityToPaidDriver }
                                                onChangeText={this.onChangelegalliabilityToPaidDriver }
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
                                                placeholder="legalliability to employees"
                                                value={ this.state.legalliabilityToEmployees }
                                                onChangeText={this.onChangelegalliabilityToEmployees}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View><RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                       cover_elec_acc
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=" cover_elec_acc"
                                                value={ this.state.cover_elec_acc }
                                                onChangeText={this.onChangecover_elec_acc}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                    Name of Electronic accessories
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Name of Electronic accessories"
                                                value={ this.state.NameOfElectronicAccessories}
                                                onChangeText={this.onChangeNameOfElectronicAccessories}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                               Make Model
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Make Model"
                                                value={ this.state.MakeModel}
                                                onChangeText={this.onChangeMakeModel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                               Value
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Value"
                                                value={ this.state.Value }
                                                onChangeText={this.onChangeValue}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                    Name of Electronic accessories
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Name of Electronic accessories"
                                                value={ this.state.NameOfElectronicAccessories }
                                                onChangeText={this.onChangeNameOfElectroniAccessories}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                               Make Model
                                        </RX.Text>
                                        <form>
                                        
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="Make Model"
                                                value={ this.state.MakeModel }
                                                onChangeText={this.onChangeMakeModel}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                           Value
                                        </RX.Text>
                                        <form>
                                       
                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder="VAlue"
                                                value={ this.state.Value}
                                                onChangeText={this.onChangeValue}
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

