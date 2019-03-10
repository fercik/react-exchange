export function formatCurrency(currency, value) {
    return new Intl
        .NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            currencyDisplay: 'symbol',
            minimumFractionDigits: 2,
        })
        .format(value);
}
