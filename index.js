import { AppRegistry } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import SettingsScreen from './src/components/SettingsScreen';
import SelectACity from './src/components/SelectACity';
import Sharing from './src/components/Sharing';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigation = createStackNavigator({
    Home: { screen: HomeScreen },
    WeatherDetail: { screen: DetailScreen },
    Settings: {screen: SettingsScreen },
    SelectACity: {screen: SelectACity },
    Sharing: {screen: Sharing}
});

const App = createAppContainer(navigation);
AppRegistry.registerComponent('FirstProject', () => App);