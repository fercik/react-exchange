import React, { Component } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl, InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';

export class ExchangeComponent extends Component {
    
    state = {
        from: '',
        to: '',
        baseValue: 0,
        destinationValue: 0,
        exchangeRate: 1,
    };
    
    onClickHandler = () => {
        const { closeExchangeDialog } = this.props;
        closeExchangeDialog();
    };
    
    onCancelHandler = () => {
        const { closeExchangeDialog } = this.props;
        closeExchangeDialog();
    };
    
    onBaseCurrencyChangeHandler = event => {
        this.setState({ from: event.target.value });
    };
    
    onDestinationCurrencyChangeHandler = event => {
        this.setState({ to: event.target.value });
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
                    <FormControl fullWidth>
                        <InputLabel>Base currency</InputLabel>
                        <Select
                            value={this.state.from}
                            onChange={this.onBaseCurrencyChangeHandler}
                            fullWidth
                        >
                            {pocketsList.map((pocket, index) => <MenuItem key={index}
                                                                          value={pocket.id}>{pocket.label}</MenuItem>)}
                        </Select>
                    </FormControl>
                    
                    <FormControl fullWidth>
                        <InputLabel>Destination currency</InputLabel>
                        <Select
                            value={this.state.to}
                            onChange={this.onDestinationCurrencyChangeHandler}
                            fullWidth
                        >
                            {pocketsList.filter(pocket => pocket.id !== this.state.from).map((pocket, index) =>
                                <MenuItem key={index} value={pocket.id}>{pocket.label}</MenuItem>)}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onCancelHandler}>Close</Button>
                    <Button color='secondary' onClick={this.onClickHandler}>Exchange</Button>
                </DialogActions>
            </Dialog>
        );
    };
}
