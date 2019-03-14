import React from 'react';
import { List, Typography } from '@material-ui/core';

import './transactions.component.css';
import { TransactionsItem } from './item/transactions-item.component';

export function TransactionsComponent({ pocketId, getTransactionsByPocketId }) {
    
    function getTransactionsListLength(pocketId) {
        return getTransactionsByPocketId(pocketId).length;
    }
    
    function renderEmpty() {
        return (<div className="transactions--empty">There are no transactions for current pocket</div>);
    }
    
    function renderListItem(transaction) {
        return (
            <TransactionsItem
                key={transaction.createdAt}
                transaction={transaction}
                pocketId={pocketId}
            />
        );
    }
    
    function renderList() {
        return (
            <List>{getTransactionsByPocketId(pocketId)
                .map(transaction => renderListItem(transaction))}
            </List>
        );
    }
    
    return (
        <React.Fragment>
            <Typography variant="h5">Transactions</Typography>
            <div className="transactions">
                {getTransactionsListLength(pocketId)
                    ? renderList()
                    : renderEmpty()
                }
            </div>
        </React.Fragment>
    );
}
