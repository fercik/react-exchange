export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const addTransaction = (pocket, value, type) => ({
    type: ADD_TRANSACTION,
    data: {
        symbol: pocket.symbol,
        createdAt: Date.now(),
        value,
        type,
        pocketId: pocket.id,
    },
});

export const getTransactionsByPocketId = (transactions, pocketId) =>
    transactions.filter(transaction => transaction.pocketId === pocketId);
