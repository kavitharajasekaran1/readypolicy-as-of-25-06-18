/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import ToggleSwitch from './ToggleSwitch';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
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
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'

    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        height: 10,
        width: 20,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 40,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:2                //Step 3
    },
    email: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center',
        alignSelf: 'center',
    }),
    fetch: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Red',
        justifyContent: 'center',
        alignSelf: 'center',
    }),
    new: RX.Styles.createTextStyle({
        fontSize: 28,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    }),
    Email: RX.Styles.createTextStyle({
        fontSize: 25,
        color: 'Orange',
        textAlign:'center',
    }),
    editTodoItem: RX.Styles.createViewStyle({
        margin: 15,
        height: 47,
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 16,
        borderWidth:'1',
        borderColor:'#cccccc ',
        borderStyle:'solid',
        marginTop: 8
    }),
COntainer: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
       }),
       buttonContainer: RX.Styles.createViewStyle({
         margin: 20
       }),
       BUttonStyle: RX.Styles.createButtonStyle({
        width: 30,
        height: 30,
        backgroundColor: 'black',
    }),

    viewStyle: RX.Styles.createViewStyle ({
        width: 100, 
        height: 100, 
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }),


    
};

export default class VehicleDetails extends RX.Component{
    constructor(props) {
        super(props);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this.state = {
            toggleValue: true,
            progressValue: 0
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
            <RX.ScrollView style={ styles.scroll }>
            <RX.View style={ styles.container }>
                <RX.Text style={ styles.welcome }>
                    New Car Insurance
                </RX.Text>
            </RX.View>
            <RX.View onPress={() => alert('Login Successful')} style={ styles.viewStyle}>
      <RX.Button onPress={ this._childClick } style={styles.BUttonStyle}>
          {/* <RX.Text style={ styles.buttonText }>
          Go Back
      </RX.Text> */}
       </RX.Button>
   </RX.View>
            <RX.View style={{
        flex: 1,
        flexDirection: 'ROW',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <RX.View style={{width: 103, height: 39, marginTop: 36,   backgroundColor: 'Orange'}} >
        <RX.Text style={ styles.new }>
                        New
                    </RX.Text>
        </RX.View>
        
        <RX.View style={{width: 103, height: 39, marginTop: 36, borderlayout: 'black',  backgroundColor: 'White'}} >
        <RX.Text style={ styles.Email }>
                        Renew
                    </RX.Text>
        </RX.View>
        </RX.View>
        <RX.View style={ styles.Container }>
        <RX.Text style={ styles.fetch }>
                        Vehicle Details
                    </RX.Text>
        <RX.View style={ styles.Container }>
        <RX.Text style={ styles.email }>
                        Manufacturer
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Enter Manufacturer' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.email }>
                        Model
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Enter Model' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.email }>
                        Varient
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Enter Varient' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.email }>
                        Registration Number
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Enter Registration Number' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.email }>
                        Registration Year
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'DD/MM/YYYY' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    </RX.View>
                    </RX.View>
                    <ToggleSwitch
                        value={ this.state.toggleValue }
                        onChange={ this._onChangeToggle }
                    />                   
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateEight }>
                        <RX.Text style={ styles.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>
                    </RX.ScrollView>

)
}
_childClick = () => {
    alert('Child');
    e.stopPropagation();
}
_onPressButton() {
    console.log("failure")
    Alert.alert('You tapped the button!')
  }
_onChangeToggle(newValue) {
    this.setState({toggleValue: newValue});
}
}
