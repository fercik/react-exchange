import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const showTransactionValue = (transaction, pocketId) => {
    if (transaction.from === pocketId) {
        return `${transaction.symbol} -${transaction.baseValue}`;
    }
    
    if (transaction.to === pocketId) {
        return `${transaction.symbol} ${transaction.baseValue}`;
    }
};

export const TransactionsItem = ({ transaction, pocketId }) => (
    <ListItem>
        <ListItemText primary={showTransactionValue(transaction, pocketId)} secondary={transaction.type}/>
    </ListItem>
);
