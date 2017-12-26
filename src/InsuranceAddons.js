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
                        New Car Insurance
                    </RX.Text>
                </RX.View>
                <RX.View style={ styling.flute }>
                    <RX.Text style={ styling.head }>
                        Addons and Accessories
                    </RX.Text>
                </RX.View>
                <Grid>
                    <Row className="show-grid" style={styling.contain}>
                        <Col md={10} mdOffset={2} className="hidden-xs" >
                            <code style={styling.assitance}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Zero Deprication</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Engine Protection Cover</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>NCB Protactor</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Key and Lock Replacements</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Consumables</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>External Accessories-Electrical</Checkbox></code>
                        </Col>
                        <Col xs={10}  xsOffset={2}  className="hidden-lg">
                            <code style={styling.assitanceMob}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Zero Deprication</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Engine Protection Cover</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>NCB Protactor</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Key and Lock Replacements</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Consumables</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>External Accessories-Electrical</Checkbox></code>
                        </Col>

                    {/*<Col xs={10} md={10}><code></code></Col>*/}
                    </Row>
                </Grid>
                <RX.View style={ styling.flute }>
                    <RX.Text style={ styling.head }>
                        Additional Covers
                    </RX.Text>
                </RX.View>
                <Grid>
                    <Row className="show-grid" style={styling.contain}>
                        <Col md={10} mdOffset={2} className="hidden-xs" >
                            <code style={styling.assitance}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Zero Deprication</Checkbox></code>
                        </Col>
                        <Col xs={10}  xsOffset={2}  className="hidden-lg">
                            <code style={styling.assitanceMob}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Zero Deprication</Checkbox></code>
                        </Col>

                        {/*<Col xs={10} md={10}><code></code></Col>*/}
                    </Row>
                </Grid>


                <Button bsStyle="danger" onClick={ this.props.onNavigateTen }>Next</Button>








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