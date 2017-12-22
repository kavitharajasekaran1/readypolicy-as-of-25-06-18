/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
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



export default class EightPanel extends RX.Component{
    constructor(props) {
        super(props);
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



    render() {
        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ styling.container }>
                    <RX.Text style={styling.welcome }>
                        Eleventh Page
                    </RX.Text>
                    <RX.Button style={ Button } onPress={ this.props.onNavigateEleven }>
                        <RX.Text style={ styling.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>
                </RX.View>

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
            </RX.ScrollView>

        );
    }
    _onChangeVar = () => {
        // this.setState({ Model: ''});
        this.setState({ joke:'' });
        fetch('https://icanhazdadjoke.com/',{headers:{Accept:'text/plain'}}).then(r => r.text())
            .then(joke => this.setState({joke}),e=>this.setState({joke:'could not get'}))

        // this.setState({ Model: string});

        console.log(joke,"joke");
    }

    _onChangeReg = () => {
        this.setState({ Model: this.state.Model });
    }

    handleChange() {
        this.setState({ Model:'' });
    }
}