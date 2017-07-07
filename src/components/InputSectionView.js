import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class InputSectionView extends React.Component {
    render() {
        return (
            <CardSection style={styles.containerStyle}>
                <View style={styles.viewi1Style} />
                <View style={styles.viewi2Style}>
                    <TouchableOpacity style={styles.viewi2_dateStyle}><Text style={styles.textStyle} > {'07/07/2017'} </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.viewi2_1Style} onPress={this.props.typefieldClick}><Text style={styles.textStyle} > Food </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.viewi2_1Style} onPress={this.props.numfieldClick}><Text style={styles.textStyle} > 0.00 </Text></TouchableOpacity>
                </View>
                <View style={styles.viewi1Style} >
                    <TouchableOpacity style={{ margin: 5, flexDirection: 'row', alignItems: 'center', }} onPress={() => this.props.navigation.navigate('TransactionMemo')} >
                         <Icon 
                            name="edit" 
                            size={24}  
                            />
                        <Text>
                            Memo
                        </Text>
                    </TouchableOpacity>
                </View>
             </CardSection>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'powderblue',
        alignItems: 'stretch',
    },
    viewi1Style: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    viewi2Style: {
        flex: 6,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    viewi2_1Style: {
        flex: 1,
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 2
    },
    viewi2_dateStyle: {
        flex: 1,
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 0
    },
    textStyle: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
    }
};

export default connect(null, actions)(InputSectionView);
