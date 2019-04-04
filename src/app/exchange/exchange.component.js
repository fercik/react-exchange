import React, { useState, useEffect } from 'react';
import {
    Button, Dialog, DialogActions, DialogContent,
    DialogTitle, FormControl, FormHelperText, Input,
    InputLabel, MenuItem, Select,
} from '@material-ui/core';
import axios from 'axios';

import './exchange.component.css';
import { ResultComponent } from './result/result.component';
import { CounterComponent } from './counter/counter.component';
import { convert } from '../shared/utils/convert-currency/convert-currency';
import { DisplayConversionComponent } from './display-conversion/display-conversion.component';

export function ExchangeDialogComponent({ fromPocket, pocketsList, onConfirm, onCancel }) {
    const [value, setValue] = useState(0);
    const [rates, setRates] = useState({});
    const [exchangeRate, setExchangeRate] = useState(0);
    const [counter, setCounter] = useState(10);
    const [selectedCurrency, setSelectedCurrency] = useState({});
    const [inputValue, setInputValue] = useState(100);
    const [minValueError, setMinValueError] = useState(false);
    const [overBalanceError, setOverBalanceError] = useState(false);
    
    const COUNTER_TIMER_MILIS = 1000;
    const HTTP_TIMER_MILIS = 10000;
    const inputProps = {
        min: 0,
    };
    
    useEffect(() => {
        const otherPockets = pocketsList.filter(pocket => pocket.id !== fromPocket.id);
        setSelectedCurrency(otherPockets[0]);
    }, [pocketsList]);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((counter + 10) % 11);
        }, COUNTER_TIMER_MILIS);
        
        return () => clearInterval(timer);
    }, [counter]);
    
    useEffect(() => {
        const timer = setInterval(() => {
            getData();
        }, HTTP_TIMER_MILIS);
        
        return () => clearInterval(timer);
    }, [selectedCurrency, rates]);
    
    function closeDialog() {
        onCancel();
    }
    
    function confirmDialog() {
        onConfirm(value, value * exchangeRate, selectedCurrency);
    }
    
    function getData() {
        const base = fromPocket.id.toUpperCase();
        
        axios
            .get(`https://api.exchangeratesapi.io/latest?base=GBP`)
            .then(result => {
                setRates(result.data.rates);
                setExchangeRate(convert(result.data.rates, fromPocket.id, selectedCurrency.id));
            });
    }
    
    function inputOnChangeHandler(event) {
        setValue(event.target.value);
    }
    
    function inputOnBlurHandler(event) {
        if (event.target.value < inputProps.min) {
            return setMinValueError(true);
        }
    
        if (event.target.value > fromPocket.balance) {
            return setOverBalanceError(true);
        }
        
        setMinValueError(false);
        setOverBalanceError(false);
    }
    
    function selectOnChangeHandler(event) {
        setSelectedCurrency(event.target.value);
        setExchangeRate(convert(rates, fromPocket.id, event.target.value.id));
    }
    
    function renderErrorMessage(className, message) {
        return (<FormHelperText className={className} error>{message}</FormHelperText>);
    }
    
    function renderInput() {
        return (
            <FormControl className="control">
                <InputLabel>Value</InputLabel>
                <Input
                    className="base-value"
                    type="number"
                    onChange={inputOnChangeHandler}
                    onBlur={inputOnBlurHandler}
                    inputProps={inputProps}
                    required
                />
                
                {minValueError && renderErrorMessage('minValue', 'Value must be greater than 0')}
                {overBalanceError && renderErrorMessage('overBalance', 'Value is greater than pocket balance')}
            </FormControl>
        );
    }
    
    function renderSelect() {
        return (
            <FormControl className="control">
                <InputLabel>Destination currency</InputLabel>
                <Select
                    className="destination-currency"
                    value={selectedCurrency}
                    onChange={selectOnChangeHandler}
                >
                    {pocketsList
                        .filter(pocket => pocket.id !== fromPocket.id)
                        .map(pocket => <MenuItem key={pocket.id} value={pocket}>{pocket.label}</MenuItem>)
                    }
                </Select>
            </FormControl>
        );
    }
    
    return (
        <Dialog
            open={true}
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle>Exchange</DialogTitle>
            <DialogContent>
                <div>
                    {renderInput()}
                    {renderSelect()}
                    <DisplayConversionComponent
                        value={value}
                        fromPocket={fromPocket}
                        toPocket={selectedCurrency}
                        convertedValue={value * exchangeRate}
                    />
                </div>
                <CounterComponent currentTime={counter}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Close</Button>
                <Button
                    color='secondary'
                    onClick={confirmDialog}
                >
                    Exchange
                </Button>
            </DialogActions>
        </Dialog>
    );
}
