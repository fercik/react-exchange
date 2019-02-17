export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const addTransaction = data => ({
    type: ADD_TRANSACTION,
    data,
});

export const addTopUpTransaction = (pocket, amount) => ({
    type: ADD_TRANSACTION,
    data: {
        symbol: pocket.symbol,
        to: pocket.id,
        createdAt: Date.now(),
        baseValue: amount,
        type: 'TOP_UP',
    },
});

export const addExchangeTransaction = (fromPocket, toPocket, baseAmount, destinationAmount) => ({
    type: ADD_TRANSACTION,
    data: {
    },
});

export const getTransactionsByPocketId = (transactions, pocketId) =>
    transactions.filter(
        transaction =>
            transaction.from === pocketId ||
            transaction.to === pocketId
    );
