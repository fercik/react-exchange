import React from 'react';
import { render } from 'enzyme';

import { ResultComponent } from './result.component';

it('should render without errors', () => {
    const props = {
        toLabel: 'EUR',
        fromLabel: 'GBP',
        baseValue: 10,
        destinationValue: 15,
    };
    const expectedProps = {
        toLabel: 'EUR',
        fromLabel: 'GBP',
        baseValue: '10.00',
        destinationValue: '15.00',
    };
    const wrapper = render(
        <ResultComponent
            toLabel={props.toLabel}
            fromLabel={props.fromLabel}
            baseValue={props.baseValue}
            destinationValue={props.destinationValue}
        />
    );
    
    expect(wrapper.find('.left').text()).toEqual(`${expectedProps.baseValue} ${expectedProps.fromLabel}`);
    expect(wrapper.find('.right').text()).toEqual(`${expectedProps.destinationValue} ${expectedProps.toLabel}`);
});
