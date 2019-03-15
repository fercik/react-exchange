import { connect } from 'react-redux';

import { TransactionsComponent } from './transactions.component';
import { getTransactionsByPocketId } from './actions/transactions.actions';

const mapStateToProps = state => ({
    getTransactionsByPocketId: pocketId => getTransactionsByPocketId(state.transactions, pocketId),
});

export const TransactionsContainer = connect(
    mapStateToProps,
)(TransactionsComponent);
