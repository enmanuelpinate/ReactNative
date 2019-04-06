import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';
import WeatherDetail from './WeatherDetail';
import Header from './header';
import SplashScreen from './Splash';

class WeatherList extends Component {
    state = { Weather: [], ActualWeather: {} };

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1821306&units=metric&appid=e3c0fd3b93792861eff408fec7a55481')
        .then(response => {
            this.setState({ActualWeather: response.data.list[0]});
            this.setState({Weather: response.data.list});
        });
    }

    renderWeather () { 
        return this.state.Weather.map(Weather => <WeatherDetail key={Weather.dt}
            data={Weather}
        />);
    }

    renderCurrentWeather () {
       return( this.state.ActualWeather.main == undefined ? <SplashScreen headerText={'Sunshine'}/> 
       :   
            <View>
                 <CurrentWeather nanda={this.state.ActualWeather}/>
            </View>
       );
    }

    renderHeader () {
        return( this.state.ActualWeather.main == undefined ? <SplashScreen headerText={'Sunshine'}/> 
        :   
             <View>
                  <Header headerText={'Sunshine'} />
             </View>
        );
     }

    render () {
        console.log(this.state);

        return (
            <View>
                {this.renderHeader()}
                <ScrollView >
                    {this.renderCurrentWeather()}
                    {this.renderWeather()}
                </ScrollView>
            </View>
        );
    }
}

export default WeatherList;