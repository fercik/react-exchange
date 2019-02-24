import React from 'react';
import { SwapHoriz } from '@material-ui/icons';

import './result.component.css';

export const ResultComponent = ({ baseValue, fromLabel, destinationValue, toLabel }) => (
    <div className="result">
        <span className="left">{Number(baseValue).toFixed(2)} {fromLabel}</span>
        <SwapHoriz className="result__icon"/>
        <span className="right">{Number(destinationValue).toFixed(2)} {toLabel}</span>
    </div>
);
