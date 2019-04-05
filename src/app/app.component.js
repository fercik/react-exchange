import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import './app.component.css';
import { PocketsContainer } from './pockets/pockets.container';
import { MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1E88E5',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

export function AppComponent() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="app">
                <PocketsContainer/>
            </div>
        </MuiThemeProvider>
    );
}
