import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { configFirebase } from './config';
import RouterComponent from './Router';

class App extends React.Component {
    componentWillMount() {
        const config = configFirebase;
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
