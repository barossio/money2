import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native'; 
import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Card } from './common';
import Numpad from './Numpad';
import InputSectionView from './InputSectionView';
import IconPad from './IconPad';
import { KEYBOARD_TYPES } from '../types';
import * as actions from '../actions';


class TransactionForm extends React.Component {
    static navigationOptions = function (props) {
        return {
            title: 'TransactionForm',
            tabBarLabel: 'Add',
             tabBarIcon: ({ tintColor, focused }) => (
            <Icon
            name={focused ? 'plus' : 'plus'}
            size={30} color={'white'} 
           
            />
        ),
            tabBarVisible: false,
            headerLeft: (
                <TouchableOpacity style={{ margin: 5 }} onPress={() => props.navigation.goBack()}>
                <Text >
                    Back
                </Text>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity style={{ margin: 5 }} onPress={() => console.log('Save')}>
                <Text >
                    Save
                </Text>
                </TouchableOpacity>
            )
        };
    }

    renderPad() {
       const { keyboard } = this.props.inputForm;
        if (keyboard === KEYBOARD_TYPES.ICONPAD) {
            return <IconPad />;
        }
        return <Numpad />;
    }
    render() {
        return (
            <Card style={styles.cardStyle}>
                 <View style={styles.inputSectionStyle}>
                     <InputSectionView navigation={this.props.navigation} />
                 </View>
                 <View style={styles.keyboardSectionStyle}>
                     {this.renderPad()}
                 </View>
            </Card>
        );
    }
}

const styles = {
    cardStyle: {
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-between',
         alignItems: 'stretch',
    },
    inputSectionStyle: {
         flex: 1,
         backgroundColor: 'powderblue',
         alignItems: 'stretch', 
         flexDirection: 'column', 
    },
    keyboardSectionStyle: {
         flex: 1,
         flexDirection: 'row', 
         alignItems: 'stretch',
         backgroundColor: 'black'
    }
   
    
};

function mapStateToProps(state) {
    return {
        inputForm: state.inputForm
    };
}

export default connect(mapStateToProps, actions)(TransactionForm);
