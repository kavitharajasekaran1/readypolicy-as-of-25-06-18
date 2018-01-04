import React from 'react'
import RX from 'reactxp';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,MapView,HelpBlock,DateTimeField} from 'react-bootstrap';
import Default from 'reactxp-navigation';
// import MapView from 'react-native-maps';
const styles = {
    roundButton: RX.Styles.createViewStyle({
      margin: 16,
      borderRadius: 16,
      backgroundColor: '#ff0000ab',
      justifyContent: 'CENTER'
      }),
    }
class Location extends RX.Component {
    constructor(props) {
        super(props);

        this.state = {
            mapRegion: null,
            lastLat: null,
            lastLong: null,
        };
    }

    componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
        // Create the object to update this.state.mapRegion through the onRegionChange function
        let region = {
          latitude:       position.coords.latitude,
          longitude:      position.coords.longitude,
          latitudeDelta:  0.00922*1.5,
          longitudeDelta: 0.00421*1.5
        }
        this.onRegionChange(region, region.latitude, region.longitude);
      });
    }
    _onRegionChange(region, lastLat, lastLong) {
        this.setState({
          mapRegion: region,
          // If there are no new values set use the the current ones
          lastLat: lastLat || this.state.lastLat,
          lastLong: lastLong || this.state.lastLong
        
        });
    }
        componentWillUnmount() {
            navigator.geolocation.clearWatch(this.watchID);
        
        }
          _onMapPress(e) {
            console.log(e.nativeEvent.coordinate.longitude);
            let region = {
              latitude:       e.nativeEvent.coordinate.latitude,
              longitude:      e.nativeEvent.coordinate.longitude,
              latitudeDelta:  0.00922*1.5,
              longitudeDelta: 0.00421*1.5
            }
            this.onRegionChange(region, region.latitude, region.longitude);
          }
    
    
        
    render() {
        return (
            <RX.View style={{flex: 1}}>
            <RX.MapView
              style={styles.map}
              region={this.state.mapRegion}
              showsUserLocation={true}
              followUserLocation={true}
              onRegionChange={this.onRegionChange.bind(this)}
              onPress={this.onMapPress.bind(this)}>
              <RX.MapView.Marker
                coordinate={{
                  latitude: (this.state.lastLat + 0.00050) || -36.82339,
                  longitude: (this.state.lastLong + 0.00050) || -73.03569,
                }}>
                <RX.View>
                  <RX.Text style={{color: '#000'}}>
                    { this.state.lastLong } / { this.state.lastLat }
                  </RX.Text>
                </RX.View>
              </RX.MapView.Marker>
            </RX.MapView>
            <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateSeven }>
      <RX.Text style={ styles.buttonText }>
      REGISTER
      </RX.Text>
      </RX.Button>
          </RX.View>
        );
    }

}


 

