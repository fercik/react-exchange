import React from 'react';

import './app.css';
import { PocketsContainer } from './pockets/pockets.container';
import { ExchangeContainer } from './exchange/exchange.container';

export const AppComponent = () => (
    <div className="app">
        <PocketsContainer/>
        <ExchangeContainer />
    </div>
);
