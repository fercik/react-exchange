import React from 'react';

import './app.component.css';
import { PocketsContainer } from './pockets/pockets.container';

export function AppComponent() {
    return (
        <div className="app">
            <PocketsContainer/>
        </div>
    );
}
