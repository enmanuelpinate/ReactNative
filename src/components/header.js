import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = (props) => {

    const { textStyle, headerContainer, imageStyle } = styles;

    return (
        <View style={headerContainer}>
            <Image style={imageStyle} source={require('./Sun.png')} />
            <Text style={[textStyle, props.style]}>{props.headerText}</Text>
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
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        paddingLeft: 10,
        color: 'white',
    }
};

export default Header;