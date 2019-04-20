import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            metricChecked: true,
            imperialChecked: false
        }
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
                            checked={this.state.metricChecked}
                            onPress={() => {
                                this.setState({
                                    metricChecked: !this.state.metricChecked,
                                    imperialChecked: !this.state.imperialChecked
                                })
                                navigate('Home', {
                                    unitsParam: this.state.metricChecked
                                })
                            }}
                        />
                        <CheckBox
                            title='Imperial'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.imperialChecked}
                            onPress={() => {
                                this.setState({
                                    imperialChecked: !this.state.imperialChecked,
                                    metricChecked: !this.state.metricChecked
                                })
                                navigate('Home', {
                                    unitsParam: this.state.metricChecked
                                })
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