import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

const styles = {
        textHeaderRightStyle: {
            marginRight: 10,
            color: '#007aff',
            fontSize: 16,
            fontWeight: '600',
        }
    };

class EmployeeList extends React.Component {
    static navigationOptions = function (props) {
        const { navigate } = props.navigation;
        return {
            title: 'Employee List',
            headerRight: (
                <TouchableOpacity onPress={() => navigate('EmployeeCreate')}>
                <Text style={styles.textHeaderRightStyle}>
                    Add
                </Text>
                </TouchableOpacity>
            )
        };
    }

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        const { navigation } = this.props;
        //console.log('navigation', navigation);
        return <ListItem navigation={navigation} employee={employee} />;
    }

    render() {
        //console.log('props', this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
