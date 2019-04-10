import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

const SummaryDetail = (props) => {
    const { summarDetailContainer, summarDetailInternContainer, iconStyle, dayDate, monthDate, mainTemp, minTemp, summaryText } = styles;
        return (
            <View style={summarDetailContainer}>
                <Text style={dayDate}>{moment(props.data.dt_txt).format('dddd')}</Text>
                <Text style={monthDate}>{moment(props.data.dt_txt).format('MMMM Do')}</Text>
                <View style={summarDetailInternContainer}>
                    <View>
                        <Text style={mainTemp}>{`${props.data.main.temp.toFixed(0)}\u00B0`}</Text>
                        <Text style={minTemp}>{`${props.data.main.temp_min.toFixed(0)}\u00B0`}</Text>
                    </View>
                    <Image style={iconStyle} source={{ uri: 'http://openweathermap.org/img/w/' + props.data.weather[0].icon + '.png'}} />
                </View>
                <Text style={summaryText}>Humidity: {props.data.main.humidity} %</Text>
                <Text style={summaryText}>Pressure: {props.data.main.pressure} hPa</Text>
                <Text style={summaryText}>Wind: {props.data.wind.speed} km/h NW</Text>
            </View>
        );
}

const styles = {
    summarDetailContainer: {
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 30
    },
    summarDetailInternContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        height: 250
    },
    mainTemp: {
        fontWeight: 'bold',
        fontSize: 90,
        paddingLeft: 30
    },
    minTemp: {
        fontSize: 50,
        paddingLeft: 20
    },
    dayDate: {
        fontWeight: 'bold',
        fontSize: 30
    },
    monthDate: {
        fontSize: 20
    },
    iconStyle: {
        width: 150,
        height: 150,
    },
    summaryText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export default SummaryDetail;