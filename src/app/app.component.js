import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import './app.component.css';
import { PocketsContainer } from './pockets/pockets.container';
import { MuiThemeProviderOld } from '@material-ui/core/es/styles/MuiThemeProvider';

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
        <MuiThemeProviderOld theme={theme}>
            <div className="app">
                <PocketsContainer/>
            </div>
        </MuiThemeProviderOld>
    );
}
