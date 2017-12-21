/*
* This file demonstrates a basic ReactXP app.
*/

import React from 'react';
import RX from 'reactxp';
/*const {
Welcome
} = TodoStyles;*/
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
    Container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(213,222,219,0)',
        padding:5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
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
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createViewStyle({
        margin: 15,
        height: 47,
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 16,
        borderWidth: 2,
        bordercolor: '#cccccc'
    }),
    email: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    password: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
    }),
    account: RX.Styles.createTextStyle({
        fontSize: 20,
        color: 'red',
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f5f5f3',
        padding: 11
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 30,
        color: 'red'
    }),
    register: RX.Styles.createImageStyle({
        height: 80,
        width: 110,
        justifyContent: 'center'
    })
};

export default class FourthPanel extends RX.Component{
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
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    <RX.Text style={ styles.welcome }>
                        Profile
                    </RX.Text>
                </RX.View>
                <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Please Create An Account
                        </RX.Text>
                    </RX.View>
                </RX.View>
                <RX.View style={ styles.Container }>
                    <RX.Image source={ './src/img/register.gif' } style={ [styles.register] } />
                    <RX.Text style={ styles.email }>
                        Full Name
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Name' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.email }>
                        Phone Number
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ '+91' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.email }>
                        Date Of Birth
                    </RX.Text>
                    <RX.TextInput
                        mode="date"
                        placeholder="DD/MM/YYYY"
                        format="DD-MM-YYYY"
                        style={styles.editTodoItem}
                        showIcon={false}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(PolicyissueDate) => {
                            this.setState({PolicyissueDate: PolicyissueDate})
                        }}/>

                    <RX.Text style={ styles.email }>
                        Email*
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Email' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Text style={ styles.password }>
                        Password*
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.password }
                        placeholder={ 'Password' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                        secureTextEntry= {true}
                    />
                    <RX.Text style={ styles.email }>
                        Location
                    </RX.Text>
                    <RX.TextInput
                        style={ styles.editTodoItem }
                        value={ this.state.email }
                        placeholder={ 'Bangalore, India' }
                        autoFocus={ true }
                        textAlign={ 'left' }
                    />
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateFifth }>
                        <RX.Text style={ styles.buttonText }>
                            REGISTER
                        </RX.Text>
                    </RX.Button>
                </RX.View>
            </RX.ScrollView>

        );
    }

    _onChangeToggle(newValue) {
        this.setState({toggleValue: newValue});
    }
}
