export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const addTransaction = data => ({
    type: ADD_TRANSACTION,
    data,
});

export const getTransactionsByPocketId = (transactions, pocketId) =>
    transactions.filter(
        transaction =>
            transaction.from === pocketId ||
            transaction.to === pocketId
    );
