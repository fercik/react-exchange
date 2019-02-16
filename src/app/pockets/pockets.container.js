import { connect } from 'react-redux';

import { changePocket, topUpPocket } from './pockets.actions';
import { PocketsComponent } from './pockets.component';

const mapStateToProps = state => ({
    pockets: state.pockets.items,
    visibleItem: state.pockets.visibleItem,
});

const mapDispatchToProps = dispatch => ({
    topUpPocket: (pocketId, balance) => dispatch(topUpPocket(pocketId, balance)),
    tabChangeHandler: (event, value) => dispatch(changePocket(value)),
});

export const PocketsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PocketsComponent);
