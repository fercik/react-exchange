import { connect } from 'react-redux';

import { PocketsComponent } from './pockets.component';
import { addTopUpTransaction } from '../transactions/transactions.actions';
import { topUpPocket } from './pockets.actions';
import { openExchangeDialog } from '../exchange/exchange.actions';

const mapStateToProps = state => ({
    pockets: state.pockets.items,
    visibleItem: state.pockets.visibleItem,
});

const mapDispatchToProps = dispatch => ({
    topUpPocket: (pocketId, balance) => dispatch(topUpPocket(pocketId, balance)),
    addTopUpTransaction: (pocket, amount) => dispatch(addTopUpTransaction(pocket, amount)),
    openExchangeDialog: () => dispatch(openExchangeDialog()),
});

export const PocketsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PocketsComponent);
