import React from 'react';
import { SwapHoriz } from '@material-ui/icons';

import './display-conversion.component.css';
import { formatCurrency } from '../../shared/utils/format-currency';

export function DisplayConversionComponent({ fromPocket, value, toPocket, convertedValue }) {
    return (
        <div className="display-conversion">
            <span className="display-conversion__from">
                {formatCurrency(fromPocket.id, value)}
            </span>
            <SwapHoriz className="display-conversion__icon"/>
            <span className="display-conversion__to">
                {formatCurrency(toPocket.id, convertedValue)}
            </span>
        </div>
    );
}
