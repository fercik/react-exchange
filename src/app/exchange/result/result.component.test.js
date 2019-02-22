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
    const wrapper = render(
        <ResultComponent
            toLabel={props.toLabel}
            fromLabel={props.fromLabel}
            baseValue={props.baseValue}
            destinationValue={props.destinationValue}
        />
    );
    
    expect(wrapper.find('.left').text()).toEqual(`${props.baseValue} ${props.fromLabel}`);
    expect(wrapper.find('.right').text()).toEqual(`${props.destinationValue} ${props.toLabel}`);
});
