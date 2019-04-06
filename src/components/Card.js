import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.containerStyle} onPress={() => navigate('DetailScreen')}>
                {props.children}
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 45,
        height: 70
    }
};

export default Card;