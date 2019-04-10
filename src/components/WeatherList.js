import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class WeatherList extends Component {
    onPress = () => {
        this.props.onPressItem(this.props.weather);
    };

    render() {
        const { iconStyle, text1Style, text2Style, viewStyle, daylyStyle, containerStyle} = styles;
        return (
            <TouchableOpacity style={containerStyle} onPress={this.onPress}>
                <View style={viewStyle}>
                    <View>
                        <Image style={iconStyle} source={{ uri: 'http://openweathermap.org/img/w/' + this.props.weather.weather[0].icon + '.png'}} />
                    </View>
                    <View style={daylyStyle}>
                        <Text style={text1Style}>{
                                moment(this.props.weather.dt_txt).calendar()
                        }</Text>
                        <Text style={text2Style}>{this.props.weather.weather[0].description}</Text>
                    </View>
                </View>
                <View>
                    <Text style={text1Style}>{`${this.props.weather.main.temp.toFixed(0)}\u00B0`}</Text>
                    <Text style={text2Style}>{`${this.props.weather.main.temp_min.toFixed(0)}\u00B0`}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = {
    viewStyle: {
        flexDirection: 'row'
    },
    daylyStyle: {
        paddingLeft: 10
    },
    iconStyle: {
        width: 50,
        height: 50,
    },
    text1Style: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text2Style: {
        fontSize: 18
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 45,
        height: 70
    }
};