import React from 'react';
import { CardContent, Card } from '@material-ui/core';

import './app.component.css';
import { PocketsContainer } from './pockets/pockets.container';

export function AppComponent() {
    return (
        <div className="app">
            <PocketsContainer/>
        </div>
    );
}
