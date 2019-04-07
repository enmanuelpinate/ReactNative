import { AppRegistry } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigation = createStackNavigator({
    Home: { screen: HomeScreen },
    WeatherDetail: { screen: DetailScreen }
});

const App = createAppContainer(navigation);
AppRegistry.registerComponent('FirstProject', () => App);