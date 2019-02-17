import { connect } from 'react-redux';

import { changePocket, topUpPocket } from './pockets.actions';
import { PocketsComponent } from './pockets.component';
import { addTopUpTransaction } from '../transactions/transactions.actions';

const mapStateToProps = state => ({
    pockets: state.pockets.items,
    visibleItem: state.pockets.visibleItem,
});

const mapDispatchToProps = dispatch => ({
    topUpPocket: (pocketId, balance) => dispatch(topUpPocket(pocketId, balance)),
    tabChangeHandler: (event, value) => dispatch(changePocket(value)),
    addTopUpTransaction: (pocket, amount) => dispatch(addTopUpTransaction(pocket, amount)),
});

export const PocketsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PocketsComponent);
