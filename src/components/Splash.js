import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const SplashScreen = (props) => {
    const { text, container, image } = styles;
        return (
            <View style={container}>
                <Image style={image} source={require('./Sun.png')} />
                <Text style={text}>{props.headerText}</Text>
            </View>
        );
};

const styles = {
    container: {
        height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1CC1FD'
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        fontFamily: 'Pacifico-Regular',
        color: 'white',
        fontSize: 30
    }
};

export default SplashScreen;