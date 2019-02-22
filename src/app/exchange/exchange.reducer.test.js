import { exchangeReducer } from './exchange.reducer';
import { CLOSE_EXCHANGE_DIALOG, OPEN_EXCHANGE_DIALOG } from './exchange.actions';

it('should return default state when invalid actions was dispatched', () => {
    const defaultState = {};
    const action = {
        type: 'SOME_ACTION',
        data: false,
    };
    
    expect(
        exchangeReducer(undefined, action),
    ).toEqual(defaultState);
});

it('should open exchange dialog', () => {
    const stateBefore = {};
    const stateAfter = {
        isDialogVisible: true,
    };
    const action = {
        type: OPEN_EXCHANGE_DIALOG,
        isDialogVisible: true,
    };
    
    expect(
        exchangeReducer(stateBefore, action),
    ).toEqual(stateAfter);
});

it('should close exchange dialog', () => {
    const stateBefore = {};
    const stateAfter = {
        isDialogVisible: false,
    };
    const action = {
        type: CLOSE_EXCHANGE_DIALOG,
        isDialogVisible: false,
    };
    
    expect(
        exchangeReducer(stateBefore, action),
    ).toEqual(stateAfter);
});
