import React from 'react';
import { mount } from 'enzyme';

import { TopUpComponent } from './top-up.component';
import { FormHelperText } from '@material-ui/core';

it('should render opened', () => {
    const props = {
        isDialogOpened: true,
    };
    const wrapper = mount(<TopUpComponent isDialogOpened={props.isDialogOpened}/>);
    
    expect(wrapper.props().isDialogOpened).toEqual(true);
});

it('should show and hide error', () => {
    const props = {
        isDialogOpened: true,
    };
    const wrapper = mount(<TopUpComponent isDialogOpened={props.isDialogOpened}/>);
    
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

it('should clear state after CANCEL or TOP UP', () => {
    const props = {
        isDialogOpened: true,
        onConfirm: (value) => {},
        onCancel: () => {},
    };
    const wrapper = mount(
        <TopUpComponent
            isDialogOpened={props.isDialogOpened}
            onConfirm={props.onConfirm}
            onCancel={props.onCancel}
        />
    );
    
    wrapper.setState({ topUpValue: 200 });
    expect(wrapper.state().topUpValue).toEqual(200);
    
    wrapper.instance().onClickHandler();
    expect(wrapper.state().topUpValue).toEqual(100);
    
    wrapper.setState({ topUpValue: 200 });
    expect(wrapper.state().topUpValue).toEqual(200);
    
    wrapper.instance().onCancelHandler();
    expect(wrapper.state().topUpValue).toEqual(100);
});
