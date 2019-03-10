import React, { Component } from 'react';
import {
    Button, Dialog, DialogActions, DialogContent,
    DialogTitle, FormControl, FormHelperText, Input,
    InputLabel, MenuItem, Select,
} from '@material-ui/core';
import axios from 'axios';

import './exchange.component.css';
import { ResultComponent } from './result/result.component';
import { CounterComponent } from './counter/counter.component';

const initialState = {
    baseValue: 1,
    destinationValue: 1,
    selectedCurrency: '',
    exchangeRate: 1,
    counter: 10,
    disabled: {
        confirmButton: true,
    },
    errors: {
        minValue: false,
        overBalance: false,
        format: false,
    },
    isFormValid: false,
};

export class ExchangeComponent extends Component {
    
    state = initialState;
    intervalHandler = null;
    
    clearState = () => {
        this.setState(initialState);
    };
    
    startInterval = () => {
        this.clearInterval();
        
        this.intervalHandler = setInterval(() => {
            let counter = this.state.counter;
            
            if (counter === 10) {
                this.getExchangeRate();
            }
            
            if (this.state.counter === 0) {
                this.setState({ counter: 10 });
            } else {
                this.setState({ counter: --counter });
            }
        }, 1000);
    };
    
    clearInterval = () => {
        clearInterval(this.intervalHandler);
        this.intervalHandler = null;
        this.setState({ counter: 10 });
    };
    
    closeDialog = () => {
        const { closeExchangeDialog } = this.props;
        closeExchangeDialog();
        this.clearState();
        this.clearInterval();
    };
    
    confirmDialog = () => {
        const { closeExchangeDialog, onConfirm } = this.props;
        
        onConfirm(this.state.baseValue, this.state.destinationValue, this.state.selectedCurrency);
        closeExchangeDialog();
        this.clearState();
        this.clearInterval();
    };
    
    inputOnChangeHandler = event => {
        const value = parseFloat(event.target.value).toFixed(2);
        this.setState({ baseValue: value });
        this.updateDestinationValue(value, this.state.exchangeRate);
    };
    
    inputOnBlurHandler = event => {
        const { fromPocket } = this.props;
        const value = parseFloat(event.target.value);
        
        if (Number.isNaN(value)) {
            return this.setError('format', true);
        }
        
        if (value < 1) {
            return this.setError('minValue', true);
        }
        
        if (fromPocket.balance < value) {
            return this.setError('overBalance', true);
        }
        
        this.setState({ baseValue: value, disabled: { confirmButton: !value || !this.state.selectedCurrency } });
        return this.clearErrors();
    };
    
    selectOnChangeHandler = event => {
        this.clearInterval();
        this.setState({ selectedCurrency: event.target.value });
        this.startInterval();
    };
    
    setError = (key, value) => {
        this.setState({ errors: { [key]: value }, disabled: { confirmButton: true }});
    };
    
    clearErrors = () => {
        this.setState({ errors: { minValue: false, overBalance: false, format: false }});
    };
    
    getExchangeRate = () => {
        const { fromPocket } = this.props;
        const base = fromPocket.id.toUpperCase();
        const selectedCurrency = this.state.selectedCurrency;
        const destination = selectedCurrency.id.toUpperCase();
        
        this.setState({ disabled: { confirmButton: true } });
        
        axios
            .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${destination}`)
            .then(result => {
                const exchangeRate = result.data.rates[destination];
                
                this.setState({ exchangeRate, disabled: { confirmButton: !this.state.baseValue && !this.state.selectedCurrency } });
                this.updateDestinationValue(this.state.baseValue, exchangeRate);
            });
    };
    
    updateDestinationValue = (baseValue, exchangeRate) => {
        this.setState({ destinationValue: Number(baseValue * exchangeRate).toFixed(2) });
    };
    
    render = () => {
        const { isDialogOpened, pocketsList, fromPocket } = this.props;
        
        return (
            <Dialog
                open={isDialogOpened}
                fullWidth={true}
                maxWidth='sm'
            >
                <DialogTitle>Exchange</DialogTitle>
                <DialogContent>
                    <div>
                        <FormControl className="control">
                            <InputLabel>Value</InputLabel>
                            <Input
                                className="base-value"
                                type="number"
                                onChange={this.inputOnChangeHandler}
                                onBlur={this.inputOnBlurHandler}
                            />
                            
                            {this.state.errors.minValue &&
                                <FormHelperText className="minValue" error>Value must be greater than 0</FormHelperText>
                            }
    
                            {this.state.errors.overBalance &&
                                <FormHelperText className="overBalance" error>Value is greater than pocket balance</FormHelperText>
                            }
    
                            {this.state.errors.format &&
                                <FormHelperText className="format" error>Value must be a number</FormHelperText>
                            }
                        </FormControl>
                        
                        <FormControl className="control">
                            <InputLabel>Destination currency</InputLabel>
                            <Select
                                className="destination-currency"
                                value={this.state.selectedCurrency}
                                onChange={this.selectOnChangeHandler}
                            >
                                {pocketsList
                                    .filter(pocket => pocket.id !== fromPocket.id)
                                    .map(pocket => <MenuItem key={pocket.id} value={pocket}>{pocket.label}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                    
                    {this.state.selectedCurrency &&
                        <ResultComponent
                            baseValue={this.state.baseValue}
                            fromLabel={fromPocket.label}
                            toLabel={this.state.selectedCurrency.label}
                            destinationValue={this.state.destinationValue}
                        />
                    }
    
                    {this.state.selectedCurrency &&
                        <CounterComponent currentTime={this.state.counter} />
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeDialog}>Close</Button>
                    <Button
                        color='secondary'
                        onClick={this.confirmDialog}
                        disabled={this.state.disabled.confirmButton}
                    >
                        Exchange
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };
}
