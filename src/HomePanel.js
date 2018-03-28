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
        backgroundColor:'#8080803b',

    }),
    scrollImage: RX.Styles.createImageStyle({
    margin: 2,
    width: '100%',
    height: 250,
    backgroundColor:''
    
    }),
    homeImageLayout: RX.Styles.createImageStyle({
    height: 220,
    width: '100%',
    padding: 2,
    flex:1,
    alignSelf:'stretch',
    display:'block',
    position:'absolute',
    backgroundColor:'#1d6779a8'
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
roundButton: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#ff0000ab',
    justifyContent: 'CENTER'
    }),
  
homeScrollImageLogo: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    float:'left',
    flexDirection: 'column',
    justifyContent: 'space-between',
}),
image:RX.Styles.createViewStyle({
    height: 25,
    width:'25%',
    marginTop:'20'
}),
IMage:RX.Styles.createViewStyle({
    width:"100%",
    height:201,
   backgroundColor: '#1d6779a8'
}),
Image:RX.Styles.createViewStyle({
    height: 50,
    width:'50%',
    marginTop:'20'
}),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:97,
        height: 72,
        paddingVertical:20,
        marginLeft:3,
        marginTop:-9
    }),
    
        scroll: RX.Styles.createScrollViewStyle({
            alignSelf: 'stretch',
            backgroundColor: '#f5fcff'
        }),
        container: RX.Styles.createViewStyle({
            marginHorizontal: 4,
            marginVertical: 30,
            paddingHorizontal: 8,
            backgroundColor:'#1c191ff2',
           
   
}),
marTop:RX.Styles.createViewStyle({
    marginTop:10,
}),
policy:RX.Styles.createTextStyle({
    fontSize: 18,
    marginBottom: 16,
    backgroundColor:'#1d6779a8',
    color:'White',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 1,
    marginTop:152,
    textAlign:'CENTER',
   
   
}),
 
