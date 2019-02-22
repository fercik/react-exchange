import React from 'react';
import { render } from 'enzyme';

import { CounterComponent } from './counter.component';

it('should render without errors', () => {
    const currentTime = 10;
    const text = `Exchange rate will change in ${currentTime} seconds`;
    const wrapper = render(<CounterComponent currentTime={currentTime}/>);
    
    expect(wrapper.text()).toEqual(text);
});
