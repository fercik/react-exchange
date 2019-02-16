import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import { AppComponent } from './app/app.component';
import * as serviceWorker from './serviceWorker';
import { appReducer} from './app/app.reducer';
import { initialState } from './app/initital-state';

const store = createStore(appReducer, initialState);

render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
