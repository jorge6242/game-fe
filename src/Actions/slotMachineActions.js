import Slots from '../Api/Slots';
import snackBarStatus from './snackbarActions';
export const ACTIONS = {
    UPDATE_CURRENCY: 'slot_machine/update_currency',
    GET_ALL: 'slot_machine/get',
    SET_LOADING: 'slot_machine/set_loading',
};

export const updateCurrency = coins => ({ type: ACTIONS.UPDATE_CURRENCY, payload: coins });

export const getSlots = () => async dispatch => {
    dispatch({
        type: ACTIONS.SET_LOADING,
        payload: true,
    });
    try {
        const {
            data,
            status
        } = await Slots.getSlots();
        let response = [];
        if (status === 200) {
            response = data;
            dispatch({
                type: ACTIONS.GET_ALL,
                payload: response.slots[0],
            });
            dispatch({
                type: ACTIONS.SET_LOADING,
                payload: false,
            });
        }
        return response;
    } catch (error) {
        snackBarStatus({
            payload: {
                title: error.message,
                type: 'error',
                enable: true,
            },
        })(dispatch);
        dispatch({
            type: ACTIONS.SET_LOADING,
            payload: false,
        });
        return error;
    }
};