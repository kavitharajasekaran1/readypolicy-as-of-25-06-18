/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Checkbox,Visible,lg,xs} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import styling from './AppStyles';
import SweetAlert from 'react-swal';
import swal from 'sweetalert';
/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    SCROLL: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#52525636'
    }),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:5000,
        height: 72,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:12
    }),

};


export default class InsuranceAddons extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            mobileNo: '',
            yearOfManufacture: '',
            vehicleMostlyDrivenOn: '',
            carRegisteredCity: '',
            vehicleManufacturerName: '',
            vehicleModelCode: '',
            vehicleRegDate: '',
            lastName: '',
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
    onChangePostt = () => {
console.log("hittinh.......")
        //   let email = "joe@example.com";
        // let password = "donkeybrains";
        // let usersPath = "motorIssuePolicy"
        // console.log(password,"password");
       // console.log(Rest.ApiUrl,"RestApiUrl");
      return  fetch('http://localhost:8082/calculatepremium', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
            },
            
            body: JSON.stringify({

                    CALCULATEPREMIUMREQUEST: {
                      authenticationDetails: {
                        apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
                        agentId: "RSAI"
                      },
                      proposerDetails: {
                        title: "Ms",
                        firstName: "testxerago",
                        lastName: "name",
                        emailId: "neeluneelima67@gmail.com",
                        mobileNo: "7898732798",
                        dateOfBirth: "26/11/1987",
                        occupation: "Student",
                        nomineeName: "nomineename",
                        nomineeAge: "43",
                        relationshipWithNominee: "Cousin",
                        guardianName: "guardianname",
                        guardianAge: "54",
                        relationshipwithGuardian: "Mother",
                        permanentAddress1: "address1",
                        permanentAddress2: "address2",
                        permanentAddress3: "address3",
                        permanentAddress4: "address4",
                        permanentCity: "Chennai",
                        permanentPincode: "600032",
                        sameAdressReg: "No",
                        ResidenceAddressOne: "addressone",
                        ResidenceAddressTwo: "addresstwo",
                        ResidenceAddressThree: "addressthree",
                        ResidenceAddressFour: "addressfour",
                        ResidenceCity: "Chennai",
                        ResidencePinCode: "600034",
                        strStdCode: "044",
                        strPhoneNo: "2456984"
                      },
                      vehicleDetails: {
                        vehicleModelCode: "ZWTV310",
                        planOpted: "Flexi Plan",
                        yearOfManufacture: "2017",
                        drivingExperience: "1",
                        voluntaryDeductible: "0",
                        vehicleManufacturerName: "TVS",
                        idv: "65478",
                        policyStartDate: "14/03/2018",
                        vehicleMostlyDrivenOn: "City roads",
                        vehicleRegDate: "14/03/2018",
                        vehicleRegisteredInTheNameOf: "Company",
                        modelName: "APACHE RTR ABS-2 Seater",
                        productName: "BrandNewTwoWheeler",
                        companyNameForCar: "xerago",
                        engineNumber: "565465466",
                        chassisNumber: "5654656",
                        isTwoWheelerFinanced: "No",
                        vehicleSubLine: "motorCycle",
                        fuelType: "Petrol",
                        automobileAssociationMembership: "No",
                        region: "East Region",
                        carRegisteredCity: "24PARGANAS",
                        averageMonthlyMileageRun: "1000",
                        engineCapacityAmount: "153 CC",
                        personalAccidentCoverForUnnamedPassengers: "50000",
                        accidentCoverForPaidDriver: "50000",
                        legalliabilityToPaidDriver: "Yes",
                        legalliabilityToEmployees: "Yes",
                        cover_elec_acc: "Yes",
                        nonElectricalAccesories: {
                          nonelectronicAccessoriesDetails: {
                            NameOfElectronicAccessories: "Tyre",
                            MakeModel: "TVS",
                            Value: "345"
                          }
                        },
                        electricalAccessories: {
                          electronicAccessoriesDetails: {
                            NameOfElectronicAccessories: "Headlight",
                            MakeModel: "Philips",
                            Value: "300"
                          }
                        },
                      }
                    }
                    }),
                    }).then((response) => response.json()).then((responseJson) => {
                 var res = responseJson.response;
                 var resJson1 = JSON.parse(res)
                 var message = resJson1.PREMIUMDETAILS.Status.Message
                 if (message==="Premium Calculated and Quote Saved Successfully"){
                 var resJson = resJson1.PREMIUMDETAILS.DATA.IDV
                 var quoteid = resJson1.PREMIUMDETAILS.DATA.QUOTE_ID
                 var premium = resJson1.PREMIUMDETAILS.DATA.PREMIUM
                 var liability = resJson1.PREMIUMDETAILS.DATA.LIABILITY
                 var odpremium = resJson1.PREMIUMDETAILS.DATA
                
                 console.log("quoteid",quoteid)
                 console.log("neenenne",resJson1)
                 console.log("liablity",liability)
                 console.log("message",message)
                 console.log("premium",premium)
                 console.log("odpremium",odpremium)
                 
           
               
                this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium); 
            }else{
                console.log(message)
              
                return false
            }
                          
                        //  this.props.onNavigateBack (liability,message);
                         // this.props.onNavigateDetail(liability,message);
                     //   idv = resJson.PREMIUMDETAILS.DATA.IDV
                    
                        
                    })
    }
    onChangeyearOfManufacture= (value) => {
        this.setState({yearOfManufacture: value });
        console.log(this.state.yearOfManufacture,"yearOfManufacture");
    }
    onChangecarRegisteredCity= (value) => {
        this.setState({carRegisteredCity: value });
        console.log(this.state.carRegisteredCity,"carRegisteredCity");
    }
    onChangevehicleRegDate = (value) => {
        this.setState({vehicleRegDate  : value });
        console.log(this.state.vehicleRegDate ,"vehicleRegDate ");
    }
    onChangevehicleManufacturerName = (value) => {
        this.setState({ vehicleManufacturerName: value });
        console.log(this.state.vehicleManufacturerName,"vehicleManufacturerName");
    }
    onChangevehicleModelCode= (value) => {
        this.setState({vehicleModelCode : value });
        console.log(this.state.vehicleModelCode,"vehicleModelCode");
    }
    onChangevehicleMostlyDrivenOn= (value) => {
        this.setState({vehicleMostlyDrivenOn: value });
        console.log(this.state.vehicleMostlyDrivenOn,"vehicleMostlyDrivenOn");
    }
    onChangemobileNo = (value) => {
        this.setState({ mobileNo: value });
        console.log(this.state.mobileNo,"mobileNo");
    }
    onChangelastName = (value) => {
        this.setState({ lastName: value });
        console.log(this.state.lastName,"lastName");
    }
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        this.props.onUpdate(value);
        console.log(this.state.emailId,"email");
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
        // console.log(this.props.user,"user");
         return (
            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={ this.props.onPressNavigate}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }>Get Quote </RX.Text>
                   </RX.Button>
                {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>*/}
            </RX.View>
                 <Grid>
                     
                 <div class="steps-form-2">
    <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
        <div class="steps-step-2">
            <a href="#step-1" type="button" class="btn btn-amber btn-circle-2 waves-effect ml-0" data-toggle="tooltip" data-placement="top" title="Quote Details"><i class="fa fa-folder-open-o" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-2" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Vehicle Details"><i class="fa fa-pencil" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-3" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Personal Information"><i class="fa fa-photo" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-4" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect mr-0" data-toggle="tooltip" data-placement="top" title="Payment"><i class="fa fa-check" aria-hidden="true"></i></a>
        </div>
    </div>
