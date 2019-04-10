import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    render() {
        const {textSettings, touchableStyle} = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Settings'} style={{fontSize: 25}} />
                <View style={{ backgroundColor: '#EAEDEB', flex: 2 }}>
                    <TouchableOpacity style={touchableStyle}>
                        <Text style={textSettings}>Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={touchableStyle}>
                        <Text style={textSettings}>Temperature units</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    textSettings: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    touchableStyle: {
        height: 50
    }
};