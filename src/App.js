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
import CarSelection from './CarSelection'
import CompareCar from './CompareCar'
import CarDetails from './CarDetails'
import CarGproposal from './CarGproposal'
import Addons from './Addons'
import Remainders from './Remainders'








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
    Quotefour:"Quotefour",
    CarSelection: "CarSelection",
    CompareCar:" CompareCar",
    CarDetails:"CarDetails",
    CarGproposal:"CarGproposal",
    Addons:"Addons",
    Remainders:"Remainders"
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
        this._onPressTwo = this._onPressTwo.bind(this);
        this._onPressPush = this._onPressPush.bind(this);
        this._onPressTwenty = this._onPressTwenty.bind(this);
        this._onPressThirty = this._onPressThirty.bind(this);
        this._onPressFourty = this._onPressFourty.bind(this);
        this._onPressFifty = this._onPressFifty.bind(this);
        this._onPressNinety = this._onPressNinety.bind(this);
        this._onPressRole = this._onPressRole.bind(this);
        this._onPressOne = this._onPressOne.bind(this);

    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.LoginPage,
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
                return <OtpPage onPressNavigate={ this._onPressNavigate } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.CompareQuotes:
                return <CompareQuotes onNavigateCompare={ this._onPressCompare }  navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.MainPanel:
                return <MainPanel onNavigateForward={ this._onPressForward }/>;

            case NavigationRouteId.LoginPage:
                return <LoginPage onNavigateForth={ this._onPressForth } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.RegisterPage:
                return <RegisterPage onNavigateFifth={ this._onPressFifth }/>;

                case NavigationRouteId.Remainders:
                return <Remainders onNavigateOne={ this._onPressOne }  onPressNavigate={ this._onPressNavigate } navigatorRoute={navigatorRoute}/>;
    

            case NavigationRouteId.QuoteDetails:
                return <QuoteDetails onNavigateDetail={ this._onPressDetail } onNavigateNinety={ this._onPressNinety }  navigatorRoute={navigatorRoute}/>;

                case NavigationRouteId.QuotesSelection:
                return <QuotesSelection onNavigateSixth={ this._onPressSixth } onNavigateTen={ this._onPressTen }  navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.Location:
                return <Location onNavigateSeven={ this._onPressSeven }/>;

            case NavigationRouteId.VehicleDetails:
                return <VehicleDetails onNavigateEight={ this._onPressEight } onNavigateCompare={ this._onPressCompare }onNavigateSixth={ this._onPressSixth }  navigatorRoute={navigatorRoute}/>;


            case NavigationRouteId.VehicleDcar:
                return <VehicleDcar onNavigateFifty={ this._onPressFifty } navigatorRoute={navigatorRoute}/>;
            case NavigationRouteId.CarGproposal:
                return <CarGproposal onNavigateFifty={ this._onPressFifty } navigatorRoute={navigatorRoute}/>;
                case NavigationRouteId.Quotefour:
                return <Quotefour onNavigatePush={ this._onPressPush } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.MyPolicy:
                return <MyPolicy onNavigateRole={ this._onPressRole } onPressNavigate={ this._onPressNavigate } navigatorRoute={navigatorRoute}/>;
            
                case NavigationRouteId.CarSelection:
                return <CarSelection onNavigateThirty={ this._onPressThirty }  navigatorRoute={navigatorRoute}/>;

                case NavigationRouteId.CompareCar:
                return <CompareCar onNavigateFourty={ this._onPressFourty }  navigatorRoute={navigatorRoute}/>;

                case NavigationRouteId.CarDetails:
                return <CarDetails onNavigateTwo={ this._onPressTwo }  navigatorRoute={navigatorRoute}/>;

                 case NavigationRouteId.Addons:
                return <Addons onNavigateNinety={ this._onPressNinety } onNavigateSuper={ this._onPressHome} navigatorRoute={navigatorRoute}/>;

                case NavigationRouteId.InsuranceAddons:
                return <InsuranceAddons onNavigateTen={ this._onPressTen } onPressNavigate={ this._onPressNavigate } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.InsuranceFourWheeler:
                return <InsuranceFourWheeler onNavigateTwenty={ this._onPressTwenty } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.EleventhPanel:
                return <EleventhPanel onNavigateEleven={ this._onPressEleven } navigatorRoute={navigatorRoute}/>;

            case NavigationRouteId.PaymentScreen:
                return <PaymentScreen onNavigatePayment={ this._onPressPayment } navigatorRoute={navigatorRoute}/>;


            case NavigationRouteId.TravelInsuranceReg:
                return <TravelInsuranceReg onNavigateThirteen={ this._onPressTravel }/>;

            case NavigationRouteId.NewTermInsurance:
                return <NewTermInsurance onNavigateNewTermInsurance={ this._onPressNewTermInsurance }/>;

            case NavigationRouteId.HomePanel:
              return <HomePanel onPressSuper={ this._onPressHome} onNavigateSuperCar={ this._onPressHome1 } onNavigateRole={ this._onPressRole } onNavigateOne={ this._onPressOne } navigatorRoute={navigatorRoute} />;   
            // return <HomePanel onNavigateSuperCar = {this._onPressHome1}/>;
             case NavigationRouteId.Vehicleregister:
                return <Vehicleregister onNavigatefont={ this._onPressfont}/>; 

                case NavigationRouteId.Gproposal:
                return <Gproposal onNavigateEleven={ this._onPressEleven} navigatorRoute={navigatorRoute}/>;

        }

        return null;
    }

    _onPressNavigate(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.HomePanel,
            sceneConfigType: "FloatFromRight",
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressTwenty(allResponse,resJson,liability,message,quoteid,premium,odpremium) {
        console.log("allResponse",allResponse)
        console.log("resJson",resJson)
        console.log("liablity",liability)
        console.log("message",message)
        console.log("quoteid",quoteid)
        console.log("premium",premium)
        console.log("odpremium",odpremium)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.CarSelection,
            sceneConfigType: "FloatFromRight",
            liability:liability,
            resJson:resJson,
            quoteid:quoteid,
            premium:premium,
            odpremium:odpremium,
            allResponse:allResponse,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressThirty(liability,resJson,quoteid,premium,allResponse,) {
        console.log("resJson",resJson)
        console.log("liablity",liability)
        console.log("quoteid",quoteid)
        console.log("premium",premium)
        console.log("allResponse",allResponse)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.CompareCar,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            allResponse:allResponse,
            quoteid:quoteid,
            premium:premium,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressproposal(res,quoteid,premium,) {
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
    _onPressOne() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.Remainders,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressRole(){
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.MyPolicy,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressForth(res,token) {
        console.log("res",res)
        console.log("token",token)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.OtpPage,
            sceneConfigType: "FloatFromRight",
            res:res,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressSuper(token) {
        console.log("token",token)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            token:token,
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
    _onPressSixth(liability,resJson,message,quoteid,premium,odpremium,token) {
        console.log("liablity2222222",liability)
        console.log(token,"token")
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.QuoteDetails,
            sceneConfigType: "FloatFromRight",
            liability:liability,
            resJson:resJson,
            quoteid:quoteid,
            premium:premium,
            odpremium:odpremium,
            message:message,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressPush(allResponse,liability,resJson,message,quoteid,premium,token) {
        console.log("liablity2222222",liability)
        console.log("allResp",allResponse)
        console.log("token",token)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.QuoteDetails,
            sceneConfigType: "FloatFromRight",
            liability:liability,
            resJson:resJson,
            quoteid:quoteid,
            premium:premium,
            message:message,
            token:token,
            allResponse:allResponse,
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
    _onPressDetail(quoteid,premium,odpremium,token) {
       
        console.log("quoteid",quoteid)
        console.log("premium",premium)
        console.log("odpremium",odpremium)
        console.log("token",token)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDetails,
            sceneConfigType: "FloatFromRight",
            quoteid:quoteid,
            premium:premium,
            token:token,
            odpremium:odpremium,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressFourty(liability,resJson,quoteid,premium,allResponse) {
        // console.log("res",res)
        console.log("premium",premium)
        console.log("allResponse",allResponse)
         this._navigator.push({
             routeId: NavigationRouteId.CarDetails,
             sceneConfigType: "FloatFromRight",
            // res:res,
             premium:premium,
             quoteid:quoteid,
             liability:liability,
            // idv:idv,
             resJson:resJson,
             allResponse:allResponse,
 
             customSceneConfig: {
                 hideShadow: true
             }
         });
     }
    _onPressEight(res,quoteid,mypremium,token) {
        var res=res;
        console.log("quoteid",quoteid)
        console.log("premium",mypremium)
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Gproposal,
            res:res,
            quoteid:quoteid,
            mypremium:mypremium,
            token:token,
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

    _onPressVehicledcar(allResponse,resJson,liability,message,quoteid,premium) {
        console.log(resJson,"idv");
        console.log(quoteid,"quoteiid")
        console.log(premium,"premium")
        console.log(liability,"liablity")
        console.log(allResponse,"allResponse")
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDcar,
            sceneConfigType: "FloatFromRight",
            quoteid:quoteid,
            premium:premium,
            resJson:resJson,
            liability:liability,
            allResponse:allResponse,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTen(resJson,liability,message,quoteid,premium,odpremium,token) {
        console.log("token",token)
        console.log("neenenne",resJson)
        console.log("liablity",liability)
        console.log("quoteid",quoteid)
        console.log("odpremium",odpremium)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.Addons,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            message:message,
            quoteid:quoteid,
            premium:premium,
            odpremium:odpremium,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressNinety(resJson,liability,message,quoteid,premium,odpremium,token) {
        console.log("neenenne",resJson)
        console.log("liablity",liability)
        console.log("quoteid",quoteid)
        console.log("odpremium",odpremium)
        console.log("token",token)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.QuotesSelection,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            message:message,
            quoteid:quoteid,
            premium:premium,
            odpremium:odpremium,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressEleven() {
        // this._navigator.pop();
        console.log("hitting to eleven panel")
        this._navigator.push({
            routeId: NavigationRouteId.PaymentScreen,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTens(resJson,liability,message,quoteid,premium,token) {
        console.log("neenenne",resJson)
        console.log("liablity",liability)
        console.log("quoteid",quoteid)
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
            token:token,
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
    _onPressTwo(quoteid,premium,liability,idv,resJson,allResponse) {
        // console.log("res",res)
       console.log("premium",premium)
        this._navigator.push({
            routeId: NavigationRouteId.VehicleDcar,
            sceneConfigType: "FloatFromRight",
        //    res:res,
            premium:premium,
            quoteid:quoteid,
            liability:liability,
            idv:idv,
            resJson:resJson,
            allResponse:allResponse,

            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressFifty(quoteid,mypremium,liability,idv,resJson,allResponse) {
        // console.log("res",res)
       console.log("premium",mypremium)
        this._navigator.push({
            routeId: NavigationRouteId.CarGproposal,
            sceneConfigType: "FloatFromRight",
        //    res:res,
            mypremium:mypremium,
            quoteid:quoteid,
            liability:liability,
            idv:idv,
            resJson:resJson,
            allResponse:allResponse,

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

    _onPressHome(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.InsuranceAddons,
            sceneConfigType: "FloatFromRight",
            token:token,
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

    _onPressCompare(allResponse,liability,resJson,message,quoteid,premium,odpremium,token) {
        console.log("liablity",liability)
        console.log(resJson,"resJson")
        console.log(token,"token")
            this._navigator.push({
            routeId: NavigationRouteId.QuoteDetails,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            liability:liability,
            odpremium:odpremium,
            quoteid:quoteid,
            premium:premium,
            message:message,
            allResponse:allResponse,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }


    _onPressQuoteDetails(resJson,liability,token) {
        console.log("idvvvvv",resJson)
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.QuoteDetails,
            sceneConfigType: "FloatFromRight",
            resJson:resJson,
            token:token,
            liability:liability,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
};
