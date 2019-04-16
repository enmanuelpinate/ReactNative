import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    selectUnits = () => {
        Alert.alert(
            'Units',
            'Please select the units you want to use',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    render() {
        const { navigate } = this.props.navigation;
        const selectedItem = this.props.navigation.state.params.otherParam;
        const {textSettings, touchableStyle, settingsContainer} = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Settings'} style={{fontSize: 25}} />
                <View style={settingsContainer}>
                    <TouchableOpacity style={touchableStyle} onPress={() => navigate('SelectACity')}>
                        <Text style={textSettings}>Location</Text>
                        <Text>{selectedItem}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={touchableStyle} onPress={this.selectUnits}>
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