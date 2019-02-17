import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import PocketItemComponent from './pockets-item.component';

export const PocketsComponent = ({ pockets }) => (
    <SwipeableViews>
        {pockets.map((pocket, index) => <PocketItemComponent key={index} pocket={pocket}/>)}
    </SwipeableViews>
);
