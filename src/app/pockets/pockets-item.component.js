import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { TransactionsContainer } from '../transactions/transactions.container';
import { TopUpComponent } from '../top-up/top-up.component';
import { ExchangeComponent } from '../exchange/exchange.component';
import { formatCurrency } from '../shared/utils/format-currency';

const styles = {
    card: {
        marginTop: '16px',
    },
    header: {
        backgroundColor: '#1E88E5',
        color: '#ffffff',
        padding: '64px',
        textAlign: 'center',
    }
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
    
    return (
        <Card style={styles.card}>
            <div>
                <Typography variant="h3" style={styles.header}>
                    {formatCurrency(pocket.id, pocket.balance)}
                </Typography>
            </div>
            <CardActions>
                <Button color="inherit" onClick={openTopUpDialog}>Top Up</Button>
                <Button color="inherit" onClick={openExchangeDialog}>Exchange</Button>
            </CardActions>
            <CardContent>
                <TransactionsContainer pocketId={pocket.id}/>
            </CardContent>
        
            {isTopUpDialogOpened &&
            <TopUpComponent
                onConfirm={onTopUpConfirm}
                onCancel={onTopUpCancel}
            />
            }
        
            {isExchangeDialogOpened &&
            <ExchangeComponent
                fromPocket={pocket}
                pocketsList={pocketsList}
                onCancel={onExchangeCancel}
                onConfirm={onExchangeConfirm}
            />
            }
        </Card>
    );
}
