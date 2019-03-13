import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';

import { PocketItemComponent } from './pockets-item.component';
import { TransactionsContainer } from './../transactions/transactions.container';

export function PocketsComponent({ pockets, addTransaction, updatePocket }) {
    const [currentTab, setCurrentTab] = useState(0);
    
    function tabChangeHandler(event, value) {
        setCurrentTab(value);
    }
    
    function getPocket(pockets) {
        return pockets[currentTab];
    }
    
    return (
        <React.Fragment>
            <Tabs
                value={currentTab}
                onChange={tabChangeHandler}
            >
                {pockets.map(pocket => <Tab key={pocket.id} label={pocket.label}/>)}
            </Tabs>
            <PocketItemComponent
                pocket={getPocket(pockets)}
                pocketsList={pockets}
                addTransaction={addTransaction}
                updatePocket={updatePocket}
            />
            <TransactionsContainer pocketId={getPocket(pockets).id} />
        </React.Fragment>
    );
}
