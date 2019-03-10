import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormHelperText,
    TextField
} from '@material-ui/core';

export function TopUpComponent({ onConfirm, onCancel }) {
    const [value, setValue] = useState(100);
    const [inputValue, setInputValue] = useState(100);
    const [minValueError, setMinValueError] = useState(false);
    const [formatError, setFormatError] = useState(false);
    const inputProps = {
        min: 0,
    };
    
    function valueInputChangeHandler(event) {
        setInputValue(event.target.value);
    }
    
    function valueInputBlurHandler(event) {
        validateInput(event.target.value);
    }
    
    function validateInput(inputValue) {
        const val = parseFloat(inputValue);
        
        if (!val) {
            return setFormatError(true);
        }
        
        if (val <= 0) {
            return setMinValueError(true);
        }
        
        setValue(val);
        return clearErrors();
    }
    
    function clearErrors() {
        setMinValueError(false);
        setFormatError(false);
    }
    
    function isFormInvalid() {
        return minValueError || formatError;
    }
    
    function confirmButtonClickHandler() {
        onConfirm(value);
    }
    
    function cancelButtonClickHandler() {
        onCancel();
    }
    
    return (
        <Dialog
            open={true}
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle>Top up your pocket</DialogTitle>
            <DialogContent>
                <TextField
                    id="top-up-value"
                    label="Top Up value"
                    value={inputValue}
                    onChange={valueInputChangeHandler}
                    onBlur={valueInputBlurHandler}
                    type="number"
                    inputProps={inputProps}
                    fullWidth
                />
                {minValueError && <FormHelperText className="min-value-error" error>Value must be greater than 0</FormHelperText>}
                {formatError && <FormHelperText className="format-error" error>Invalid format. Value must be a number</FormHelperText>}
            </DialogContent>
            <DialogActions>
                <Button onClick={cancelButtonClickHandler}>Close</Button>
                <Button
                    className="confirm-button"
                    color="secondary"
                    onClick={confirmButtonClickHandler}
                    disabled={isFormInvalid()}
                >Top Up</Button>
            </DialogActions>
        </Dialog>
    );
}
