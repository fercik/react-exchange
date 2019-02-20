export const UPDATE_POCKET = 'UPDATE_POCKET';

export const updatePocket = (pocketId, data) => ({
    type: UPDATE_POCKET,
    pocketId,
    data,
});
