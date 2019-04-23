import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Header from './Header';
import SearchInput, { createFilter } from 'react-native-search-filter';
import cityList from './cityList/cityList.json';
import IconArrow from 'react-native-vector-icons/dist/Ionicons';
import IconClear from 'react-native-vector-icons/dist/Ionicons';
const KEYS_TO_FILTERS = ['name'];

export default class SelectACity extends Component {
    static navigationOptions = {
        title: 'SelectACity',
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: '',
          closeIconDisplay: false,
          loading: true,
          cities: []
        }
      }

    componentWillMount() {
        this.setState({ cities: cityList, loading: false })
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
        term === '' ? this.setState({ closeIconDisplay: false })
        : this.setState({ closeIconDisplay: true })
    }

    render() {
        const data = this.state.cities;
        const { navigate } = this.props.navigation;
        const filteredCities = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        const display = this.state.closeIconDisplay ? "flex" : "none";
        return ( this.state.loading ? 
            <View>
                <Header headerText={'Select a city'} icon3={'ios-arrow-back'} style={{fontSize: 25}} 
                goBack={() => navigate('Settings')}/>
                <ActivityIndicator size="large" color="#1CC1FD" />
            </View>
            :
            <View style={{ flex: 1 }}>
                <Header headerText={'Select a city'} icon3={'ios-arrow-back'} style={{fontSize: 25}} 
                goBack={() => navigate('Settings')}/>
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <SearchInput 
                        onChangeText={(term) => { this.searchUpdated(term) }} 
                        style={styles.searchInput}
                        placeholder="Search"
                        />
                        <TouchableOpacity>
                            <IconClear name={'ios-close'} style={[styles.iconCloseStyle, {display}]}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.cityContainer}>
                        {filteredCities.map(data => {
                            return (
                            <TouchableOpacity key={data.id.toString()} onPress={() => navigate('Home', {
                                selectedCity: data.id
                            })} style={styles.cityItem}>
                                <Text>{data.name}, {data.country}</Text>
                                <IconArrow name={'ios-arrow-forward'} style={styles.iconStyle}/>
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
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#CCC',
        borderBottomWidth: 1,
    },
    cityItem:{
      borderBottomWidth: 0.5,
      borderColor: 'rgba(0,0,0,0.3)',
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 20
    },
    searchInput:{
      padding: 10,
      fontSize: 18,
      width: 360
    },
    iconStyle: {
        fontSize: 20
    },
    iconCloseStyle: {
        fontSize: 35,
        padding: 10,
        paddingRight: 30
    },
    cityContainer: {
        paddingRight: 15,
        paddingLeft: 15
    }
  });