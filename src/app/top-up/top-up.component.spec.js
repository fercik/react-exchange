import React from 'react';
import { mount } from 'enzyme';

import { TopUpComponent } from './top-up.component';

describe('TopUpComponent', () => {
    const props = {
        onConfirm: (value) => {},
        onCancel: () => {},
    };
    let wrapper = null;
    
    beforeEach(() => {
        wrapper = mount(<TopUpComponent {...props}/>);
    });
    
    afterEach(() => {
        wrapper.unmount();
    });
    
    it('should show MIN VALUE error', () => {
        wrapper.find('input').simulate('change', { target: { value: -1 } });
        wrapper.find('input').simulate('blur');
        wrapper.update();
        expect(wrapper.find('.min-value-error').exists()).toBe(true);
    });
    
    it('should show FORMAT error', () => {
        wrapper.find('input').simulate('change', { target: { value: 's' } });
        wrapper.find('input').simulate('blur');
        wrapper.update();
        expect(wrapper.find('.format-error').exists()).toBe(true);
    });
    
    it('should have disabled confirm button', () => {
        wrapper.find('input').simulate('change', { target: { value: -1 } });
        wrapper.find('input').simulate('blur');
        wrapper.update();
        expect(wrapper.find('.confirm-button').first().prop('disabled')).toBe(true);
    });
    
});
