const tireStatus = require('./tireStatus');

describe('Report back if the each tire is low, good, or high depending on their psi', () => {
    test('1. tireStatus([32, 28, 35, 29], [2, 3]) should return ["Good", "Low", "Good", "Low"].', () => {
        expect(tireStatus([32, 28, 35, 29], [2, 3])).toEqual(["Good", "Low", "Good", "Low"]);
    });
    test('2. tireStatus([32, 28, 35, 30], [2, 2.3]) should return ["Good", "Low", "High", "Good"].', () => {
        expect(tireStatus([32, 28, 35, 30], [2, 2.3])).toEqual(["Good", "Low", "High", "Good"]);
    });
    test('3. tireStatus([29, 26, 31, 28], [2.1, 2.5]) should return ["Low", "Low", "Good", "Low"].', () => {
        expect(tireStatus([29, 26, 31, 28], [2.1, 2.5])).toEqual(["Low", "Low", "Good", "Low"]);
    });
    test('4. tireStatus([31, 31, 30, 29], [1.5, 2]) should return ["High", "High", "High", "Good"].', () => {
        expect(tireStatus([31, 31, 30, 29], [1.5, 2])).toEqual(["High", "High", "High", "Good"]);
    });
    test('5. tireStatus([30, 28, 30, 29], [1.9, 2.1]) should return ["Good", "Good", "Good", "Good"].', () => {
        expect(tireStatus([30, 28, 30, 29], [1.9, 2.1])).toEqual(["Good", "Good", "Good", "Good"]);
    });
})