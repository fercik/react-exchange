import React from 'react';
import { List, Typography } from '@material-ui/core';

import './transactions.component.css';
import { TransactionsItem } from './transactions-item.component';

export const TransactionsComponent = ({ pocketId, transactions }) => (
    <div className="transactions">
        <Typography variant="h6">Transactions</Typography>
        {transactions(pocketId).length === 0 && <div>There are not transactions for current pocket</div>}
        {transactions(pocketId).length > 0 && <List>{transactions(pocketId).map((transaction, index) => <TransactionsItem key={index} transaction={transaction} pocketId={pocketId}/>)}</List>}
    </div>
);
