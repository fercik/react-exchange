import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export class TopUpComponent extends Component {
    
    state = {
        topUpAmount: 0,
        fullWidth: true,
        maxWidth: 'sm',
    };
    
    onChangeHandler = topUpAmount => event => {
        console.log(topUpAmount, event);
        this.setState({ [topUpAmount]: event.target.value });
    };
    
    render() {
        const { isDialogOpened, onBackdropClick, onConfirm, onCancel } = this.props;
        
        return (
            <Dialog
                open={isDialogOpened}
                onBackdropClick={onBackdropClick}
                fullWidth={this.state.fullWidth}
                maxWidth={this.state.maxWidth}
            >
                <DialogTitle>Top up your pocket</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="top-up-amount"
                            label="Top Up amount"
                            value={this.state.topUpAmount}
                            onChange={this.onChangeHandler('topUpAmount')}
                            type="number"
                            fullWidth
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel}>Close</Button>
                    <Button color="secondary" onClick={() => onConfirm(this.state.topUpAmount)}>Top Up</Button>
                </DialogActions>
            </Dialog>
        );
    }
}
