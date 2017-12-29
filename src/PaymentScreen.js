/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Button from 'react-bootstrap/lib/Button';


/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#c4c3c7'
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    Container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#c4c3c7',
        padding:5
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
    }),
    Welcome: RX.Styles.createTextStyle({
        fontSize: 38,
        color: 'Black',
        alignItems: 'center'
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:54,
        marginTop:41
    }),
    
    SideHead: RX.Styles.createScrollViewStyle({
        fontSize: 20,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:389,
        marginTop:51
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
        fontSize: 18,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"white",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4,
        marginLeft:62
    }),
    Ncb: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"white",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4,
        marginLeft:592
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
    Client: RX.Styles.createViewStyle({
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
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
    }),
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white',
        justifyContent: 'center'
    }),
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'WHITE',
        padding:13
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3b3751',
        textTransform:'capitalize',
        marginLeft: 60
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center',
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 20

    }),
    Button: RX.Styles.createViewStyle({
        margin: 16,
        style: 'rounded square',
        backgroundColor: '#2ecc71'
    }),
    radiobutton: RX.Styles.createViewStyle({
        borderRadius: 10,

    }),
    buttoninside: RX.Styles.createViewStyle({
        borderRadius: 10,
        backgroundColor: '#cdcdcd'

    }),

};




export default class PaymentScreen extends RX.Component{
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
                <RX.View style={ styling.container }>
                    <RX.Text style={styling.welcome }>
                        Payments
                    </RX.Text>

                    </RX.View>
                    <RX.View style={ styles.client }>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image] } />

                        <RX.Text style={ styles.sideHead }>
                            Bharathi Axa Life Insurance
                            <div style={styles.tryHead}>IDV: Rs.1,25,300</div>
                        </RX.Text>
                        <RX.Text style={ styles.ncb }>
                            Rs. 21,900
                               </RX.Text>
                      </RX.View>
                      <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                        Select Payment Method
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Credit/Debit/AtmCard
                            </RX.Text>
                        <RX.Button style={ styles.radiobutton }>
                        <RX.View style={ styles.buttoninside }>

                            </RX.View>
                
                               </RX.Button>
                               
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                           Internet Banking
                        
                        <RX.Text style={ styles.Ncb }>
                            Rs.560
                               </RX.Text>
                               </RX.Text>
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                       UPI
                        
                        <RX.Text style={ styles.Ncb }>
                            Rs.560
                               </RX.Text>
                               </RX.Text>
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Wallets
                        <RX.Text style={ styles.Ncb }>
                            Rs.560
                               </RX.Text>
                               </RX.Text>
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.RadioForm
  formHorizontal={true}
  animation={true}
>
  {/* To create radio buttons, loop through your array of options */}
  {radio_props.map((obj, i) => {
    <RX.RadioButton labelHorizontal={true}  >
      {/*  You can set RadioButtonLabel before RadioButtonInput */}
      <RX.RadioButtonInput
        obj={obj}
        index={i}
        isSelected={this.state.value3Index === i}
        onPress={onPress}
        borderWidth={1}
        buttonInnerColor={'#e74c3c'}
        buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
        buttonSize={40}
        buttonOuterSize={80}
        buttonStyle={{}}
        buttonWrapStyle={{marginLeft: 10}}
      />
      <RX.RadioButtonLabel
        obj={obj}
        index={i}
        labelHorizontal={true}
        onPress={onPress}
        labelStyle={{fontSize: 20, color: '#2ecc71'}}
        labelWrapStyle={{}}
      />
      </RX.RadioButton>
  })}
  
</RX.RadioForm>
                    <RX.Button style={ Button } onPress={ this.props.onNavigateEleven }>
                        <RX.Text style={ styles.buttonText }>
                            Please select a payment method to proceed
                        </RX.Text>
                    </RX.Button>
                       
            </RX.ScrollView>
            </RX.ScrollView>

        );
    }
}