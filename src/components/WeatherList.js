import React, {Component} from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import axios from 'axios';
import Header from './header';
import WeatherDetail from './WeatherDetail';
import SplashScreen from './Splash';
import CurrentWeather from './CurrentWeather';

export default class WeatherList extends Component {
    state = { loading: true, Weather: {}, ActualWeather: [] };

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1821306&units=metric&appid=e3c0fd3b93792861eff408fec7a55481')
        .then(response => {
            this.setState({
                loading: false,
                ActualWeather: response.data.list[0],
                Weather: response.data.list,
            });
        });
    }

    render () { 
        const { weatherListContainer } = styles;

        return (this.state.loading ? <SplashScreen headerText={'Sunshine'}/>
        : 
        <View style={weatherListContainer}>
            <Header headerText={'Sunshine'}/>
            <ScrollView>
                <CurrentWeather nanda={this.state.ActualWeather}/>
                <FlatList
                    data={this.state.Weather}
                    renderItem={item => 
                    <WeatherDetail 
                        key={item.item.weather[0].id} 
                        weather={item.item}
                        onPressItem={() => this.props.onPressItem(this.props.weather)}
                    />}
                />
            </ScrollView>
        </View>
        );
    }

}

const styles = {
    weatherListContainer: {
        flex: 1,
    }
};