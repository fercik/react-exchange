import React from 'react';
import { FormHelperText } from '@material-ui/core';
import { mount } from 'enzyme';

import { TopUpComponent } from './top-up.component';

describe('TopUpComponent', () => {
    let wrapper = null;
    
    beforeEach(() => {
        wrapper = mount(<TopUpComponent />);
    });
    
    it('should show MIN VALUE error', () => {
        const inputElement = wrapper.find('input');
        const minValueErrorElement = wrapper.find('.min-value-error');
        
        inputElement.value = -12;
        inputElement.simulate('blur');
        wrapper = wrapper.update();
        // expect(minValueErrorElement.length).toBe(1);
        expect(minValueErrorElement.exists()).toBe(true);
    });
    
    xit('should show and hide error', () => {
        const wrapper = mount(<TopUpComponent />);
        
        wrapper.find('input').first().
        wrapper.setState({ topUpValue: -1 });
        wrapper.instance().validateInput();
        wrapper.update();
        
        expect(wrapper.state().form.errors.minValue).toEqual(true);
        expect(wrapper.find(FormHelperText).exists()).toEqual(true);
        
        wrapper.setState({ topUpValue: 100 });
        wrapper.instance().validateInput();
        wrapper.update();
        
        expect(wrapper.state().form.errors.minValue).toEqual(false);
        expect(wrapper.find(FormHelperText).exists()).toEqual(false);
    });
    
    xit('should clear state after CANCEL or TOP UP', () => {
        const props = {
            onConfirm: (value) => {},
            onCancel: () => {},
        };
        const wrapper = mount(
            <TopUpComponent
                onConfirm={props.onConfirm}
                onCancel={props.onCancel}
            />
        );
        
        wrapper.setState({ topUpValue: 200 });
        expect(wrapper.state().value).toEqual(200);
        
        wrapper.instance().onClickHandler();
        expect(wrapper.state().value).toEqual(100);
        
        wrapper.setState({ value: 200 });
        expect(wrapper.state().topUpValue).toEqual(200);
        
        wrapper.instance().onCancelHandler();
        expect(wrapper.state().topUpValue).toEqual(100);
    });
    
});
