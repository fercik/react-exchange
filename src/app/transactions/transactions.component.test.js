import React from 'react';
import { render, mount } from 'enzyme';

import { TransactionsComponent } from './transactions.component';
import { TransactionsItem } from './item/transactions-item.component';

it('should render with empty list', () => {
    const transactionsList = pocketId => [];
    const wrapper = mount(
        <TransactionsComponent
            pocketId='gbp'
            transactionsList={transactionsList}
        />
    );
    
    expect(wrapper.find('.empty').text()).toEqual('There are not transactions for current pocket');
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
    const wrapper = mount(
        <TransactionsComponent
            pocketId='gbp'
            transactionsList={transactionsList}
        />
    );
    
    expect(wrapper.find(TransactionsItem).length).toEqual(3);
});
