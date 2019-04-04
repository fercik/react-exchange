import React from 'react';
import { mount } from 'enzyme';

import { ExchangeDialogComponent } from './exchange.component';
import { initialState } from '../initital-state';

describe('ExchangeDialogComponent', () => {
    const closeExchangeDialog = () => {};
    const onExchangeConfirm = () => {};
    const pocket = {
        id: 'gbp',
        label: 'GBP',
        currency: 'GBP',
        symbol: '£',
        balance: 10,
    };
    const pocketsList = initialState.pockets.items;
    let wrapper = null;
    
    beforeEach(() => {
        wrapper = mount(
            <ExchangeDialogComponent
                fromPocket={pocket}
                pocketsList={pocketsList}
                onCancel={closeExchangeDialog}
                onConfirm={onExchangeConfirm}
            />
        );
    });
    
    it('should display minValue error', () => {
        const input = wrapper.find('input[type="number"]');
        input.instance().value = -1;
        input.simulate('blur');
        wrapper.update();
        
        expect(wrapper.find('.minValue').first().exists()).toEqual(true);
    });
    
    it('should display overBalance error', () => {
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 100;
        input.simulate('blur');
        wrapper.update();
        
        expect(wrapper.find('.overBalance').first().exists()).toEqual(true);
    });
    
});
