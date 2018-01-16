/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';

import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scrollContainer:  RX.Styles.createViewStyle({
        flex: 1,
        backgroundColor: 'emerald',
    }),
    scrollViewContainer: RX.Styles.createViewStyle({
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        backgroundColor:'#8080804d',

    }),
    scrollImage: RX.Styles.createImageStyle({
    margin: 2,
    width: '100%',
    height: 200
    }),
    homeImageLayout: RX.Styles.createImageStyle({
    height: 210,
    width: '100%',
    padding: 2
}),
scrollBox: RX.Styles.createImageStyle({
    margin: 10,
    width: '100%',
    flexDirection:'row'
}),
ScrollBox: RX.Styles.createImageStyle({
    margin: 10,
    width: '100%',
    flexDirection:'row'
}),
homeScrollImageLogo: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    float:'left',
    flexDirection: 'column',
    justifyContent: 'space-between',
}),
image:RX.Styles.createViewStyle({
    height: 100,
    width:'100%',
    marginTop:'20'
}),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:97,
        height: 72,
        paddingVertical:20,
        marginLeft:3,
        marginTop:-9
    

   
}),
policy:RX.Styles.createTextStyle({
    fontSize: 18,
    marginBottom: 16,
    color:'White',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 1,
    marginTop:138,
    textAlign:'CENTER',
   
}), 
scrollBoxText: RX.Styles.createTextStyle({
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'Center',
}),

};

export default class RegisterPage extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todofield: '',
            secureTextEntry: true
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
           
            <RX.View style={styles.scrollViewContainer}>
                <RX.View style={styles.scrollImage}>
                <RX.Image
            style={styles.homeImageLayout}
            resizeMode="cover"
            source={'./src/img/Farmer.png'}>
            <RX.Image source={ './src/img/Logo.svg' } style={ [styles.image] }>
            </RX.Image>
            </RX.Image>

              <RX.Text style={ styles.policy }>Plan your insurance on this platform and get RS 100 off your first policy</RX.Text> 
                </RX.View>
              
                    <RX.View style={styles.scrollBox}>
                    <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'auto'}}>
                    <RX.View style={{width: 100, height: 100, backgroundColor: 'white', marginTop:20}} >
                    <RX.Image
                            style={styles.HomeScrollImageLogo}
                            source={'./src/img/Car.svg'}/>
                       <RX.Text style={styles.scrollBoxText}>Car</RX.Text>
                    </RX.View>
              
              
                    <RX.View style={styles.scrollBox}>
                    <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                    <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginTop:10 }} >
                    <RX.Image
                            style={styles.HomeScrollImageLogo}
                            source={'./src/img/Bike.svg'}/>
                       <RX.Text style={styles.scrollBoxText}>Two Wheeler</RX.Text>
                    </RX.View>

               
                    <RX.View style={styles.scrollBox}>
                    <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                    <RX.View style={{width: 100, height: 100, backgroundColor: 'white',}} >
                        <RX.Image
                            style={styles.HomeScrollImageLogo}
                            source={'./src/img/Term.svg'}/>
                       <RX.Text style={styles.scrollBoxText}>Term Insurance</RX.Text>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    <RX.View style={styles.ScrollBox}>
                    <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                    <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginTop:20}} >
                        <RX.Image
                            style={styles.HomeScrollImageLogo}
                            source={'./src/img/Health.svg'}/>
                       <RX.Text style={styles.scrollBoxText}>Health Insurance</RX.Text>
                    </RX.View>
                   
                    <RX.View style={styles.ScrollBox}>
                    <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                    <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginTop:10}} >
                    <RX.Image
                            style={styles.HomeScrollImageLogo}
                            source={'./src/img/Travell.svg'}/>
                       <RX.Text style={styles.scrollBoxText}>Travel Insurance</RX.Text>
                    </RX.View>
                   
                    <RX.View style={styles.ScrollBox}>
                    <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                    <RX.View style={{width: 100, height: 100, backgroundColor: 'white',}} >
                        <RX.Image
                            style={styles.HomeScrollImageLogo}
                            source={'./src/img/Add Existing Insurance.svg'}/>
                       <RX.Text style={styles.ScrollBoxText}>Add Existing Policy</RX.Text>
                    </RX.View>
                    
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>
                    </RX.View>

                
  </RX.View>
    );
}
}