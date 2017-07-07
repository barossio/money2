import {
    TYPES, KEYBOARD_TYPES
} from '../types';

const INITIAL_STATE = {
    keyboard: KEYBOARD_TYPES.ICONPAD
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.INPUT_FOCUS_ICONPAD:
            return { ...state, keyboard: KEYBOARD_TYPES.ICONPAD };
        case TYPES.INPUT_FOCUS_NUMPAD:
            return { ...state, keyboard: KEYBOARD_TYPES.NUMPAD };
        default:
            return state;
    }
};