scrollBoxText: RX.Styles.createTextStyle({
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'Center',
   color:'#1a153b',

}),
ScrollBoxText: RX.Styles.createTextStyle({
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'Center',
   color:'white'
}),
welcome: RX.Styles.createTextStyle({
    fontSize: 40,
    color: 'white',
}),
remo:RX.Styles.createTextStyle({
    width:"100%",
    height:201,
}),
read: RX.Styles.createScrollViewStyle({
    width:'100%'
}),
};
var token
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
    onChangePost(){
        this.props.onNavigateSuper(token)
        console.log(token,"tokenab")
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
        token = this.props.navigatorRoute.token
        console.log("token",token)
        return (
           
            <RX.View style={styles.scrollViewContainer}>
                <RX.View style={styles.scrollImage}>
                {/* <RX.Image
style={styles.remo}
            resizeMode="cover"
            source={'./src/img/Farmer.png'}> */}
                
            <RX.Image source={ './src/img/Logo.svg' } style={ [styles.IMage] }/>
            <RX.Text style={ styles.policy }></RX.Text> 
           
            {/* </RX.Image> */}
            
              <RX.Text style={ styles.policy }>Plan your insurance on this platform and get RS 100 off your first policy</RX.Text> 
                </RX.View>
    
                <div className="row"></div>
                <div className="col-xs-4 col-sm-4 col-md-4"></div>
                <RX.View style={styles.scrollBox}>
                     <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'auto'}}>
                     <RX.View style={{width: 100, height: 100, backgroundColor: 'white', marginTop:20,marginLeft:250}} >
                     
                     <RX.Button  onPress={ this.props.onNavigateSuperCar }><RX.Image
                             style={styles.HomeScrollImageLogo}
                             source={'./src/img/Car.svg'}/>
                        <RX.Text style={styles.scrollBoxText}>Car</RX.Text>
                      </RX.Button>
                     </RX.View>
               
                     <div className="row"></div>
                <div className="col-xs-4 col-sm-4 col-md-4"></div>
                     <RX.View style={styles.scrollBox}>
                     <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                     <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginTop:10,marginLeft:200 }} >
                     <RX.Button  onPress= {()=> this.onChangePost() }>post<RX.Image
                             style={styles.HomeScrollImageLogo}
                             source={'./src/img/Bike.svg'}/>
                        <RX.Text style={styles.scrollBoxText}>Two Wheeler</RX.Text>
                        </RX.Button>
                     </RX.View>
 
                     <div className="row"></div>
                <div className="col-xs-4 col-sm-4 col-md-4"></div>
                     <RX.View style={styles.scrollBox}>
                     <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                     <RX.View style={{width: 100, height: 100, backgroundColor: 'white', marginLeft:200}} >
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
                     <div className="row"></div>
                <div className="col-xs-4 col-sm-4 col-md-4"></div>
                     <RX.View style={styles.ScrollBox}>
                     <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                     <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginTop:20,marginLeft:250}} >
                         <RX.Image
                             style={styles.HomeScrollImageLogo}
                             source={'./src/img/Health.svg'}/>
                        <RX.Text style={styles.scrollBoxText}>Health Insurance</RX.Text>
                     </RX.View>
                     <div className="row"></div>
                <div className="col-xs-4 col-sm-4 col-md-4"></div>
                     <RX.View style={styles.ScrollBox}>
                     <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                     <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginTop:10,marginLeft:200}} >
                     <RX.Image
                             style={styles.HomeScrollImageLogo}
                             source={'./src/img/Travell.svg'}/>
                        <RX.Text style={styles.scrollBoxText}>Travel Insurance</RX.Text>
                     </RX.View>
                     <div className="row"></div>
                <div className="col-xs-4 col-sm-4 col-md-4"></div>
                   <RX.View style={styles.ScrollBox}>
                      <RX.View style={{flex: 1, flexDirection: 'row',   justifyContent: 'space-between'}}>
                      <RX.View style={{width: 100, height: 100, backgroundColor: 'white',marginLeft:200}} >
                          <RX.Image
                              style={styles.HomeScrollImageLogo}
                              source={'./src/img/Add Existing Insurance.svg'}/>
                         <RX.Text style={styles.scrollBoxText}>Add Existing Policy</RX.Text>
                      </RX.View>

                      </RX.View>
                      </RX.View>
                      </RX.View>
                      </RX.View>
                      </RX.View>
                      </RX.View>
                
                
                    <RX.ScrollView style={ styles.container}>
                    <Row className="show-grid hidden-xs">
                        <Col  md={2} style={styling.marTop}>
                            {/*<RX.Text>Test</RX.Text>*/}
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                       <Col  md={2} style={styling.marTop}>
                            {/*<RX.Text>Test1</RX.Text>*/}
                            <RX.Image source={ './src/img/Home.svg' } style={ [styles.image ] } />
                            <RX.Text style={styles.ScrollBoxText}>Home</RX.Text>
                            {/* <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        <Col  md={2} style={styling.marTop}>
                            {/*<RX.Text>Test2</RX.Text>*/}
                            <RX.Button  onPress={ this.props.onNavigateRole }><RX.Image source={ './src/img/MyPolicies.svg' } style={ [styles.image] } />
                            <RX.Text style={styles.ScrollBoxText}>My Policies</RX.Text>
                            {/*<RX.Image source={ './src08/img/Bharti.png' } style={ [styles.image ] } />*/}
                            </RX.Button>
                        </Col>
                        <Col  md={2} style={styling.marTop}>
                            {/*<RX.Text>Test3</RX.Text>*/}
                            <RX.Button  onPress={ this.props.onNavigateOne }>   <RX.Image source={ './src/img/Remainder.svg' } style={ [styles.image] } />
                            <RX.Text style={styles.ScrollBoxText}>Remainder</RX.Text>
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </RX.Button>
                        </Col>
                        <Col  md={2} style={styling.marTop}>
                            {/*<RX.Text>Test3</RX.Text>*/}
                            <RX.Image source={ './src/img/Settings.svg' } style={ [styles.image] } />
                            <RX.Text style={styles.ScrollBoxText}>Settings</RX.Text>
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                       
                        {/* <RX.Button bsStyle="info" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
           <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForth}>
        <RX.Text style={ styles.buttonText }>
        REGISTER
        </RX.Text>
        </RX.Button> */}
                        {/*<Col  md={6} style={styling.marTop}>
                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                try
                            </RX.Button>
                        </Col>*/}
                    </Row>
                  
                </RX.ScrollView>
            
  </RX.View>
 
    );
}
}
