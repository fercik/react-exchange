import React from 'react';
import { shallow } from 'enzyme';

import { TransactionsComponent } from './transactions.component';
import { TransactionsItem } from './item/transactions-item.component';

describe('Transactions component', () => {
    let wrapper = null;
    
    it('should render with empty list', () => {
        const transactionsList = pocketId => [];
        const wrapper = shallow(
            <TransactionsComponent
                pocketId='gbp'
                getTransactionsByPocketId={transactionsList}
            />
        );
        
        expect(wrapper.find('.transactions--empty').text()).toEqual('There are no transactions for current pocket');
    });
    
    it('should render with 3 elements', () => {
        const transactionsList = pocketId => [
            {
                symbol: '$',
                createdAt: 1,
                value: 100,
                type: 'EXCHANGE',
                pocketId: 'usd',
            },
            {
                symbol: '€',
                createdAt: 2,
                value: 1000,
                type: 'TOP_UP',
                pocketId: 'eur',
            },
            {
                symbol: '$',
                createdAt: 3,
                value: 10,
                type: 'TOP_UP',
                pocketId: 'usd',
            },
        ];
        const wrapper = shallow(
            <TransactionsComponent
                pocketId='gbp'
                getTransactionsByPocketId={transactionsList}
            />
        );
        
        expect(wrapper.find(TransactionsItem).length).toEqual(3);
    });
    
});
