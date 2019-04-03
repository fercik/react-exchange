import React from 'react';
import { CardHeader, Card } from '@material-ui/core';
import { AttachMoney, SwapHoriz } from '@material-ui/icons';

import './transactions-item.component.css';
import { formatCurrency } from '../../shared/utils/format-currency';

const cardHeaderClasses = {
    title: {
        expense: 'transactions-item__title transactions-item__title--expense',
        income: 'transactions-item__title transactions-item__title--income',
    },
    subheader: 'transactions-item__subheader'
};

export const TransactionsItem = ({ transaction }) => (
    <Card className="transactions-item">
        <CardHeader
            avatar={transaction.type === 'TOP_UP' ? <AttachMoney/> : <SwapHoriz/>}
            title={formatCurrency(transaction.currency, transaction.value)}
            subheader={transaction.type}
            classes={{
                title: transaction.value < 0 ? cardHeaderClasses.title.expense : cardHeaderClasses.title.income,
                subheader: cardHeaderClasses.subheader,
            }}
        />
    </Card>
);
