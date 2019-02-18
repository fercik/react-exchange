export const initialState = {
    pockets: {
        items: [
            {
                id: 'gbp',
                label: 'GBP',
                currency: 'GBP',
                symbol: '£',
                balance: 0,
            },
            {
                id: 'eur',
                label: 'EUR',
                currency: 'EUR',
                symbol: '€',
                balance: 0,
            },
            {
                id: 'usd',
                label: 'USD',
                currency: 'USD',
                symbol: '$',
                balance: 0,
            },
        ],
    },
    transactions: [],
    exchange: {
        isDialogVisible: false,
    }
};
