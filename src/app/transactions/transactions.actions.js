export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const addTopUpTransaction = (pocket, baseValue) => ({
    type: ADD_TRANSACTION,
    data: {
        symbol: pocket.symbol,
        to: pocket.id,
        createdAt: Date.now(),
        baseValue,
        type: 'TOP_UP',
    },
});

export const addExchangeTransaction = (fromPocket, toPocket, baseValue, destinationValue) => ({
    type: ADD_TRANSACTION,
    data: {
        from: fromPocket.id,
        to: toPocket.id,
        baseValue,
        destinationValue,
        createdAt: Date.now(),
        type: 'EXCHANGE',
    },
});

export const getTransactionsByPocketId = (transactions, pocketId) =>
    transactions.filter(
        transaction =>
            transaction.from === pocketId ||
            transaction.to === pocketId
    );
