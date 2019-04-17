import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import SummaryDetail from './SummaryDetail';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        const selectedItem = this.props.navigation.state.params.otherParam;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Details'}  icon1={'settings'} icon2={'sharealt'} icon3={'ios-arrow-back'} style={{fontSize: 25}} 
                onPress={() => navigate('Settings')}/>
                <View style={{ backgroundColor: '#EAEDEB', flex: 2 }}>
                    <SummaryDetail data={selectedItem}/>
                </View>
            </View>
        );
    }
}