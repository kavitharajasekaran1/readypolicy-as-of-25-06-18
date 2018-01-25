/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,thumbnail,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import moment from 'moment';
import DatePicker from 'react-datepicker';


/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#ffffff'
    }),
    read: RX.Styles.createScrollViewStyle({
        width:'100%'
    }),

};



export default class EightPanel extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
          };
          this.handlechange = this.handlechange.bind(this);
        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
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
    _onChangeVar = (e) => {
        // this.setState({ Model: ''});
        this.setState({ joke:'' });
        fetch('https://icanhazdadjoke.com/',{headers:{Accept:'text/plain'}}).then(r => r.text())
            .then(joke => this.setState({joke}),e=>this.setState({joke:'could not get'}))

        // this.setState({ Model: string});

        console.log(e,"joke");
    }
    state={currentLocation:'Testing'};


    render() {
        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ styling.container }>
                    <RX.Text style={styling.welcome }>
                        Eleventh Page
                    </RX.Text>
                    <RX.View style={styling.sideMar}>
    <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4">
               <img src={'./src/img/Car.svg'} alt="Lights" style={_styles.read}/>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4">
               <img src={'./src/img/Bike.svg'} alt="Lights" style={_styles.read}/>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4">
               <img src={'./src/img/Term.svg'} alt="Lights" style={_styles.read}/>
               </div>
               </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4">
               <img src={'./src/img/Health.svg'} alt="Lights" style={_styles.read}/>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4">
               <img src={'./src/img/Travell.svg'} alt="Lights" style={_styles.read}/>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4">
               <img src={'./src/img/Add Existing Insurance.svg'} alt="Lights" style={_styles.read}/>
               </div>
              </div>
                </RX.View>
                

            
                    <RX.Button style={ Button } onPress={ this.props.onNavigateSixth }>
                        <RX.Text style={ styling.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>
                </RX.View>
               

                <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.sideText }>
                                            Registration Year
                                        </RX.Text>
                                        <DatePicker
             style={styling.Form} 
             mode="date"
             placeholder="DD/MM/YYYY"
             format="DD-MM-YYYY"
             confirmBtnText="Confirm"
                cancelBtnText="Cancel"                         
             selected={this.state.startDate}
             onChange={this.handlechange}
             showYearDropdown
    monthsShown={2}
        />

                                      
                                    </RX.View>
                <RX.Text style={styling.Text }>
                    {this.state.joke}
                </RX.Text>
                <form>
                    <FormGroup
                        controlId="formBasicText"

                    >
                        <ControlLabel>Input</ControlLabel>
                        {/*<RX.TextInput
                            type="text"
                            placeholder="Enter text"
                            value={ this.state.Model }
                            onChange={this.handleChange}
                        />*/}
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
                


                <RX.Button bsStyle="danger" onPress={()=> this._onChangeVar() }>Primary</RX.Button>



           
<DatePicker
                                   
             selected={this.state.startDate}
             onChange={this.handlechange}
            
        />
 </RX.ScrollView>
        );
    }


    _onChangeReg = () =>  {
        this.setState({ Model: this.state.Model});
    }
    handlechange(date) {
        this.setState({
          startDate:date
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      }
      handleSelect(date) {
        this.setState({
          startDate: date
        });
      }
    handleChange() {
        this.setState({ Model: ''});
    }
}