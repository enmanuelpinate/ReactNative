import React from 'react';
import { AppRegistry, View } from 'react-native';
import WeatherList from './src/components/WeatherList';

const App = () => (
    <View>
        <WeatherList />
    </View>
);

AppRegistry.registerComponent('FirstProject', () => App);