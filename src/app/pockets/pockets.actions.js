export const UPDATE_POCKET = 'UPDATE_POCKET';
export const TOP_UP_POCKET = 'TOP_UP_POCKET';

export const updatePocket = data => ({
    type: UPDATE_POCKET,
    data,
});

export const topUpPocket = (pocketId, balance) => ({
    type: TOP_UP_POCKET,
    pocketId,
    balance,
});
