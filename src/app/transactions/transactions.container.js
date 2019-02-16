import { connect } from 'react-redux';

import { TransactionsComponent } from './transactions.component';
import { getTransactionsByPocketId } from './transactions.actions';

const mapStateToProps = state => ({
    transactions: pocketId => getTransactionsByPocketId(state.transactions, pocketId),
});

export const TransactionsContainer = connect(
    mapStateToProps,
)(TransactionsComponent);
