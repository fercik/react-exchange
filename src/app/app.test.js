import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { initialState } from './initital-state';

const store = createStore(appReducer, initialState);

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
        <Provider store={store}>
            <AppComponent/>
        </Provider>, div);
    unmountComponentAtNode(div);
});
