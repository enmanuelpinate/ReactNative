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

    state = { loading: true, location: [], weathers: {}, actualWeather: [],
        oldSelectedLocation: '1821306', oldSelectedUnits: 'metric'
    };

    componentWillMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1821306&units=metric&appid=e3c0fd3b93792861eff408fec7a55481')
        .then(response => {
            this.setState({
                loading: false,
                actualWeather: response.data.list[0],
                location: response.data.city,
                weathers: response.data.list
            });
        });
    }

    updateLocationState = (item) => {
        return(item == undefined ? global = '1821306'
            :
            global = item.selectedCity
        );
    }

    updateUnitsState = (item) => {
        return ((item == undefined) ? item = 'metric'
            : (item.unitsParam) ? item = 'metric'
            : item ='imperial'
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const { weatherListContainer } = styles;
        newSelectedLocation = this.updateLocationState(this.props.navigation.state.params);
        newSelectedUnits = this.updateUnitsState(this.props.navigation.state.params);
        
        console.log(this.state.oldSelectedUnits + ' and ' + newSelectedUnits)

        if(newSelectedLocation.toString() !== this.state.oldSelectedLocation.toString() || newSelectedUnits.toString() !== this.state.oldSelectedUnits.toString()) {
            axios.get('http://api.openweathermap.org/data/2.5/forecast?id=' + newSelectedLocation + '&units=' + newSelectedUnits + '&appid=e3c0fd3b93792861eff408fec7a55481')
            .then(response => {
                this.setState({
                    loading: false,
                    actualWeather: response.data.list[0],
                    location: response.data.city,
                    weathers: response.data.list
                });
            });

            this.state.oldSelectedLocation = newSelectedLocation;
            this.state.oldSelectedUnits = newSelectedUnits;
        }

        return (this.state.loading ? <SplashScreen headerText={'Sunshine'}/>
        :
            <View style={weatherListContainer}>
                <Header headerText={'Sunshine'} icon1={'settings'} style={{fontSize: 35, fontFamily: 'Pacifico-Regular'}}
                onPress={() => navigate('Settings', {
                    otherParam: this.state.location,
                    savedUnits: newSelectedUnits
                })}/>
                <ScrollView>
                    <CurrentWeather nanda={this.state.actualWeather} location={this.state.location}/>
                    <FlatList
                        data={this.state.weathers}
                        keyExtractor={item => item.dt_txt.toString()}
                        renderItem={item => 
                        <WeatherList 
                            key={item.index.toString()} 
                            weather={item.item}
                            onPressItem={() => {
                                navigate('WeatherDetail', {
                                    otherParam: item.item,
                                    locationParam:  this.state.location,
                                    savedUnits: newSelectedUnits
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