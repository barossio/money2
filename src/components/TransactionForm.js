import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 

class TransactionForm extends React.Component {
    static navigationOptions = function (props) {
        return {
            title: 'TransactionForm',
            tabBarLabel: '+',
            tabBarVisible: false,
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text >
                    Back
                </Text>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity onPress={() => props.navigation.navigate('TransactionMemo')}>
                <Text >
                    Memo
                </Text>
                </TouchableOpacity>
            )
        };
    }

    render() {
        return (
        <Text>TransactionForm</Text>
        );
    }
}

export default TransactionForm;
