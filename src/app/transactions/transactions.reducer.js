import { ADD_TRANSACTION } from './transactions.actions';

export const transactionsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return [
                ...state,
                action.data,
            ]
                .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
        default:
            return state;
    }
};
