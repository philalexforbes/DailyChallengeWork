const avalancheRisk = require('./avalancheRisk');

describe('Given the snow depth and the slope return the correct risk of an avalanche occurring.', () => {
    test('1. avalancheRisk("Shallow", "Gentle") should return "Safe".', () => {
        expect(avalancheRisk("Shallow", "Gentle")).toEqual('Safe');
    });
    test('2. avalancheRisk("Shallow", "Steep") should return "Safe".', () => {
        expect(avalancheRisk("Shallow", "Steep")).toEqual('Safe');
    });
    test('3. avalancheRisk("Shallow", "Very Steep") should return "Safe".', () => {
        expect(avalancheRisk("Shallow", "Very Steep")).toEqual('Safe');
    });
    test('4. avalancheRisk("Moderate", "Gentle") should return "Safe".', () => {
        expect(avalancheRisk("Moderate", "Gentle")).toEqual('Safe');
    });
    test('5. avalancheRisk("Moderate", "Steep") should return "Risky".', () => {
        expect(avalancheRisk("Moderate", "Steep")).toEqual('Risky');
    });
    test('6. avalancheRisk("Moderate", "Very Steep") should return "Risky".', () => {
        expect(avalancheRisk("Moderate", "Very Steep")).toEqual('Risky');
    });
    test('7. avalancheRisk("Deep", "Gentle") should return "Safe".', () => {
        expect(avalancheRisk("Deep", "Gentle")).toEqual('Safe');
    });
    test('8. avalancheRisk("Deep", "Steep") should return "Risky".', () => {
        expect(avalancheRisk("Deep", "Steep")).toEqual('Risky');
    });
    test('9. avalancheRisk("Deep", "Very Steep") should return "Risky".', () => {
        expect(avalancheRisk("Deep", "Very Steep")).toEqual('Risky');
    });
})