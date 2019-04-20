import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import LoadingView from './Sharing';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    constructor(props) {
        super(props);
        const savedUnits = this.savedUnitsFunction(this.props.navigation.state.params.savedUnits);
        this.state = {
            metricChecked: savedUnits,
            imperialChecked: !savedUnits
        }
    }

    changeSelectedBox = (bool, actualLocation) => {
        const { navigate } = this.props.navigation;
        return  ( (bool) ? null
            : (this.setState({
                metricChecked: !this.state.metricChecked,
                imperialChecked: !this.state.imperialChecked
            }),
            navigate('Home', {
                unitsParam: !this.state.metricChecked,
                selectedCity: actualLocation
            }))
        );
    }

    savedUnitsFunction = (value) => {
        return ((value === 'metric') ? value = true
        : value = false
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const actualCityName= this.props.navigation.state.params.otherParam.name;
        const actualCityId= this.props.navigation.state.params.otherParam.id;
        const {textSettings, touchableStyle, settingsContainer, checkboxStyle} = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Settings'} icon3={'ios-arrow-back'} goBack={() => navigate('Home')} style={{fontSize: 25}} />
                <View style={settingsContainer}>
                    <TouchableOpacity style={touchableStyle} onPress={() => navigate('SelectACity')}>
                        <Text style={textSettings}>Location</Text>
                        <Text>{actualCityName}</Text>
                    </TouchableOpacity>
                    <View style={checkboxStyle}>
                        <Text style={textSettings}>Temperature Units</Text>
                        <CheckBox
                            title='Metric'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.metricChecked}
                            onPress={() => {
                                this.changeSelectedBox(this.state.metricChecked, actualCityId)
                            }}
                        />
                        <CheckBox
                            title='Imperial'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.imperialChecked}
                            onPress={() => {
                                this.changeSelectedBox(this.state.imperialChecked, actualCityId)
                            }}
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