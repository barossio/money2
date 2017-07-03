import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
    static navigationOptions = {
        title: 'Employee Create'
    };

    onButtonPress() {
        const { name, phone, shift } = this.props;
        const { goBack } = this.props.navigation;
        const callbackFunction = () => {
            goBack();
        };

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' }, callbackFunction);
    }

    render() {
        console.log('this.props.navigation', this.props.navigation);

        return (
            <Card>
                 <EmployeeForm {...this.props} />
                 <CardSection>
                      <Button onPress={this.onButtonPress.bind(this)}>
                          Create
                      </Button>
                </CardSection>
            </Card>
        );
    }
}



function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { 
    employeeUpdate, 
    employeeCreate 
})(EmployeeCreate);
