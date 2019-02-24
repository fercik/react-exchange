import React from 'react';
import { mount } from 'enzyme';

import { ExchangeComponent } from './exchange.component';
import { initialState } from '../initital-state';

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
        <ExchangeComponent
            isDialogOpened={true}
            fromPocket={pocket}
            pocketsList={pocketsList}
            closeExchangeDialog={closeExchangeDialog}
            onConfirm={onExchangeConfirm}
        />
    );
});

it('should display minValue error', () => {
    const input = wrapper.find('input[type="number"]');
    input.instance().value = -1;
    input.simulate('blur');
    wrapper.update();
    
    expect(wrapper.state().errors.minValue).toEqual(true);
    expect(wrapper.find('.minValue').first().exists()).toEqual(true);
});

it('should display overBalance error', () => {
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 100;
    input.simulate('blur');
    wrapper.update();
    
    expect(wrapper.state().errors.overBalance).toEqual(true);
    expect(wrapper.find('.overBalance').first().exists()).toEqual(true);
});

it('should display format error', () => {
    const input = wrapper.find('input[type="number"]');
    input.instance().value = '';
    input.simulate('blur');
    wrapper.update();
    
    expect(wrapper.state().errors.format).toEqual(true);
    expect(wrapper.find('.format').first().exists()).toEqual(true);
});
