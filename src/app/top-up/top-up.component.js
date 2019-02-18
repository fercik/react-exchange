import React, { Component } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormHelperText,
    TextField
} from '@material-ui/core';

const initialState = {
    topUpValue: 100,
    form: {
        errors: {
            minValue: false,
            format: false,
        },
        isValid: true,
    },
};

export class TopUpComponent extends Component {
    
    state = initialState;
    
    onChangeHandler = topUpValue => event => {
        this.setState({ [topUpValue]: event.target.value });
    };
    
    onClickHandler = () => {
        const { onConfirm } = this.props;
        onConfirm(this.state.topUpValue);
        this.clearState();
    };
    
    onCancelHandler = () => {
        const { onCancel } = this.props;
        onCancel();
        this.clearState();
    };
    
    clearState = () => {
        this.setState(initialState);
    };
    
    setMinValueError = (hasError) => {
        this.setState({
            form: {
                errors: {
                    minValue: hasError,
                },
                isValid: !hasError,
            },
        });
    };
    
    setFormatError = (isWrongFormat) => {
        this.setState({
            form: {
                errors: {
                    format: isWrongFormat,
                },
                isValid: !isWrongFormat,
            },
        });
    };
    
    clearErrors = () => {
        this.setFormatError(false);
        this.setMinValueError(false);
    };
    
    validateInput = () => {
        const val = parseFloat(this.state.topUpValue).toFixed(2);
        
        if (!val) {
            return this.setFormatError(true);
        }
        
        if (val <= 0) {
            return this.setMinValueError(true);
        }
        
        this.setState({ topUpValue: val });
        return this.clearErrors();
    };
    
    render = () => {
        const { isDialogOpened } = this.props;
        
        return (
            <Dialog
                open={isDialogOpened}
                fullWidth={true}
                maxWidth='sm'
            >
                <DialogTitle>Top up your pocket</DialogTitle>
                <DialogContent>
                    <TextField
                        id="top-up-value"
                        label="Top Up value"
                        value={this.state.topUpValue}
                        onChange={this.onChangeHandler('topUpValue')}
                        onBlur={this.validateInput}
                        type="number"
                        fullWidth
                    />
                    {this.state.form.errors.minValue &&
                    <FormHelperText error>Value must be greater than 0</FormHelperText>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onCancelHandler}>Close</Button>
                    <Button
                        color="secondary"
                        onClick={this.onClickHandler}
                        disabled={!this.state.form.isValid}
                    >Top Up</Button>
                </DialogActions>
            </Dialog>
        );
    };
}
