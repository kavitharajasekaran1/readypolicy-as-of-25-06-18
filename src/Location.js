import React from 'react'
import RX from 'reactxp';
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
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    render() {
        return (
            <RX.View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RX.Link style={ styles.docLink } url={ 'https://maps.google.com/maps?q=%22+19.22+%22,%22+16.22+%22&hl=es' }>
                        Google maps
                    </RX.Link>
                <RX.Text>Latitude: {this.state.latitude}</RX.Text>
                <RX.Text>Longitude: {this.state.longitude}</RX.Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                {/* <RX.MapView.Animated
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    /> */}
            <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateSeven }>
      <RX.Text style={ styles.buttonText }>
      REGISTER
      </RX.Text>
      </RX.Button>
      </RX.View>
    );
    
  }
}

export default Location;