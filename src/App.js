/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';

import { Navigator } from 'reactxp-navigation';

import OtpPage from './OtpPage';
import CompareQuotes from './CompareQuotes';
import MainPanel from './MainPanel';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import QuotesSelection from './QuotesSelection'
import Location from './Location'
import VehicleDetails from './VehicleDetails'
import MyPolicy from './MyPolicy'
import InsuranceAddons from './InsuranceAddons'
import PaymentScreen from './PaymentScreen'
import EleventhPanel from './EleventhPanel'
import TravelInsuranceReg from './TravelInsuranceReg'






let NavigationRouteId = {
    OtpPage: "OtpPage",
    CompareQuotes: "CompareQuotes",
    MainPanel:"MainPanel",
    LoginPage:"LoginPage",
    RegisterPage:"RegisterPage",
    QuotesSelection:"QuotesSelection",
    Location:"Location",
    VehicleDetails:"VehicleDetails",
    MyPolicy:"MyPolicy",
    InsuranceAddons:"InsuranceAddons",
    EleventhPanel:"EleventhPanel",
    PaymentScreen:"PaymentScreen",
    TravelInsuranceReg:"TravelInsuranceReg"
};

const styles = {
    // Standard navigator style should be an object. So we have to disable caching here.
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    }, false)
};

export default class App extends RX.Component {
    _navigator;

    constructor(props) {
        super(props);
        this._onNavigatorRef = this._onNavigatorRef.bind(this);
        this._renderScene = this._renderScene.bind(this);
        this._onPressNavigate = this._onPressNavigate.bind(this);
        this._onPressBack = this._onPressBack.bind(this);
        this._onPressForward = this._onPressForward.bind(this);
        this._onPressForth = this._onPressForth.bind(this);
        this._onPressFifth = this._onPressFifth.bind(this);
        this._onPressSixth = this._onPressSixth.bind(this);
        this._onPressSeven = this._onPressSeven.bind(this);
        this._onPressEight = this._onPressEight.bind(this);
        this._onPressNine = this._onPressNine.bind(this);
        this._onPressTen = this._onPressTen.bind(this);
        this._onPressEleven = this._onPressEleven.bind(this);
        this._onPressPayment = this._onPressPayment.bind(this);
        this._onPressTravel = this._onPressTravel.bind(this);
    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.VehicleDetails,
            sceneConfigType: "Fade"
        }]);
    }

    render() {
        return (
            <Navigator
                ref={ this._onNavigatorRef }
                renderScene={ this._renderScene }
                cardStyle={ styles.navCardStyle }
            />
        );
    }

    _onNavigatorRef(navigator) {
        this._navigator = navigator;
    }

    _renderScene(navigatorRoute) {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.OtpPage:
                return <OtpPage onPressNavigate={ this._onPressNavigate }/>;

            case NavigationRouteId.CompareQuotes:
                return <CompareQuotes onNavigateBack={ this._onPressBack }/>;

            case NavigationRouteId.MainPanel:
                return <MainPanel onNavigateForward={ this._onPressForward }/>;

            case NavigationRouteId.LoginPage:
                return <LoginPage onNavigateForth={ this._onPressForth }/>;

            case NavigationRouteId.RegisterPage:
                return <RegisterPage onNavigateFifth={ this._onPressFifth }/>;

            case NavigationRouteId.QuotesSelection:
                return <QuotesSelection onNavigateSixth={ this._onPressSixth }/>;

            case NavigationRouteId.Location:
                return <Location onNavigateSeven={ this._onPressSeven }/>;

            case NavigationRouteId.VehicleDetails:
                return <VehicleDetails onNavigateEight={ this._onPressEight }/>;

            case NavigationRouteId.MyPolicy:
                return <MyPolicy onNavigateNine={ this._onPressNine }/>;

            case NavigationRouteId.InsuranceAddons:
                return <InsuranceAddons onNavigateTen={ this._onPressTen }/>;

            case NavigationRouteId.EleventhPanel:
                return <EleventhPanel onNavigateEleven={ this._onPressEleven }/>;

            case NavigationRouteId.PaymentScreen:
                return <PaymentScreen onNavigateTwelve={ this._onPressPayment }/>;

            case NavigationRouteId.TravelInsuranceReg:
                return <TravelInsuranceReg onNavigateThirteen={ this._onPressTravel }/>;
        }

        return null;
    }

    _onPressNavigate() {
        this._navigator.push({
            routeId: NavigationRouteId.CompareQuotes,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressForward() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.LoginPage,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressForth() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.RegisterPage,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressFifth() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.QuotesSelection,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressSixth() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.Location,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressSeven() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressEight() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.MyPolicy,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressNine() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTen() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.EleventhPanel,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressEleven() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.PaymentScreen,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressPayment() {
        this._navigator.push({
            routeId: NavigationRouteId.TravelInsuranceReg,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressTravel() {
        this._navigator.push({
            routeId: NavigationRouteId.TravelInsuranceReg,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressBack() {
        this._navigator.push({
            routeId: NavigationRouteId.MainPanel,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
        }
};
