import { getTransactionsByPocketId } from './transactions.actions';

describe('Transactions actions', () => {
    
    it('should return transactions list for specified pocket', () => {
        const transactions = getTransactionsByPocketId([], 'usd');
        
        expect(transactions).toEqual([]);
    });
    
});
