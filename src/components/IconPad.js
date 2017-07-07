import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CardSection, IconButton } from './common';

class IconPad extends React.Component {

   
    
    render() {
       
        return (
            <CardSection style={styles.containerStyle}>
                        <View style={styles.view1Style}>
                            <View style={styles.view1_1Style}>
                                <IconButton text="Food"><Icon name="cutlery" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Drink"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Taxi"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Fuel"><Icon name="car" size={icons.size} color={icons.color} /></IconButton>
                            </View>
                            <View style={styles.view1_1Style}>
                                <IconButton text="Taxi"><Icon name="cab" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Fix"><Icon name="cog" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Taxi"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Fuel"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                            </View>
                            <View style={styles.view1_1Style}>
                                <IconButton text="Food"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Drink"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Taxi"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Fuel"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                            </View>
                            <View style={styles.view1_1Style}>
                                <IconButton text="Food"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Drink"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Taxi"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                                <IconButton text="Fuel"><Icon name="beer" size={icons.size} color={icons.color} /></IconButton>
                            </View>
                        </View>
                        
            </CardSection>
        );
    }
}

const items = [
        { text: 'Food', icon: 'beer' },
        { text: 'Food', icon: 'beer' }
    ];

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

const icons = {
    size: 24,
    color: 'white'
};

export default IconPad;
