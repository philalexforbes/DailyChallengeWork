const evaluate = require('./evaluate');

describe('Given an array of numbers and an array of operators return the final result.', () => {
    test("1. evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3", () => {
        expect(evaluate([5, 6, 7, 8, 9], ['+', '-'])).toEqual(3);
    });
    test("2. evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38", () => {
        expect(evaluate([17, 61, 40, 24, 38, 14], ['+', '%'])).toEqual(38);
    });
    test("3. evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60", () => {
        expect(evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])).toEqual(60);
    });
    test("4. evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30", () => {
        expect(evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])).toEqual(30);
    });
    test("5. evaluate([33, 11, 29, 13], ['/', '-']) should return -2", () => {
        expect(evaluate([33, 11, 29, 13], ['/', '-'])).toEqual(-2);
    });
});