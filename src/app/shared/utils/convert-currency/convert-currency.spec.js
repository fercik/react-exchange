import { convert } from './convert-currency';

const rates = {
    GBP: 0.7545639664,
    EUR: 0.8853474989,
    USD: 1,
};

describe('ConvertCurrency', () => {
    
    it('should properly convert values', () => {
        expect(convert(rates, 'EUR', 'GBP').toFixed(2)).toBe('0.85');
        expect(convert(rates, 'USD', 'GBP').toFixed(2)).toBe('0.75');
        expect(convert(rates, 'USD', 'EUR').toFixed(2)).toBe('0.89');
        expect(convert(rates, 'EUR', 'USD').toFixed(2)).toBe('1.13');
    });
    
});
