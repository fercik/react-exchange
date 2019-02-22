import React from 'react';
import { mount } from 'enzyme';

import { ExchangeComponent } from './exchange.component';

it('should display correct counter value', () => {
    const pocketsList = [
        {
            id: 'gbp',
            label: 'GBP',
            currency: 'GBP',
            symbol: '£',
            balance: 0,
        },
        {
            id: 'eur',
            label: 'EUR',
            currency: 'EUR',
            symbol: '€',
            balance: 0,
        },
        {
            id: 'usd',
            label: 'USD',
            currency: 'USD',
            symbol: '$',
            balance: 0,
        },
    ];
    const wrapper = mount(
        <ExchangeComponent
            isDialogVisible={true}
            pocketsList={pocketsList}
        />
    );
    
    wrapper.setState({ counter: 8 });
    expect(wrapper.instance().displayCounter()).toEqual('0:08');
    
    wrapper.setState({ counter: 10 });
    expect(wrapper.instance().displayCounter()).toEqual('0:10');
});
