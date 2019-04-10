import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/dist/Feather';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';

const Header = (props) => {

    const { textStyle, headerContainer, imageStyle, iconStyle, headerInternContainer } = styles;

    return (
        <View style={headerContainer}>
            <View style={headerInternContainer}>
                <Image style={imageStyle} source={require('./Sun.png')} />
                <Text style={[textStyle, props.style]}>{props.headerText}</Text>
            </View>
            <View style={headerInternContainer}>
                <Icon2 name={props.icon2} style={iconStyle}/>
                <Icon1 name={props.icon1} style={iconStyle}/>
            </View>
        </View>
    );
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

export default Header;