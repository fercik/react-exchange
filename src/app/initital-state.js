export const initialState = {
    pockets: {
        visibleItem: 0,
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
    transactions: [
        {
            symbol: '$',
            to: 'usd',
            baseValue: 50,
            createdAt: 1550254609335,
            type: 'TOP_UP'
        },
        {
            symbol: '$',
            to: 'usd',
            baseValue: 150,
            createdAt: 1550254609335,
            type: 'TOP_UP'
        },
        {
            symbol: '£',
            from: 'gbp',
            to: 'eur',
            baseValue: 50,
            destinationValue: 57.03,
            createdAt: 1550254609337,
            type: 'EXCHANGE'
        }
    ]
};
