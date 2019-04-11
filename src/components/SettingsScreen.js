import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    state = { city: {} };

    componentWillMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1821306&units=metric&appid=e3c0fd3b93792861eff408fec7a55481')
        .then(response => {
            this.setState({
                city: response.data.city,
            });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const {textSettings, touchableStyle, settingsContainer} = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Settings'} style={{fontSize: 25}} />
                <View style={settingsContainer}>
                    <TouchableOpacity style={touchableStyle} onPress={() => navigate('SelectACity')}>
                        <Text style={textSettings}>Location</Text>
                        <Text>{this.state.city.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={touchableStyle}>
                        <Text style={textSettings}>Temperature Units</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    settingsContainer: {
        backgroundColor: '#EAEDEB', 
        flex: 2, 
        paddingLeft: 30, 
        paddingRight: 30, 
    },
    textSettings: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 20
    },
    touchableStyle: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
};