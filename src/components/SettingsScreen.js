import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    state = {
        imperialUnitsSelected: false
    };

    selectUnits = () => {
        Alert.alert(
            'Temperture Units',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {CheckBox: 'nanda'}
            ],
            {cancelable: true},
          );
    }

    render() {
        const { navigate } = this.props.navigation;
        const selectedItem = this.props.navigation.state.params.otherParam;
        const {textSettings, touchableStyle, settingsContainer, checkboxStyle} = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Settings'} icon3={'ios-arrow-back'} goBack={() => navigate('Home')} style={{fontSize: 25}} />
                <View style={settingsContainer}>
                    <TouchableOpacity style={touchableStyle} onPress={() => navigate('SelectACity')}>
                        <Text style={textSettings}>Location</Text>
                        <Text>{selectedItem}</Text>
                    </TouchableOpacity>
                    <View style={checkboxStyle}>
                        <Text style={textSettings}>Temperature Units</Text>
                        <CheckBox
                            title='Metric'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.imperialUnitsSelected.checked}
                        />
                        <CheckBox
                            title='Imperial'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.imperialUnitsSelected.checked}
                        />
                    </View>
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
    },
    checkboxStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
};