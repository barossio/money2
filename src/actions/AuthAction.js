import firebase from 'firebase';
import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER 
} from '../types';

export function emailChanged(text) {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export function passwordChanged(text) {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export function loginUser({ email, password }, callback) {
    return function (dispatch) {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, callback))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user, callback))
                    .catch(() => loginUserFail(dispatch));
            });
    };
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user, callback) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    callback();
};
