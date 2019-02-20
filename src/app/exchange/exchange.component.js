import React, { Component } from 'react';
import {
    Button, Dialog, DialogActions, DialogContent,
    DialogTitle, FormControl, Input, InputLabel,
    MenuItem, Select
} from '@material-ui/core';
import { SwapHoriz } from '@material-ui/icons';

import './exchange.component.css';

const initialState = {
    fromPocket: null,
    toPocket: null,
    baseValue: 0,
    exchangeRate: null,
    counter: 10,
};

export class ExchangeComponent extends Component {
    
    state = initialState;
    intervalHandler = null;
    
    constructor(props) {
        super(props);
        
        const { pocketsList } = props;
        this.state.fromPocket = pocketsList[0];
        this.state.toPocket = pocketsList[1];
    }
    
    onClickHandler = () => {
        const { closeExchangeDialog, addTransaction, updatePocket } = this.props;
        this.clearCounter();
        
        addTransaction(this.state.fromPocket, -this.state.baseValue, 'EXCHANGE');
        addTransaction(this.state.toPocket, this.getDestinationValue(), 'EXCHANGE');
        updatePocket(
            this.state.fromPocket.id,
            {
                balance: Number(this.state.fromPocket.balance) - Number(this.state.baseValue)
            }
        );
        updatePocket(
            this.state.toPocket.id,
            {
                balance: Number(this.state.fromPocket.balance) + Number(this.getDestinationValue())
            }
        );
        
        closeExchangeDialog();
        this.setState(initialState);
    };
    
    onCancelHandler = () => {
        const { closeExchangeDialog } = this.props;
        closeExchangeDialog();
        this.clearCounter();
        this.setState(initialState);
    };
    
    onBaseCurrencyChangeHandler = event => {
        this.setState({ fromPocket: event.target.value });
    };
    
    onDestinationCurrencyChangeHandler = event => {
        this.setState({ toPocket: event.target.value });
    };
    
    onValueChangeHandler = event => {
        const value = parseFloat(event.target.value).toFixed(2);
        
        if (!this.intervalHandler) {
            this.setCounter();
        }
        
        if (value < 0) {
            return false;
        }
        
        if (value > this.state.fromPocket.balance) {
            return false;
        }
        
        this.setState({ baseValue: event.target.value });
    };
    
    getCurrentExchangeRate = () => {
        const rate = (Math.random() * (5 - 3 + 1)).toFixed(2) + 3;
        this.setState({ exchangeRate: rate });
    };
    
    setCounter = () => {
        this.intervalHandler = setInterval(() => {
            let val = this.state.counter;
            
            if (!this.state.exchangeRate) {
                this.getCurrentExchangeRate();
            }
            
            if (val === 0) {
                this.getCurrentExchangeRate();
                this.setState({ counter: 10 });
            } else {
                this.setState({ counter: --val });
            }
        }, 1000);
    };
    
    clearCounter = () => {
        clearInterval(this.intervalHandler);
        this.intervalHandler = null;
    };
    
    displayCounter = () => {
        return this.state.counter < 10
            ? `0:0${this.state.counter}`
            : `0:${this.state.counter}`;
    };
    
    getDestinationValue = () => {
        return (this.state.baseValue * this.state.exchangeRate).toFixed(2);
    };
    
    render = () => {
        const { isDialogVisible, pocketsList } = this.props;
        
        return (
            <Dialog
                open={isDialogVisible}
                fullWidth={true}
                maxWidth='sm'
            >
                <DialogTitle>Exchange</DialogTitle>
                <DialogContent>
                    <div className="controls">
                        <FormControl className="controls__input">
                            <InputLabel>Value</InputLabel>
                            <Input
                                value={this.state.baseValue}
                                onChange={this.onValueChangeHandler}
                                fullWidth
                                type="number"
                            />
                        </FormControl>
                        
                        <FormControl className="controls__base-currency">
                            <InputLabel>Base currency</InputLabel>
                            <Select
                                value={this.state.fromPocket}
                                onChange={this.onBaseCurrencyChangeHandler}
                                fullWidth
                            >
                                {pocketsList.map((pocket, index) => <MenuItem key={index}
                                                                              value={pocket}>{pocket.label}</MenuItem>)}
                            </Select>
                        </FormControl>
                        
                        <FormControl
                            className="controls__destination-currency"
                            disabled={!this.state.fromPocket}
                        >
                            <InputLabel>Destination currency</InputLabel>
                            <Select
                                value={this.state.toPocket}
                                onChange={this.onDestinationCurrencyChangeHandler}
                                fullWidth
                            >
                                {pocketsList.filter(pocket => pocket.id !== this.state.fromPocket.id).map((pocket, index) =>
                                    <MenuItem key={index} value={pocket}>{pocket.label}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div className="result">
                        {this.state.baseValue} {this.state.fromPocket.label}
                        <SwapHoriz className="result__icon"/>
                        {this.getDestinationValue()} {this.state.toPocket.label}
                    </div>
                    
                    <div>
                        Exchange rate will change in {this.displayCounter()} seconds
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onCancelHandler}>Close</Button>
                    <Button color='secondary' onClick={this.onClickHandler}>Exchange</Button>
                </DialogActions>
            </Dialog>
        );
    };
}
