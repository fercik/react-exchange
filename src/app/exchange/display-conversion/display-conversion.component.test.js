import React from 'react';
import { shallow } from 'enzyme';

import { DisplayConversionComponent } from './display-conversion.component';

describe('DisplayConversionComponent', () => {
    
    it('should display correct values', () => {
        const props = {
            fromPocket: {
                id: 'gbp',
                label: 'GBP',
                currency: 'GBP',
                symbol: '£',
                balance: 0,
                locale: 'en-GB',
            },
            value: 10,
            toPocket: {
                id: 'eur',
                label: 'EUR',
                currency: 'EUR',
                symbol: '€',
                balance: 0,
                locale: 'en-US',
            },
            convertedValue: 15,
        };
        const wrapper = shallow(<DisplayConversionComponent {...props} />);
        const from = wrapper.find('.display-conversion__from');
        const to = wrapper.find('.display-conversion__to');
        
        expect(from.text()).toEqual(`${props.fromPocket.symbol}10.00`);
        expect(to.text()).toEqual(`${props.toPocket.symbol}15.00`);
    });
    
});
