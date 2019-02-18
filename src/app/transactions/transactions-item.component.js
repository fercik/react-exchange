import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AttachMoney, SwapHoriz } from '@material-ui/icons';

const showTransactionValue = (transaction, pocketId) => {
    if (transaction.from === pocketId) {
        return `${transaction.symbol} -${transaction.baseValue}`;
    }
    
    if (transaction.to === pocketId) {
        return `${transaction.symbol} ${transaction.baseValue}`;
    }
};

export const TransactionsItem = ({ transaction, pocketId }) => (
    <ListItem divider>
        {transaction.type === 'TOP_UP' && <ListItemIcon><AttachMoney/></ListItemIcon>}
        {transaction.type === 'EXCHANGE' && <ListItemIcon><SwapHoriz/></ListItemIcon>}
        <ListItemText primary={showTransactionValue(transaction, pocketId)} secondary={transaction.type}/>
    </ListItem>
);
