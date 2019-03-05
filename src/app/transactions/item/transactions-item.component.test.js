import React from 'react';
import { render } from 'enzyme';

import { TransactionsItem } from './transactions-item.component';

describe('TransactionsItemComponent', () => {
    
    it('should render without errors', () => {
        const transaction = {
            type: 'TOP_UP',
            value: 20,
            symbol: '$',
        };
        const wrapper = render(<TransactionsItem transaction={transaction} />);
        
        expect(wrapper.find('span').text()).toEqual(`${transaction.symbol} ${transaction.value}`);
        expect(wrapper.find('p').text()).toEqual(transaction.type);
    });
    
});
