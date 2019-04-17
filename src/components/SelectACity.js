import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';
import SearchInput, { createFilter } from 'react-native-search-filter';
import cityList from './cityList/cityList.json';
const KEYS_TO_FILTERS = ['name'];

export default class SelectACity extends Component {
    static navigationOptions = {
        title: 'SelectACity',
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        const { navigate } = this.props.navigation;
        const filteredCities = cityList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Select a city'} icon3={'ios-arrow-back'} style={{fontSize: 25}} />
                <View style={styles.container}>
                    <SearchInput 
                    onChangeText={(term) => { this.searchUpdated(term) }} 
                    style={styles.searchInput}
                    placeholder="Type to search..."
                    />
                    <ScrollView>
                        {filteredCities.map(cityList => {
                            return (
                            <TouchableOpacity key={cityList.id.toString()} onPress={() => navigate('Home', {
                                selectedCity: cityList.id
                            })} style={styles.cityItem}>
                                <Text>{cityList.name}, {cityList.country}</Text>
                            </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start'
    },
    cityItem:{
      borderBottomWidth: 0.5,
      borderColor: 'rgba(0,0,0,0.3)',
      padding: 10
    },
    searchInput:{
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1
    }
  });