import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CardSection, IconButton } from './common';

class Numpad extends React.Component {
    render() {
        const myIcon = (
                        <Icon 
                            name="long-arrow-left" 
                            size={30} color={'white'} 
                            style={styles.iconStyle} 
                        />
                        );
        return (
            <CardSection style={styles.containerStyle}>
                        <View style={styles.view1Style}>
                            <View style={styles.view1_1Style}>
                                <IconButton text="7" />
                                <IconButton text="8" />
                                <IconButton text="9" />
                            </View>
                            <View style={styles.view1_1Style}>
                                <IconButton text="4" />
                                <IconButton text="5" />
                                <IconButton text="6" />
                            </View>
                            <View style={styles.view1_1Style}>
                                <IconButton text="1" />
                                <IconButton text="2" />
                                <IconButton text="3" />
                            </View>
                            <View style={styles.view1_1Style}>
                               <IconButton style={styles.button2Style} text="0" />
                               <IconButton text="." />
                            </View>
                        </View>
                        <View style={styles.view2Style}>
                            <IconButton text="C" />
                            <IconButton >
                                    {myIcon}
                            </IconButton>
                            <IconButton style={styles.button2Style} text="SAVE" />
                        </View>
            </CardSection>
        );
    }
}

const styles = {
    containerStyle: {
         flex: 1,
         flexDirection: 'row', 
         alignItems: 'stretch',
         backgroundColor: 'black'
    },
    view1Style: {
        flex: 3,
        flexDirection: 'column',
          alignItems: 'stretch'
      //  borderWidth: 1,
      //  borderRadius: 2
    },
    view2Style: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
      //  borderWidth: 1,
      //  borderRadius: 2
    },
    view1_1Style: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    view1_1_1Style: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
        margin: 0,
        backgroundColor: 'dimgrey',
        alignItems: 'stretch'
    },
    button2Style: {
        flex: 2
    },
    iconStyle: {
        alignSelf: 'center'
    }
};

export default Numpad;