</div>
                 <div class="jumbotron" style={ _styles.SCROLL}> 
                 <form>
  <div class="form-row">
    
      <label for="inputEmail4" style={ styling.SIDETEXT }>Please enter vehicle details to get your Quote</label>
      </div>
    
      </form>             
                 <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Manufacturer Year</label>
                                         <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder=" Year of manufacturer"
                                                 value={ this.state.yearOfManufacture}
                                                 onChangeText={this.onChangeyearOfManufacture}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Car Registered City</label>
                                         
                                        
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Car Register city"
                                                 value={ this.state.carRegisteredCity }
                                                 onChangeText={this.onChangecarRegisteredCity}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                            
                                            </div>
  </div>
  </form>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4"  style={ styling.sideText }>Vehicle Register Date</label> 
                                    
                                        
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Vehicle register date"
                                                 value={ this.state.vehicleRegDate }
                                                 onChangeText={this.onChangevehicleRegDate }
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                          </div>  
                                     
                                          <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Vehicle Manufacturer Name</label>                                     
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Vehicle manufacturer name"
                                                 value={ this.state.vehicleManufacturerName}
                                                 onChangeText={this.onChangevehicleManufacturerName}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                              </div>
                                              </div>
                                              </form>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Vehicle Model Code</label> 
                                    
                                        
                                         
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Vehicle model code"
                                                 value={ this.state.vehicleModelCode}
                                                 onChangeText={this.onChangevehicleModelCode}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                             
                                     </div>
      <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Vehicle Mostly Driven On</label>     
                                     
                                        
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="vehicle mostly driven on"
                                                 value={ this.state.vehicleMostlyDrivenOn }
                                                 onChangeText={this.onChangevehicleMostlyDrivenOn}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                            
                                            </div>
                                            </div>
                                              </form>
                                              <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Name</label> 
                                    
                                         
                                        
 
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Last Name"
                                                 value={ this.state.lastName }
                                                 onChangeText={this.onChangelastName }
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                              
                                        </div>
                                        <div class="form-group col-md-3">
      <label for="inputPassword4" style={ styling.sideText }>Email ID</label>     
                                        
 
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Email id"
                                                 value={ this.state.emailId }
                                                 onChangeText={this.onChangeemailId}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                        </div>
                                            </div>
                                            <div class="form-group col-md-3">     
                                      
                                            <label for="inputPassword4" style={ styling.SIdeText }>Mobile No</label> 
                                         
                                             <RX.TextInput
                                                 style={styling.FOrm}
                                                 placeholder="Mobile no"
                                                 value={ this.state.mobileNo }
                                                 onChangeText={this.onChangemobileNo}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                           </div>   
                                         </form>
                                    
                                     <RX.Button style={styling.button} onPress={()=> this.onChangePostt()}>Get Quote</RX.Button>
                   </div>                 
                 </Grid>
 
 
                 
 
 
 
 
 
 
 
 
                 {/*Bootstrap ex stashed for integrate*/}
                 {/*<Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                     <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
                     <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
                     <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
                     <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                         <MenuItem eventKey="4.1">Action</MenuItem>
                         <MenuItem eventKey="4.2">Another action</MenuItem>
                         <MenuItem eventKey="4.3">Something else here</MenuItem>
                         <MenuItem divider />
                         <MenuItem eventKey="4.4">Separated link</MenuItem>
                     </NavDropdown>
                 </Nav>
 
 
 
 
                 <Grid>
                     <Row className="show-grid">
                         <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                     </Row>
 
                     <Row className="show-grid">
                         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                         <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                     </Row>
 
                     <Row className="show-grid">
                         <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                     </Row>
 
                     <Row className="show-grid">
                         <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                         <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                     </Row>
                 </Grid>
 
 
                 <Form horizontal>
                     <FormGroup controlId="formHorizontalEmail">
                         <Col componentClass={ControlLabel} sm={2}>
                             Email
                         </Col>
                         <Col sm={10}>
                             <FormControl type="email" placeholder="Email" />
                         </Col>
                     </FormGroup>
 
                     <FormGroup controlId="formHorizontalPassword">
                         <Col componentClass={ControlLabel} sm={2}>
                             Password
                         </Col>
                         <Col sm={10}>
                             <FormControl type="password" placeholder="Password" />
                         </Col>
                     </FormGroup>
 
                     <FormGroup>
                         <Col smOffset={2} sm={10}>
                             <Checkbox>Remember me</Checkbox>
                         </Col>
                     </FormGroup>
 
                     <FormGroup>
                         <Col smOffset={2} sm={10}>
                             <Button type="submit">
                                 Sign in
                             </Button>
                         </Col>
                     </FormGroup>
                 </Form>*/}
 
                 <RX.Button style={ Button } onPress={ this.props.onNavigateTen }>
                     <RX.Text style={ styling.buttonText }>
                         Go Back
                     </RX.Text>
                 </RX.Button>
             </RX.ScrollView>
 
         );
     }
 }