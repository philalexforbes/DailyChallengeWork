const largestDifference = require('./largestDifference');

describe('Verify that the largest difference in lap times is returned.' , () => {
    test('1. largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]) should return 3.', () => {
        expect(largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30])).toEqual(3);
    });
    test('2. largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23]) should return 1.', () => {
        expect(largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23])).toEqual(1);
    });
    test('3. largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95]) should return 5.', () => {
        expect(largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95])).toEqual(5);
    });
    test('4. largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01]) should return 2.', () => {
        expect(largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01])).toEqual(2);
    });
    test('5. largestDifference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10]) should return 4.', () => {
        expect(largestDifference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10])).toEqual(4);
    });
});