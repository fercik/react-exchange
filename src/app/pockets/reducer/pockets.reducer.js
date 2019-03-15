import { UPDATE_POCKET } from './../actions/pockets.actions';

export const pocketsReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POCKET:
            return {
                items: state
                    .items
                    .map(pocket =>
                        pocket.id === action.pocketId
                            ? { ...pocket, ...action.data }
                            : pocket
                    )
            };
        default:
            return state;
    }
};
