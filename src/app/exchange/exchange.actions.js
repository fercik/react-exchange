export const OPEN_EXCHANGE_DIALOG = 'OPEN_EXCHANGE_DIALOG';
export const CLOSE_EXCHANGE_DIALOG = 'CLOSE_EXCHANGE_DIALOG';

export const openExchangeDialog = () => ({
    type: OPEN_EXCHANGE_DIALOG,
    isDialogVisible: true,
});

export const closeExchangeDialog = () => ({
    type: CLOSE_EXCHANGE_DIALOG,
    isDialogVisible: false,
});
