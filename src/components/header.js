import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/dist/Feather';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import Icon3 from 'react-native-vector-icons/dist/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Header extends Component {
    static navigationOptions = {
        title: 'Settings',
        header: null
    };

    render () {
        const { textStyle, headerContainer, imageStyle, iconStyle, headerInternContainer } = styles;
        return (
            <View style={headerContainer}>
                <View style={headerInternContainer}>
                    <TouchableOpacity onPress={this.props.goBack}>
                        <Icon3 name={this.props.icon3} style={iconStyle}/>
                    </TouchableOpacity>
                    <Image style={imageStyle} source={require('./Sun.png')} />
                    <Text style={[textStyle, this.props.style]}>{this.props.headerText}</Text>
                </View>
                <View style={headerInternContainer}>
                    <TouchableOpacity onPress={this.props.onShare}>
                        <Icon2 name={this.props.icon2} style={iconStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Icon1 name={this.props.icon1} style={iconStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = {
    imageStyle: {
        width: 50,
        height: 50
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#1CC1FD',
        alignItems: 'center',
        height: 80,
        paddingLeft: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative',
        justifyContent: 'space-between'
    },
    headerInternContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    textStyle: {
        paddingLeft: 10,
        color: 'white',
    },
    iconStyle: {
        fontSize: 30,
        color: 'white',
        paddingRight: 20
    }
};