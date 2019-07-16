import {
    ACTIONS
} from '../Actions/slotMachineActions';

const initialState = {
    currency: 20,
    slots: [],
    isLoading: true,
};

const slotMachineReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                slots: action.payload,
            };
        case ACTIONS.UPDATE_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            };
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default slotMachineReducer;