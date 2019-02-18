import { connect } from 'react-redux';

import { ExchangeComponent } from './exchange.component';
import { closeExchangeDialog } from './exchange.actions';

const mapStateToProps = state => ({
    pocketsList: state.pockets.items,
    isDialogVisible: state.exchange.isDialogVisible,
});

const mapDispatchToProps = dispatch => ({
    closeExchangeDialog: () => dispatch(closeExchangeDialog()),
});

export const ExchangeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExchangeComponent);
