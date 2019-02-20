import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AttachMoney, SwapHoriz } from '@material-ui/icons';

const showTransactionValue = transaction => `${transaction.symbol} ${transaction.value}`;

export const TransactionsItem = ({ transaction }) => (
    <ListItem divider>
        {transaction.type === 'TOP_UP' && <ListItemIcon><AttachMoney/></ListItemIcon>}
        {transaction.type === 'EXCHANGE' && <ListItemIcon><SwapHoriz/></ListItemIcon>}
        <ListItemText primary={showTransactionValue(transaction)} secondary={transaction.type}/>
    </ListItem>
);
