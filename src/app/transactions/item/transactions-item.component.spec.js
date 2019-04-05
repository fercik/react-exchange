import React from 'react';
import { render } from 'enzyme';

import { TransactionsItem } from './transactions-item.component';

describe('TransactionsItemComponent', () => {
    
    it('should render without errors', () => {
        const transaction = {
            type: 'TOP_UP',
            value: 20,
            symbol: '$',
            currency: 'USD',
        };
        const wrapper = render(<TransactionsItem transaction={transaction} />);
        
        expect(wrapper.find('.transactions-item__title').text()).toEqual(`$20.00`);
        expect(wrapper.find('.transactions-item__subheader').text()).toEqual(transaction.type);
    });
    
});
