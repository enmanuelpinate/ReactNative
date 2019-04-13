import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

const CurrentWeather = (props) => {
    const { currentWeatherContainer, summaryContainer, textStyle, summaryInterno, tempStyle, tempMinStyle, iconStyle } = styles;
    
    return (
        <View style={currentWeatherContainer}>
            <Text>{props.location.name}</Text>
            <Text style={textStyle}>{moment(props.nanda.dt_txt).calendar()}</Text>
            <View style={summaryContainer}>
                <View style={summaryInterno}>
                    <Text style={tempStyle}>{`${props.nanda.main.temp.toFixed(0)}\u00B0`}</Text>
                    <Image style={iconStyle} source={{ uri: 'http://openweathermap.org/img/w/' + props.nanda.weather[0].icon + '.png' }} />
                </View>
                <View style={summaryInterno}>
                    <Text style={tempMinStyle}>{`${props.nanda.main.temp_min.toFixed(0)}\u00B0`}</Text>
                    <Text style={tempMinStyle}>{props.nanda.weather[0].description}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    currentWeatherContainer: {
        height: 210,
        backgroundColor: '#1CC1FD',
    },
    summaryContainer: {
        paddingRight: 20,
        paddingLeft: 75
    },
    summaryInterno: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        paddingTop: 20,
        fontSize: 25,
        color: 'white',
        paddingLeft: 75
    },
    tempStyle: {
        fontSize: 70,
        color: 'white',
    },
    tempMinStyle: {
        fontSize: 20,
        color: 'white',
        paddingRight: 30
    },
    iconStyle: {
        width: 100,
        height: 100
    }
};

export default CurrentWeather;