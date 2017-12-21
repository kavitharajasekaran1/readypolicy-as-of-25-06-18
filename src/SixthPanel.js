/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientNorm: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientName: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientText: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'10'
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientTexted: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'10',
        marginTop:'39'
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientNcb: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'10',
        marginTop:42
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    subText: RX.Styles.createViewStyle({
        color:'#fa774d',
        fontSize:'10',
        marginTop:42

        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    subPer: RX.Styles.createViewStyle({
        color:'#546e7a',
        fontSize:'10',
        marginTop:42

        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    imageAlign: RX.Styles.createViewStyle({
        marginLeft:100
    }),
    imageAlignement: RX.Styles.createViewStyle({
        marginLeft:100,
        marginTop:168
    }),
    imageAligned: RX.Styles.createViewStyle({
        marginLeft:105
    }),
    /* sideHead: RX.Styles.createScrollViewStyle({
         fontSize: 18,
         color: '#3e376d',
         textTransform:'capitalize',
         marginLeft:54,
         marginTop:41
     }),
     tryHead: RX.Styles.createScrollViewStyle({
         fontSize: 15,
         color: '#3e376d',
         textTransform:'capitalize'
     }),*/
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    })
};

export default class ThirdPanel extends RX.Component{
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
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    <RX.Text style={ styles.welcome }>
                        Compare Quotes
                    </RX.Text>

                </RX.View>





                <RX.View style={ styles.client }>
                    <RX.View style={[styles.imageAlignement]}>
                        {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        {/*<RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>*/}
                        <RX.Text style={[styles.clientTexted]}>Insured Declared Value</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>NCB</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Cashless Garage</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Advance Cash</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>TP Permium</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Zero Depreciation</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Already Included Addons</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Own Damage</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Owner / Driver PA Cover</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Unnamed Passenger Cover</RX.Text>

                    </RX.View>

                    <RX.View style={[styles.imageAlign]}>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                        <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>10%</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>2 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>

                    <RX.View style={[styles.imageAlign]}>

                        <RX.Image source={ './src/img/ergo.png' } style={ [styles.image] } />
                        <RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>15%</RX.Text>
                        <RX.Text style={[styles.subPer]}>3 Garages Near You</RX.Text>
                        <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                        <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                        <RX.Text style={[styles.subPer]}>1 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>
                    <RX.View style={[styles.imageAlign]}>

                        <RX.Image source={ './src/img/oriental.png' } style={ [styles.image] } />
                        <RX.Text style={[styles.clientText]}>Oriental Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,10,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>20%</RX.Text>
                        <RX.Text style={[styles.subPer]}>2 Garages Near You</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>3.60,000</RX.Text>
                        <RX.Text style={[styles.subPer]}>3 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>
                    <RX.View style={[styles.imageAligned]}>

                        <RX.Image source={ './src/img/united.png' } style={ [styles.image] } />
                        <RX.Text style={[styles.clientText]}>United Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,08,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>25%</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>3,55,789</RX.Text>
                        <RX.Text style={[styles.subPer]}>1 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>


                </RX.View>
                <RX.View style={ styles.clientNorm }>
                </RX.View>

                <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateSixth }>
                    <RX.Text style={ styles.buttonText }>
                        Next
                    </RX.Text>
                </RX.Button>

                {/*<RX.View style={ styles.container }>
                    <RX.Text style={ styles.welcome }>
                        Page 3
                    </RX.Text>
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForward }>
                        <RX.Text style={ styles.buttonText }>
                            Next
                        </RX.Text>
                    </RX.Button>
                </RX.View>*/}
            </RX.ScrollView>

        );
    }
}