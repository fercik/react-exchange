import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export class TopUpComponent extends Component {
    
    state = {
        topUpAmount: 0,
    };
    
    onChangeHandler = topUpAmount => event => {
        this.setState({ [topUpAmount]: event.target.value });
    };
    
    onClickHandler = () => {
        const { onConfirm } = this.props;
        onConfirm(this.state.topUpAmount);
        this.clearState();
    };
    
    clearState = () => {
        this.setState({ topUpAmount: 0 });
    };
    
    render() {
        const { isDialogOpened, onBackdropClick, onCancel } = this.props;
        
        return (
            <Dialog
                open={isDialogOpened}
                onBackdropClick={onBackdropClick}
                fullWidth={true}
                maxWidth='sm'
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
                    <Button color="secondary" onClick={this.onClickHandler}>Top Up</Button>
                </DialogActions>
            </Dialog>
        );
    }
}
