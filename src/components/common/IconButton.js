import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function IconButton({ onPress, children, text, style }) {
    const { containerStyle, textStyle } = styles;
    return (
         <TouchableOpacity style={[containerStyle, style]} onPress={onPress} >
            {children}
            {text && <Text style={textStyle}>{text}</Text>}
         </TouchableOpacity>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
        margin: 0,
        backgroundColor: 'dimgrey',
        alignItems: 'center'
    },
    
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
};

export { IconButton };
