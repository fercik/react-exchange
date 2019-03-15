import React from 'react';
import { shallow } from 'enzyme';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
    
    it('should render without errors', () => {
        const currentTime = 10;
        const text = `Exchange rate will change in ${currentTime} seconds`;
        const wrapper = shallow(<CounterComponent currentTime={currentTime}/>);
        
        expect(wrapper.text()).toEqual(text);
    });
    
});
