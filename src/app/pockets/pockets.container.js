import { connect } from 'react-redux';

import { PocketsComponent } from './pockets.component';
import { addTransaction } from '../transactions/actions/transactions.actions';
import { updatePocket } from './actions/pockets.actions';

const mapStateToProps = state => ({
    pockets: state.pockets.items,
});

const mapDispatchToProps = dispatch => ({
    addTransaction: (pocket, value, type) => dispatch(addTransaction(pocket, value, type)),
    updatePocket: (pocketId, data) => dispatch(updatePocket(pocketId, data)),
});

export const PocketsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PocketsComponent);
