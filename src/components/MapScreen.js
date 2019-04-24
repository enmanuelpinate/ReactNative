import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import Header from './Header';

export default class MapScreen extends Component {
    static navigationOptions = {
        title: 'MapScreen',
        header: null
    };
z
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ flex: 1 }}>
                <Header headerText={'Select a city'} icon3={'ios-arrow-back'} style={{fontSize: 25}} 
                goBack={() => navigate('SelectACity')}/>
                <WebView
                    source={{uri: 'https://openweathermap.org/weathermap?basemap=map&cities=true&layer=clouds&lat=30&lon=-20&zoom=3'}}
                    style={{marginTop: -80}}
                />
            </View>
        );
    }
}