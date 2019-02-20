import { connect } from 'react-redux';

import { ExchangeComponent } from './exchange.component';
import { closeExchangeDialog } from './exchange.actions';
import { addTransaction } from '../transactions/transactions.actions';
import { updatePocket } from '../pockets/pockets.actions';

const mapStateToProps = state => ({
    pocketsList: state.pockets.items,
    isDialogVisible: state.exchange.isDialogVisible,
});

const mapDispatchToProps = dispatch => ({
    closeExchangeDialog: () => dispatch(closeExchangeDialog()),
    addTransaction: (pocket, value, type) => dispatch(addTransaction(pocket, value, type)),
    updatePocket: (pocketId, data) => dispatch(updatePocket(pocketId, data)),
});

export const ExchangeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExchangeComponent);
