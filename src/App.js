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
import VehicleDcar from './VehicleDcar'
import MyPolicy from './MyPolicy'
import InsuranceAddons from './InsuranceAddons'
import InsuranceFourWheeler from './InsauranceFourWheeler'
import EleventhPanel from './EleventhPanel'
import TravelInsuranceReg from './TravelInsuranceReg'
import QuoteDetails from './QuoteDetails'
import PaymentScreen from './PaymentScreen'
import NewTermInsurance from './NewTermInsurance'
import HomePanel from './HomePanel'
import Vehicleregister from './Vehicleregister'
import Gproposal from './Gproposal'
import Quotefour from './Quotefour'





let NavigationRouteId = {
    OtpPage: "OtpPage",
    CompareQuotes: "CompareQuotes",
    MainPanel:"MainPanel",
    LoginPage:"LoginPage",
    RegisterPage:"RegisterPage",
    QuotesSelection:"QuotesSelection",
    Location:"Location",
    VehicleDetails:"VehicleDetails",
    VehicleDcar:"VehicleDcar",
    MyPolicy:"MyPolicy",
    InsuranceAddons:"InsuranceAddons",
    InsuranceFourWheeler:"InsuranceFourWheeler",
    EleventhPanel:"EleventhPanel",
    PaymentScreen:"PaymentScreen",
    QuoteDetails:"QuoteDetails",
    TravelInsuranceReg:"TravelInsuranceReg",
    NewTermInsurance:"NewTermInsurance",
    HomePanel:"HomePanel",
    Vehicleregister:"Vehicleregister",
    Gproposal:"Gproposal",
    Quotefour:"Quotefour"
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
        this._onPressCompare = this._onPressCompare.bind(this);
        this._onPressForward = this._onPressForward.bind(this);
        this._onPressForth = this._onPressForth.bind(this);
        this._onPressFifth = this._onPressFifth.bind(this);
        this._onPressSixth = this._onPressSixth.bind(this);
        this._onPressSeven = this._onPressSeven.bind(this);
        this._onPressEight = this._onPressEight.bind(this);
        this._onPressNine = this._onPressNine.bind(this);
        this._onPressTen = this._onPressTen.bind(this);
        this._onPressTens = this._onPressTens.bind(this);
        this._onPressEleven = this._onPressEleven.bind(this);
        this._onPressPayment = this._onPressPayment.bind(this);
        this._onPressTravel = this._onPressTravel.bind(this);
        this._onPressNewTermInsurance = this._onPressNewTermInsurance.bind(this);
        this._onPressHome = this._onPressHome.bind(this);
        this._onPressHome1 = this._onPressHome1.bind(this);
        this._onPressfont = this._onPressfont.bind(this);
        this._onPressDetail = this._onPressDetail.bind(this);
        this._onPressproposal = this._onPressproposal.bind(this);
        this._onPressSuper = this._onPressSuper.bind(this);
        this._onPressVehicledcar = this._onPressVehicledcar.bind(this);
        this._onPressSelect  = this._onPressSelect .bind(this);

    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.HomePanel,
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
        console.log(navigator,"navigator");

        this._navigator = navigator;
    }
    _renderScene(navigatorRoute) {
        console.log(navigatorRoute,"navigatorRoute");
        var user ={name:"test"};
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.OtpPage:
                return <OtpPage onPressNavigate={ this._onPressNavigate }/>;

            case NavigationRouteId.CompareQuotes:
                return <CompareQuotes onNavigateCompare={ this._onPressCompare } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.MainPanel:
                return <MainPanel onNavigateForward={ this._onPressForward }/>;

            case NavigationRouteId.LoginPage:
                return <LoginPage onNavigateForth={ this._onPressForth }/>;

            case NavigationRouteId.RegisterPage:
                return <RegisterPage onNavigateFifth={ this._onPressFifth }/>;

            case NavigationRouteId.QuoteDetails:
                return <QuoteDetails onNavigateDetail={ this._onPressDetail } navigatorRoute={navigatorRoute}/>;

                case NavigationRouteId.QuotesSelection:
                return <QuotesSelection onNavigateSixth={ this._onPressSixth } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.Location:
                return <Location onNavigateSeven={ this._onPressSeven }/>;

            case NavigationRouteId.VehicleDetails:
                return <VehicleDetails onNavigateEight={ this._onPressEight } navigatorRoute={navigatorRoute}/>;
                return <VehicleDetails onNavigateSuper={ this._onPressSuper  } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.VehicleDcar:
                return <VehicleDcar onNavigateSelect={ this._onPressSelect } navigatorRoute={navigatorRoute}/>;

                case NavigationRouteId.Quotefour:
                return <Quotefour onNavigatePush={ this._onPressSelect12345 } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.MyPolicy:
                return <MyPolicy onNavigateNine={ this._onPressNine }  navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.InsuranceAddons:
                return <InsuranceAddons onNavigateTen={ this._onPressTen } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.InsuranceFourWheeler:
                return <InsuranceFourWheeler onNavigateVehicledcar={ this._onPressVehicledcar } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.EleventhPanel:
                return <EleventhPanel onNavigateEleven={ this._onPressEleven }/>;

            case NavigationRouteId.PaymentScreen:
                return <PaymentScreen onNavigatePayment={ this._onPressPayment }/>;


            case NavigationRouteId.TravelInsuranceReg:
                return <TravelInsuranceReg onNavigateThirteen={ this._onPressTravel }/>;

            case NavigationRouteId.NewTermInsurance:
                return <NewTermInsurance onNavigateNewTermInsurance={ this._onPressNewTermInsurance }/>;

            case NavigationRouteId.HomePanel:
              //  return <HomePanel onNavigateSuper={ this._onPressHome}/>;   
                return <HomePanel onNavigateSuperCar = {this._onPressHome1}/>;
             case NavigationRouteId.Vehicleregister:
                return <Vehicleregister onNavigatefont={ this._onPressfont}/>; 

                case NavigationRouteId.Gproposal:
                return <Gproposal onNavigateproposal={ this._onPressproposal} navigatorRoute={navigatorRoute}/>;

        }

        return null;
    }

    _onPressNavigate() {
        this._navigator.push({
            routeId: NavigationRouteId.RegisterPage,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressproposal(res,quoteid,premium) {
        console.log("quoteid",quoteid)
        console.log("premium",premium)
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            quoteid:quoteid,
            premium:premium,
            res:res,
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
            routeId: NavigationRouteId.OtpPage,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressSuper() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressfont() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressFifth() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.HomePanel,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressSixth(liability,resJson,message,quoteid,premium) {
        console.log("liablity2222222",liability)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.CompareQuotes,
            sceneConfigType: "FloatFromRight",
            liability:liability,
            resJson:resJson,
            quoteid:quoteid,
            premium:premium,
            message:message,
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
    _onPressDetail(quoteid,premium) {
       
        console.log("quoteid",quoteid)
        console.log("premium",premium)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDetails,
            sceneConfigType: "FloatFromRight",
            quoteid:quoteid,
            premium:premium,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressEight(res,quoteid,mypremium) {
        var res=res;
        console.log("quoteid",quoteid)
        console.log("premium",mypremium)
        this._navigator.push({
            routeId: NavigationRouteId.Quotefour,
            res:res,
            quoteid:quoteid,
            mypremium:mypremium,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }

        });
    }
    _onPressNine(res) {
        console.log(res,"res");
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressVehicledcar(resJson,liability,message,quoteid,premium) {
        console.log(resJson,"res");
        console.log(quoteid,"quoteiid")
        console.log(premium,"premium")
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDcar,
            sceneConfigType: "FloatFromRight",
            quoteid:quoteid,
            premium:premium,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTen(resJson,liability,message,quoteid,premium) {
        console.log("neenenne",resJson)
        console.log("liablity",liability)
        console.log("quoteid",quoteid)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.QuotesSelection,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            message:message,
            quoteid:quoteid,
            premium:premium,
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

    _onPressTens(resJson,liability,message,quoteid,premium) {
        console.log("neenenne",resJson)
        console.log("liablity",liability)
        console.log("quoteid",quoteid)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.QuotesSelection,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            message:message,
            quoteid:quoteid,
            premium:premium,
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
    _onPressSelect (quoteid,premium) {
       // console.log("res",res)
        this._navigator.push({
            routeId: NavigationRouteId.Quotefour,
            sceneConfigType: "FloatFromRight",
           // res:res,
            premium:premium,
            quoteid:quoteid,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressTravel() {
        this._navigator.push({
            routeId: NavigationRouteId.NewTermInsurance,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    
    _onPressNewTermInsurance() {
        this._navigator.push({
            routeId: NavigationRouteId.PaymentScreen,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressHome() {
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true  
    }
});
    }

    _onPressHome1() {
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceFourWheeler,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true  
    }
});
    }

    _onPressCompare(liability,resJson,message,quoteid,premium) {
        console.log("liablity",liability)
        console.log(resJson,"resJson")
            this._navigator.push({
            routeId: NavigationRouteId.QuoteDetails,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            quoteid:quoteid,
            premium:premium,
            message:message,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }


    _onPressQuoteDetails(resJson,liability) {
        console.log("idvvvvv",resJson)
        this._navigator.push({
            routeId: NavigationRouteId.QuoteDetails,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
};
