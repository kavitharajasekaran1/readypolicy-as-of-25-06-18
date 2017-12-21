/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import {createClass} from 'react';
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


    getInitialState() {
        return {
            value: 10,
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
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
                        validationState={this.getValidationState.bind()}
                    >
                        <ControlLabel>Working example with validation</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.props.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </form>


                <Button bsStyle="danger">Primary</Button>
            </RX.ScrollView>

        );
    }
}