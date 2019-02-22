import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { AppComponent } from './app.component';

xit('renders without crashing', () => {
    const div = document.createElement('div');
    render(<AppComponent/>, div);
    unmountComponentAtNode(div);
});
