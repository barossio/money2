import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 

class TransactionMemo extends React.Component {
    static navigationOptions = function (props) {
        return {
             title: 'TransactionMemo',
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text >
                    Back
                </Text>
                </TouchableOpacity>
            )
        };
    }

    render() {
        return (
        <Text>TransactionMemo</Text>
        );
    }
}

export default TransactionMemo;
