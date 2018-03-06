/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Checkbox,Visible,lg,xs} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import styling from './AppStyles';

/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f1f1f1'
    }),


};


export default class InsuranceAddons extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            emailId: 'neeluneelima67@gmail.com',
            mobileNo: '9553715856',
            yearOfManufacture: '2017',
            vehicleMostlyDrivenOn: 'Roads',
            carRegisteredCity: '24PARGANAS',
            vehicleManufacturerName: 'TVS',
            vehicleModelCode: 'ZWTV310',
            vehicleRegDate: '06/03/2018',
            lastname: 'Rani',
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
      return  fetch('http://192.168.0.94:8082/calculatecarpremium', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
            },
            
            body: JSON.stringify({
                
                    CALCULATEPREMIUMREQUEST: {
                      authenticationDetails: {
                        agentId: "BA502092",
                        apikey: "310ZQmv/bYJMYrWQ1iYa7s43084="
                      },
                      isNewUser: "Yes",
                      proposerDetails: {
                        addressFour: "North Street",
                        addressOne: "No1",
                        addressThree: "No1",
                        addressTwo: "North Street",
                        contactAddress1: "No1",
                        contactAddress2: "North Street",
                        contactAddress3: "No1",
                        contactAddress4: "North Street",
                        contactCity: "Chennai",
                        contactPincode: "600001",
                        dateOfBirth: "12/08/1990",
                        guardianAge: "54",
                        guardianName: "tqzukzy",
                        nomineeAge: "13",
                        nomineeName: "vinbbhm",
                        occupation: "Student",
                        regCity: "Chennai",
                        regPinCode: "600001",
                        relationshipWithNominee: "Cousin",
                        relationshipwithGuardian: "Mother",
                        same_addr_reg: "No",
                        strEmail: "michael@xerago.com",
                        strFirstName: "ldybgsr",
                        strMobileNo: "9810063054",
                        strPhoneNo: "57879797",
                        strStdCode: "044",
                        strTitle: "Mr"
                      },
                      reqType: "XML",
                      respType: "XML",
                      vehicleDetails: {
                        yearOfManufacture: "2017",
                        carRegisteredCity: "CHENNAI",
                        region: "South Region",
                        vehicleManufacturerName: "BMW",
                        vehicleModelCode: "CMB65",
                        vehicleregDate: "06/03/2018",
                        idv: "3025465",
                        engineCapacityAmount: "1995 CC",
                        drivingExperience: "2",
                        vehicleMostlyDrivenOn: "Hilly areas",
                        averageMonthlyMileageRun: "1000",
                        vehicleSubLine: "privatePassengerCar",
                        ProductName: "BrandNewCar",
                        fuelType: "Petrol",
                        isBiFuelKit: "Yes",
                        isBiFuelKitYes: "ADD ON",
                        addonValue: "8225",
                        automobileAssociationMembership: "No",
                        vehicleRegisteredInTheNameOf: "Individual",
                        voluntarydeductible: "5000",
                        hdnDepreciation: "false",
                        hdnInvoicePrice: "false",
                        hdnKeyReplacement: "false",
                        hdnProtector: "false",
                        hdnRoadTax: "true",
                        hdnWindShield: "true",
                        hdnSpareCar: "true",
                        spareCarLimit: "300",
                        hdnLossOfBaggage: "true",
                        valueOfLossOfBaggage: "7500",
                        cover_dri_othr_car_ass: "Yes",
                        accidentcoverforpaiddriver: "50000",
                        personalaccidentcoverforunnamedpassengers: "200000",
                        legalliabilitytopaiddriver: "Yes",
                        fibreglass: "No",
                        cover_elec_acc: "No",
                        valueofelectricalaccessories: "7193",
                        electricalAccessories: {
                          electronicAccessoriesDetails: [
                            {
                              makeModel: "QlFilgwuMt",
                              nameOfElectronicAccessories: "hhjUGyvtsp",
                              value: "1215"
                            },
                            {
                              makeModel: "jsoOIXpVKJ",
                              nameOfElectronicAccessories: "AGtVfPoitL",
                              value: "1579"
                            },
                            {
                              makeModel: "tmLvPxPCok",
                              nameOfElectronicAccessories: "sCCQdelmBn",
                              value: "1429"
                            },
                            {
                              makeModel: "TkMDZFqHtR",
                              nameOfElectronicAccessories: "mgSBhHMkdR",
                              value: "1065"
                            },
                            {
                              makeModel: "tfKBeIoRQP",
                              nameOfElectronicAccessories: "VpnejUOKJm",
                              value: "1905"
                            }
                          ]
                        },
                        cover_non_elec_acc: "Yes",
                        valueofnonelectricalaccessories: "7779",
                        nonElectricalAccesories: {
                          nonelectronicAccessoriesDetails: [
                            {
                              makeModel: "myXviRDoOh",
                              nameOfElectronicAccessories: "PJCbYotGFQ",
                              value: "1810"
                            },
                            {
                              makeModel: "nxpMLZiEef",
                              nameOfElectronicAccessories: "YusJjZyrpC",
                              value: "1660"
                            },
                            {
                              makeModel: "vbZiMDMKOl",
                              nameOfElectronicAccessories: "baWUyWRdSH",
                              value: "1931"
                            },
                            {
                              makeModel: "bqDobxEyWB",
                              nameOfElectronicAccessories: "YaLTzsZYxT",
                              value: "1163"
                            },
                            {
                              makeModel: "ASwFBhFXFn",
                              nameOfElectronicAccessories: "PzlJAaXNeq",
                              value: "1215"
                            }
                          ]
                        },
                        registrationNumber: "HR10N4662",
                        chassisNumber: "2zDxdIz1S5",
                        engineNumber: "Ri9X4IVSjW",
                        isCarFinanced: "Yes",
                        isCarFinancedValue: "Lease",
                        financierName: "Bajaj"
                      }
                    }
                })
                    }).then((response) => response.json()).then((responseJson) => {
                 var res = responseJson.response;
                 var allResponse = JSON.parse(res)
                 var resJson = allResponse.PREMIUMDETAILS.DATA.IDV
                 var quoteid = allResponse.PREMIUMDETAILS.DATA.QUOTE_ID
                 var premium = allResponse.PREMIUMDETAILS.DATA.PREMIUM
                 var liability = allResponse.PREMIUMDETAILS.DATA.LIABILITY
                 var message = allResponse.PREMIUMDETAILS.Status.Message
                 console.log("quoteid",quoteid)
                 console.log("allresponse",allResponse)
                 console.log("liablity",liability)
                 console.log("message",message)
                 console.log("premium",premium)
                          this.props.onNavigateTwenty(allResponse,resJson,liability,message,quoteid,premium); 
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

    onChangeEmail = (value) => {
        this.setState({ email: value });
        this.props.onUpdate(value);
        console.log(this.state.email,"email");
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
            <RX.Button  onPress={ this.props.onNavigateSuper }><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }>
                    Get Quote
                </RX.Text>
                   </RX.Button>
                {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>*/}
            </RX.View>
                <Grid>
                <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                         Manufacturing Year
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
                                    </RX.View>
                                    <RX.View>
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
                                            Name
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
                                    <RX.Button style={styling.button} onPress={()=> this.onChangePostt()}>Get Quote</RX.Button>
                                   
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