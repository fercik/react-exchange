import { TOP_UP_POCKET, UPDATE_POCKET } from './pockets.actions';

export const pocketsReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POCKET:
            return {
                ...state,
                items: state
                    .items
                    .filter(pocket => pocket.id === action.data.id)
                    .map(pocket => ({ ...pocket, ...action.data }))
            };
        case TOP_UP_POCKET:
            return {
                items: state
                    .items
                    .map(pocket => {
                        if (pocket.id === action.pocketId) {
                            return {
                                ...pocket,
                                balance: Number(pocket.balance) + Number(action.balance),
                            };
                        }
                        
                        return pocket;
                    }),
            };
        default:
            return state;
    }
};
