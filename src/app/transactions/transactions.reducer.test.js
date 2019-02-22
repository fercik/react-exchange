import { transactionsReducer } from './transactions.reducer';
import { ADD_TRANSACTION } from './transactions.actions';

it('should return default state when invalid action was dispatched', () => {
    const defaultState = [];
    const action = {
        type: 'REMOVE_TRANSACTION',
        transactionId: 'test'
    };
    
    expect(
        transactionsReducer(undefined, action),
    ).toEqual(defaultState);
});

it('should add transaction', () => {
    const stateBefore = [];
    const stateAfter = [
        {
            symbol: '$',
            createdAt: 1,
            value: 10,
            type: 'TOP_UP',
            pocketId: 'usd',
        },
    ];
    const action = {
        type: ADD_TRANSACTION,
        data: {
            symbol: '$',
            createdAt: 1,
            value: 10,
            type: 'TOP_UP',
            pocketId: 'usd',
        },
    };
    
    expect(
        transactionsReducer(stateBefore, action),
    ).toEqual(stateAfter);
});
