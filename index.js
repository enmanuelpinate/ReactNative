import { AppRegistry } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import SettingsScreen from './src/components/SettingsScreen';
import SelectACity from './src/components/SelectACity';
import MapScreen from './src/components/MapScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigation = createStackNavigator({
    Home: { screen: HomeScreen },
    WeatherDetail: { screen: DetailScreen },
    Settings: {screen: SettingsScreen },
    SelectACity: {screen: SelectACity },
    Map: {screen: MapScreen}
});

const App = createAppContainer(navigation);
AppRegistry.registerComponent('FirstProject', () => App);