/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import MainPanel from './MainPanel';


import {default as RXVideo} from 'reactxp-video';

import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';

const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        alignSelf: 'stretch'

    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    welcome: RX.Styles.createScrollViewStyle({
        fontSize: 40,
        color: 'white',
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#f5f5f3',
        padding:5
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 30,
        color: '#3b3751',
        textTransform:'capitalize'
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:54,
        marginTop:41
    }),
    quotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169,
        padding:4,
        marginLeft:71
    }),
    quoted: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169,
        padding:4,
        marginLeft:92
    }),
    subQuotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169

    }),
    ncb: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4
    }),
    subNcb: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        alignItems:'left',
        height:41
    }),
    tryHead: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#3e376d',
        textTransform:'capitalize'
    }),
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#cccccc"
    }),
    btn: RX.Styles.createViewStyle({
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row'
    }),
    nextBtn: RX.Styles.createViewStyle({
        marginTop:30,
        marginLeft:62
    }),
    titleText: RX.Styles.createTextStyle({
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
        color: 'black'
    }),
    videoTitleText: RX.Styles.createTextStyle({
        marginBottom: 8
    }),
    progressMargin: RX.Styles.createViewStyle({
        margin: 8
    }),
    video: RX.Styles.createViewStyle({
        height: 176,
        width: 320
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 5,
        backgroundColor: '#2ecc71'
    }),
    buyButton: RX.Styles.createViewStyle({
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
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createTextStyle({
        margin: 8,
        height: 18,
        fontSize: 14,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderWidth:1 ,
        borderRightWidth:0,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderStyle:'solid',
        borderColor:'#ccc'
    }),
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
};

export default class SecondPanel  extends RX.Component {

    _progressTimerToken;

    constructor(props) {
        super(props);
        this._playVideo = this._playVideo.bind(this);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this.state = {
            toggleValue: true,
            progressValue: 0
        };
    }

    componentDidMount() {
        this._startProgressIndicator();
    }

    componentWillUnmount() {
        this._stopProgressIndicator();
    }

    render() {
        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ _styles.container }>
                    <RX.Text style={ _styles.welcome }>
                        New Motor Insurance
                    </RX.Text>

                </RX.View>
                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.flute }>
                        <RX.Text style={ _styles.head }>
                            view and compare quotes
                        </RX.Text>
                    </RX.View>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [_styles.image] } />

                        <RX.Text style={ _styles.sideHead }>
                            Bharathi Axa Life Insurance
                            <div style={_styles.tryHead}>Single Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quotes }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,322*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>



                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/ergo.png' } style={ [_styles.image] } />

                        <RX.Text style={ _styles.sideHead }>
                            HDFC Ergo Life Insurance
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quotes }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,634*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>


                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/reliance.png' } style={ [_styles.image] } />

                        <RX.Text style={ _styles.sideHead }>
                            Reliance Life Insurance
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 23,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,834*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>


                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/oriental.png' } style={ [_styles.image] } />

                        <RX.Text style={ _styles.sideHead }>
                            Oriental Life Insurance
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 28,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,934*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>


                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/reliance.png' } style={ [_styles.image] } />

                        <RX.Text style={ _styles.sideHead }>
                            Reliance Life Insurance
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 23,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,834*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>


            </RX.ScrollView>
        );
    }

    _playVideo() {
        const video = this.refs['video'];
        if (video) {
            video.mute(true);
            video.play();
        }
    }

    _startProgressIndicator() {
        this._progressTimerToken = window.setInterval(() =>{
            const newProgressValue = (this.state.progressValue + 0.02) % 1;
            this.setState({progressValue: newProgressValue});
        }, 1000 / 15);
    }

    _stopProgressIndicator() {
        if (this._progressTimerToken) {
            window.clearInterval(this._progressTimerToken);
            this._progressTimerToken = undefined;
        }
    }

    // Note that we define this as a variable rather than a normal method. Using this
    // method, we prebind the method to this component instance. This prebinding ensures
    // that each time we pass the variable as a prop in the render function, it will
    // not change. We want to avoid unnecessary prop changes because this will trigger
    // extra work within React's virtual DOM diffing mechanism.
    _onChangeToggle(newValue) {
        this.setState({toggleValue: newValue});
    }
}
