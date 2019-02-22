import React from 'react';
import { List, Typography } from '@material-ui/core';

import './transactions.component.css';
import { TransactionsItem } from './item/transactions-item.component';

export const TransactionsComponent = ({ pocketId, transactionsList }) => (
    <div className="transactions">
        <Typography variant="h6">Transactions</Typography>
        {transactionsList(pocketId).length === 0 &&
            <div className="empty">There are no transactions for current pocket</div>
        }
        
        {transactionsList(pocketId).length > 0 &&
            <List>
                {
                    transactionsList(pocketId)
                        .map(transaction =>
                            <TransactionsItem
                                key={transaction.createdAt}
                                transaction={transaction}
                                pocketId={pocketId}
                            />
                        )
                }
            </List>
        }
    </div>
);
