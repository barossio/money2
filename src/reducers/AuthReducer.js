import { EMAIL_CHANGED } from '../types';

const INITIAL_STATE = { email: '' };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        default:
            return state;
    }
}
