import { connect } from 'react-redux';

import { PocketsComponent } from './pockets.component';
import { addTransaction } from '../transactions/transactions.actions';
import { openExchangeDialog } from '../exchange/exchange.actions';
import { updatePocket } from './pockets.actions';

const mapStateToProps = state => ({
    pockets: state.pockets.items,
    visibleItem: state.pockets.visibleItem,
});

const mapDispatchToProps = dispatch => ({
    addTransaction: (pocket, value, type) => dispatch(addTransaction(pocket, value, type)),
    updatePocket: (pocketId, data) => dispatch(updatePocket(pocketId, data)),
    openExchangeDialog: () => dispatch(openExchangeDialog()),
});

export const PocketsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PocketsComponent);
