import React from 'react';
import { View, Text, Picker, Platform } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Input, CardSection } from './common';

class EmployeeForm extends React.Component {
    render() {
        return (
        <View>
             <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => 
                        this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="088-888-8888"
                        value={this.props.phone}
                        onChangeText={text => 
                        this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={(value) => 
                        this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
        </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerStyle: {
        
    }
};

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
