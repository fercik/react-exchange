import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import PocketItemComponent from './pockets-item.component';
import { TopUpComponent } from '../top-up/top-up.component';

export const PocketsComponent = ({ pockets }) => (
    <SwipeableViews enableMouseEvents>
        {pockets.map((pocket, index) => <PocketItemComponent key={index} pocket={pocket}/>)}
        {/*<TopUpComponent/>*/}
    </SwipeableViews>
);
