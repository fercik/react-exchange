export const initialState = {
    pockets: {
        items: [
            {
                id: 'gbp',
                label: 'GBP',
                currency: 'GBP',
                symbol: '£',
                balance: 0,
                locale: 'en_GB'
            },
            {
                id: 'eur',
                label: 'EUR',
                currency: 'EUR',
                symbol: '€',
                balance: 0,
                locale: 'de_DE'
            },
            {
                id: 'usd',
                label: 'USD',
                currency: 'USD',
                symbol: '$',
                balance: 0,
                locale: 'en_US'
            },
        ],
    },
    transactions: [],
};
