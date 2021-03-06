import { transactionsReducer } from './transactions.reducer';
import { addTransaction } from '../actions/transactions.actions';

describe('Transactions reducer', () => {
    const pocket = {
        id: 'usd',
        label: 'USD',
        currency: 'USD',
        symbol: '$',
        balance: 0,
    };
    
    it('should return default state when invalid action was dispatched', () => {
        const defaultState = [];
        const action = {
            type: 'REMOVE_TRANSACTION',
            transactionId: 'test'
        };
        
        expect(transactionsReducer(undefined, action)).toEqual(defaultState);
    });
    
    it('should add transaction', () => {
        const stateBefore = [];
        const action = addTransaction(pocket, 10, 'TOP_UP');
        const stateAfter = [
            {
                createdAt: action.data.createdAt,
                value: 10,
                type: 'TOP_UP',
                pocketId: 'usd',
                currency: 'USD'
            },
        ];
        
        expect(transactionsReducer(stateBefore, action)).toEqual(stateAfter);
    });
    
    it('should return sorted transactions', () => {
        let stateBefore = [];
        const action1 = addTransaction(pocket, 10, 'TOP_UP');
        const action2 = addTransaction(pocket, 10, 'TOP_UP');
        const stateAfter = [
            {
                createdAt: action2.data.createdAt,
                value: 10,
                type: 'TOP_UP',
                pocketId: 'usd',
                currency: 'USD',
            },
            {
                createdAt: action1.data.createdAt,
                value: 10,
                type: 'TOP_UP',
                pocketId: 'usd',
                currency: 'USD',
            },
        ];
        
        stateBefore = transactionsReducer(stateBefore, action1);
        stateBefore = transactionsReducer(stateBefore, action2);
    
        expect(stateBefore).toEqual(stateAfter);
    });
    
});
