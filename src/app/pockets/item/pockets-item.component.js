import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';

import { TopUpComponent } from '../../top-up/top-up.component';
import { ExchangeComponent } from '../../exchange/exchange.component';
import { formatCurrency } from '../../shared/utils/format-currency';

const styles = {
    header: {
        color: '#1E88E5',
        padding: '64px',
        textAlign: 'center',
    },
    actions: {
        marginBottom: '16px',
    },
};

export function PocketItemComponent({ pocket, pocketsList, addTransaction, updatePocket }) {
    const [isTopUpDialogOpened, setTopUpDialogOpened] = useState(false);
    const [isExchangeDialogOpened, setExchangeDialogOpened] = useState(false);
    
    function openTopUpDialog() {
        setTopUpDialogOpened(true);
    }
    
    function openExchangeDialog() {
        setExchangeDialogOpened(true);
    }
    
    function onTopUpConfirm(value) {
        addTransaction(pocket, value, 'TOP_UP');
        updatePocket(pocket.id, { balance: parseFloat(pocket.balance) + parseFloat(value) });
        setTopUpDialogOpened(false);
    }
    
    function onTopUpCancel() {
        setTopUpDialogOpened(false);
    }
    
    function renderTopUpDialog() {
        return isTopUpDialogOpened &&
            <TopUpComponent
                onConfirm={onTopUpConfirm}
                onCancel={onTopUpCancel}
            />;
    }
    
    function onExchangeConfirm(value, convertedValue, toPocket) {
        addTransaction(pocket, -value, 'EXCHANGE');
        addTransaction(toPocket, convertedValue, 'EXCHANGE');
        updatePocket(pocket.id, { balance: Number(pocket.balance - value) });
        updatePocket(toPocket.id, { balance: Number(toPocket.balance + convertedValue) });
        setExchangeDialogOpened(false);
    }
    
    function onExchangeCancel() {
        setExchangeDialogOpened(false);
    }
    
    function renderExchangeDialog() {
        return isExchangeDialogOpened &&
            <ExchangeComponent
                fromPocket={pocket}
                pocketsList={pocketsList}
                onCancel={onExchangeCancel}
                onConfirm={onExchangeConfirm}
            />;
    }
    
    return (
        <React.Fragment>
            <Typography variant="h3" style={styles.header}>
                {formatCurrency(pocket.id, pocket.balance)}
            </Typography>
            <div style={styles.actions}>
                <Button
                    color="inherit"
                    className="top-up-button"
                    onClick={openTopUpDialog}
                >Top Up</Button>
                <Button
                    color="inherit"
                    className="exchange-button"
                    onClick={openExchangeDialog}
                >Exchange</Button>
            </div>
    
            {renderTopUpDialog()}
            {renderExchangeDialog()}
        </React.Fragment>
    );
}
