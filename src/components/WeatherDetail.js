import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import moment from 'moment';

const WeatherDetail = (props) => {
    const { iconStyle, text1Style, text2Style, viewStyle, daylyStyle} = styles;

    return (
        <Card>
                <View style={viewStyle}>
                    <View>
                        <Image style={iconStyle} source={{ uri: 'http://openweathermap.org/img/w/' + props.data.weather[0].icon + '.png'}} />
                    </View>
                    <View style={daylyStyle}>
                        <Text style={text1Style}>{
                                moment(props.data.dt_txt).calendar()
                        }</Text>
                        <Text style={text2Style}>{props.data.weather[0].description}</Text>
                    </View>
                </View>
                <View>
                    <Text style={text1Style}>{props.data.main.temp.toFixed(0)}</Text>
                    <Text style={text2Style}>{props.data.main.temp_min.toFixed(0)}</Text>
                </View>
        </Card>
    );
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
    }
};

export default WeatherDetail;