import { CHANGE_POCKET, TOP_UP_POCKET, UPDATE_POCKET } from './pockets.actions';

export const pocketsReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_POCKET:
            return {
                ...state,
                visibleItem: action.visibleItem,
            };
        case UPDATE_POCKET:
            return state
                .items
                .filter(pocket => pocket.id === action.data.id)
                .map(pocket => ({ ...pocket, ...action.data }));
        case TOP_UP_POCKET:
            return {
                ...state,
                items: state
                    .items
                    .filter(pocket => pocket.id === action.pocketId)
                    .map(pocket => ({ ...pocket, balance: Number(pocket.balance) + Number(action.balance) }))
            };
        default:
            return state;
    }
};
