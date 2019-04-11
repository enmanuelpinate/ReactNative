import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Header from './Header';
import cityList from './cityList/cityList.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SelectACity extends Component {
    static navigationOptions = {
        title: 'SelectACity',
        header: null
    };

    render() {
        const {cityListContainer, cityListText} = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Select a city'} style={{fontSize: 25}} />
                <ScrollView>
                    <FlatList
                        data={cityList}
                        renderItem={({item}) =>
                            <View style={cityListContainer}>
                                <Text style={cityListText}>{item.name}, {item.country}</Text>
                            </View>
                        }/>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    cityListContainer: {
        height: 40,
        paddingLeft: 30, 
        paddingRight: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    cityListText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 20
    }
};