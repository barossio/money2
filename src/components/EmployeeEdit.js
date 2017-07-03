import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
    static navigationOptions = {
        title: 'Employee Edit'
    };

    state = { showModal: false };

    componentWillMount() {
        if (this.props.navigation.state.params) {
            const { employee } = this.props.navigation.state.params;
             _.each(employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
            });
        }
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        const { goBack } = this.props.navigation;
        const { employee } = this.props.navigation.state.params;
        const callbackFunction = () => {
            goBack();
        };

        this.props.employeeSave(
            { name, 
                phone, 
                shift: shift || 'Monday', 
                uid: employee.uid }
        , callbackFunction);
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { goBack } = this.props.navigation;
        const { employee } = this.props.navigation.state.params;
        const callbackFunction = () => {
            goBack();
        };

        this.props.employeeDelete(
            { uid: employee.uid }
        , callbackFunction);
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        console.log('this.props.navigation', this.props.navigation);

        return (
            <Card>
                 <EmployeeForm {...this.props} />
                 <CardSection>
                      <Button onPress={this.onButtonPress.bind(this)}>
                          Save Changes
                      </Button>
                </CardSection>
                <CardSection>
                      <Button onPress={this.onTextPress.bind(this)}>
                         Text Schedule
                      </Button>
                </CardSection>
                <CardSection>
                      <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                         Fire Employee
                      </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
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
    employeeSave,
    employeeDelete
})(EmployeeEdit);
