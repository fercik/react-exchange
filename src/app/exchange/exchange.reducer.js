import { CLOSE_EXCHANGE_DIALOG, OPEN_EXCHANGE_DIALOG } from './exchange.actions';

export const exchangeReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_EXCHANGE_DIALOG:
            return {
                ...state,
                isDialogVisible: action.isDialogVisible,
            };
        case CLOSE_EXCHANGE_DIALOG:
            return {
                ...state,
                isDialogVisible: action.isDialogVisible,
            };
        default:
            return state;
    }
};
