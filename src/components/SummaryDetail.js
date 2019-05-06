import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

const SummaryDetail = (props) => {

    unistFunction = (item) => {
        return ((item == 'metric') ? item = 'km/h NW'
            : item = 'mph NW'
        );
    }
    weatherTemperature = (item, value) => {
        return((value === 'metric') ? item = `${item.toFixed(0)}\u00B0C`
            : item = `${item.toFixed(0)}\u00B0F`
        );
    }

    const { summarDetailContainer, summarDetailInternContainer, iconStyle, dayDate, monthDate, mainTemp, minTemp, summaryText } = styles;
        return (
            <View style={summarDetailContainer}>
                <Text style={dayDate}>{moment(props.data.dt_txt).format('dddd')}</Text>
                <Text style={monthDate}>{moment(props.data.dt_txt).format('MMMM Do')}</Text>
                <View style={summarDetailInternContainer}>
                    <View>
                        <Text style={mainTemp}>{this.weatherTemperature(props.data.main.temp, props.units)}</Text>
                        <Text style={minTemp}>{this.weatherTemperature(props.data.main.temp_min, props.units)}</Text>
                    </View>
                    <Image style={iconStyle} source={{ uri: 'http://openweathermap.org/img/w/' + props.data.weather[0].icon + '.png'}} />
                </View>
                <Text style={summaryText}>Humidity: {props.data.main.humidity} %</Text>
                <Text style={summaryText}>Pressure: {props.data.main.pressure} hPa</Text>
                <Text style={summaryText}>Wind: {props.data.wind.speed} {this.unistFunction(props.units)}</Text>
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
        fontSize: 70,
        paddingLeft: 30
    },
    minTemp: {
        fontSize: 40,
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