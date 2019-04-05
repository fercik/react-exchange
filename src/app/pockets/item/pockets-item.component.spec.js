import React from 'react';
import { mount } from 'enzyme';

import { PocketItemComponent } from './pockets-item.component';
import { TopUpComponent } from '../../top-up/top-up.component';
import { ExchangeDialogComponent } from '../../exchange/exchange.component';

describe('PocketItemComponent', () => {
    const props = {
        pocket: {
            id: 'gbp',
            label: 'GBP',
            currency: 'GBP',
            symbol: '£',
            balance: 10,
        },
        pocketsList: [
            {
                id: 'gbp',
                label: 'GBP',
                currency: 'GBP',
                symbol: '£',
                balance: 10,
            },
            {
                id: 'usd',
                label: 'USD',
                currency: 'USD',
                symbol: '$',
                balance: 10,
            }
        ],
        addTransaction: () => {},
        updatePocket: () => {},
    };
    let wrapper = null;
    
    it('should display correct balance', () => {
        wrapper = mount(<PocketItemComponent {...props} />);
        
        expect(wrapper.find('h3').text()).toEqual('£10.00');
    });
    
    it('should render TopUp dialog', () => {
        wrapper = mount(<PocketItemComponent {...props} />);
        wrapper.find('.top-up-button').first().simulate('click');
        
        expect(wrapper.find(TopUpComponent).exists()).toBe(true);
    });
    
    it('should render Exchange dialog', () => {
        wrapper = mount(<PocketItemComponent {...props} />);
        console.log(wrapper.find('.exchange-button').first());
        wrapper.find('.exchange-button').first().simulate('click');
        
        expect(wrapper.find(ExchangeDialogComponent).exists()).toBe(true);
    });
    
});
