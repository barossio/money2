import { combineReducers } from 'redux';
import InputFormReducer from './InputFormReducer';

export default combineReducers({
    inputForm: InputFormReducer,
});
