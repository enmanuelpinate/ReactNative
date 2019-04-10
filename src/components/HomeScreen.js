import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import SplashScreen from './Splash';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import WeatherList from './WeatherList';
import axios from 'axios';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    state = { loading: true, weathers: {}, actualWeather: [] };

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1821306&units=metric&appid=e3c0fd3b93792861eff408fec7a55481')
        .then(response => {
            this.setState({
                loading: false,
                actualWeather: response.data.list[0],
                weathers: response.data.list,
            });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { weatherListContainer } = styles;
        return (this.state.loading ? <SplashScreen headerText={'Sunshine'}/>
        :
            <View style={weatherListContainer}>
                <Header headerText={'Sunshine'} icon1={'settings'} style={{fontSize: 35, fontFamily: 'Pacifico-Regular'}}/>
                <ScrollView>
                    <CurrentWeather nanda={this.state.actualWeather}/>
                    <FlatList
                        data={this.state.weathers}
                        renderItem={item => 
                        <WeatherList 
                            key={item.index.toString()} 
                            weather={item.item}
                            onPressItem={() => {
                                navigate('WeatherDetail', {
                                    otherParam: item.item
                                });
                            }}
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
    },
};