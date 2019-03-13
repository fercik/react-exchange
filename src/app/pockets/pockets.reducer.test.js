import { UPDATE_POCKET } from './pockets.actions';
import { pocketsReducer } from './pockets.reducer';

describe('PocketsReducer', () => {
    
    it('should return default state when invalid action was dispatched', () => {
        const defaultState = {};
        const action = {
            type: 'REMOVE_POCKET',
            pocketId: 'gbp',
        };
        
        expect(pocketsReducer(undefined, action)).toEqual(defaultState);
    });
    
    it('should update pocket balance', () => {
        const stateBefore = {
            items: [
                {
                    id: 'gbp',
                    label: 'GBP',
                    currency: 'GBP',
                    symbol: '£',
                    balance: 0,
                },
            ],
        };
        const stateAfter = {
            items: [
                {
                    id: 'gbp',
                    label: 'GBP',
                    currency: 'GBP',
                    symbol: '£',
                    balance: 100,
                },
            ],
        };
        const action = {
            type: UPDATE_POCKET,
            pocketId: 'gbp',
            data: {
                balance: 100,
            },
        };
        
        expect(
            pocketsReducer(stateBefore, action),
        ).toEqual(stateAfter);
    });
    
});
