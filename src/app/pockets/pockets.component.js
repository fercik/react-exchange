import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import PocketItemComponent from './pockets-item.component';

export const PocketsComponent = ({ pockets, topUpPocket, addTopUpTransaction }) => (
    <SwipeableViews>
        {
            pockets.map(
                (pocket, index) =>
                    <PocketItemComponent
                        key={index}
                        pocket={pocket}
                        topUpPocket={topUpPocket}
                        addTopUpTransaction={addTopUpTransaction}
                    />
                )
        }
    </SwipeableViews>
);
