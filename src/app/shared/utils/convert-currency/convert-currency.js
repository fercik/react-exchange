function convertToBase(data, currency) {
    return 1 / data[currency];
}

export function convert(data, fromCurrency, toCurrency) {
    return convertToBase(data, fromCurrency) * data[toCurrency];
}
