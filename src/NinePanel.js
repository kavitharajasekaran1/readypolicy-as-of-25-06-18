/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
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
                        My Policies
                    </RX.Text>

                </RX.View>
                <RX.View style={ styling.sort }>
                    <RX.View style={ styling.sorBor }>
                        <RX.View style={ styling.width }>
                        <RX.Text style={styling.sortText }>
                        Sort By
                    </RX.Text>
                        </RX.View>

                    <RX.Text style={styling.sortTexted }>
                            All
                        </RX.Text>
                    </RX.View>

                </RX.View>

                <RX.View style={ styling.pageAlign}>
                    <RX.View style={ styling.flute }>
                        <RX.Text style={ styling.head }>
                            Sort
                        </RX.Text>
                    </RX.View>
                    <RX.View style={ [styling.client] }>
                        <RX.View>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                        <div style={styling.clientHead}>Bajaj Allianz</div>
                            <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                        </RX.View>
                        <RX.Text style={ styling.sideHead }>
                            DL4CCB1111
                            <div style={styling.tryHead}>Honda CB Hornet</div>
                            <div style={styling.tryHead}>IDV: 1,25,300</div>
                        </RX.Text>
                        <RX.Text style={ styling.quotes }>
                            Expired on 12/04/2017
                        </RX.Text>
                        {/*<RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>*/}
                        <RX.View style={styling.nextBtn}>
                            <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ styling.buybuttonText }>
                                    Rs.1,322*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>



                <RX.View style={ styling.pageAlign}>
                    {/*<RX.View style={ styling.flute }>
                        <RX.Text style={ styling.head }>
                            Sort
                        </RX.Text>
                    </RX.View>*/}
                    <RX.View style={ [styling.expired] }>
                        <RX.View>
                            <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                            <div style={styling.clientHead}>Bajaj Allianz</div>
                            <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                        </RX.View>
                        <RX.Text style={ styling.sideHead }>
                            DL4CCB1111
                            <div style={styling.tryHead}>Honda CB Hornet</div>
                            <div style={styling.tryHead}>IDV: 1,25,300</div>
                        </RX.Text>
                        <RX.Text style={ styling.valid }>
                            Expires on 12/04/2017
                        </RX.Text>
                        {/*<RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>*/}
                        <RX.View style={styling.nextBtn}>
                            <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ styling.buybuttonText }>
                                    Rs.1,322*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>
                <RX.View style={ styling.container }>
                    <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateNine }>
                        <RX.Text style={ styling.buttonText }>
                            Next
                        </RX.Text>
                    </RX.Button>
                </RX.View>
            </RX.ScrollView>

        );
    }
}