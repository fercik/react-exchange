import { combineReducers } from 'redux';

import { pocketsReducer } from './pockets/pockets.reducer';
import { transactionsReducer } from './transactions/transactions.reducer';
import { exchangeReducer } from './exchange/exchange.reducer';

export const appReducer = combineReducers({
    pockets: pocketsReducer,
    transactions: transactionsReducer,
    exchange: exchangeReducer,
});
