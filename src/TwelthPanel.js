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

    /*getInitialState() {
        return {
            value: '',
        };
    }*/
    render() {
        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ styling.container }>
                    <RX.Text style={styling.welcome }>
                        New Car Insurance
                    </RX.Text>
                </RX.View>
                <Row className="show-grid">
                    <Col md={8} mdOffset={2} >

                    <form>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>Manufacturer</ControlLabel>
                        <FormControl type="email" placeholder="Email" />

                    </FormGroup>
                </form>
                    </Col>
                    <Col md={2} ></Col>
                </Row>
                <RX.Button style={ Button } onPress={ this.props.onNavigateTen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>
            </RX.ScrollView>

        );
    }
}