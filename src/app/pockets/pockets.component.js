import React, { Component } from 'react';
import { Tab, Tabs } from '@material-ui/core';

import PocketItemComponent from './pockets-item.component';

export class PocketsComponent extends Component {
    
    state = {
        currentTab: 0,
    };
    
    onChangeHandler = (event, value) => {
        this.setState({ currentTab: value });
    };
    
    render = () => {
        const { pockets, addTransaction, updatePocket, openExchangeDialog } = this.props;
        
        return (
            <div>
                <Tabs
                    value={this.state.currentTab}
                    onChange={this.onChangeHandler}
                >
                    {pockets.map((pocket, index) => <Tab key={index} label={pocket.label}/>)}
                </Tabs>
                <PocketItemComponent
                    pocket={pockets[this.state.currentTab]}
                    addTransaction={addTransaction}
                    updatePocket={updatePocket}
                    openExchangeDialog={openExchangeDialog}
                />
            </div>
        );
    };
}
