import { combineReducers } from 'redux';

import { pocketsReducer } from './pockets/reducer/pockets.reducer';
import { transactionsReducer } from './transactions/reducer/transactions.reducer';

export const appReducer = combineReducers({
    pockets: pocketsReducer,
    transactions: transactionsReducer,
});
