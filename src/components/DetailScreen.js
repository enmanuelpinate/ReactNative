import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './header';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Details'}/>
            </View>
        );
    }
}