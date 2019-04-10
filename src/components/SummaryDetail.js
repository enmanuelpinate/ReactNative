import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

const SummaryDetail = (props) => {
    const { iconStyle} = styles;
        return (
            <View>
                <Text>{moment(props.data.dt_txt).format('dddd')}</Text>
                <Text>{moment(props.data.dt_txt).format('MMMM Do')}</Text>
                <View>
                    <View>
                        <Text>{`${props.data.main.temp.toFixed(0)}\u00B0`}</Text>
                        <Text>{`${props.data.main.temp_min.toFixed(0)}\u00B0`}</Text>
                    </View>
                    <Image style={iconStyle} source={{ uri: 'http://openweathermap.org/img/w/' + props.data.weather[0].icon + '.png'}} />
                </View>
                <Text>Humidity: {props.data.main.humidity} %</Text>
                <Text>Pressure: {props.data.main.pressure} hPa</Text>
                <Text>Wind: {props.data.wind.speed} km/h NW</Text>
            </View>
        );
}

const styles = {
    iconStyle: {
        width: 50,
        height: 50,
    }
};

export default SummaryDetail;