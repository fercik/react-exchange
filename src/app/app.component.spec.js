import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow } from 'enzyme';

import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { initialState } from './initital-state';

const store = createStore(appReducer, initialState);

describe('AppComponent', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        shallow(
            <Provider store={store}>
                <AppComponent/>
            </Provider>,
            div,
        );
        unmountComponentAtNode(div);
    });
    
});
