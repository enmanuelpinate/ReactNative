import React, { Component } from 'react';
import { View } from 'react-native';
import WeatherList from './WeatherList';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <WeatherList onPressItem={() => navigate('WeatherDetail')}/>
            </View>
        );
    }
}