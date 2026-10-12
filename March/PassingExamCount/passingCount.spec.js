const passingCount = require('./passingCount');

describe('Given an array of test scores and the passing score. Return the number of passing scores.', () => {
    test('1. passingCount([90, 85, 75, 60, 50], 70) should return 3.', () => {
        expect(passingCount([90, 85, 75, 60, 50], 70)).toEqual(3);
    });
    test('2. passingCount([100, 80, 75, 88, 72, 74, 79, 71, 60, 92], 75) should return 6.', () => {
        expect(passingCount([100, 80, 75, 88, 72, 74, 79, 71, 60, 92], 75)).toEqual(6);
    });
    test('3. passingCount([79, 60, 88, 72, 74, 59, 75, 71, 80, 92], 60) should return 9.', () => {
        expect(passingCount([79, 60, 88, 72, 74, 59, 75, 71, 80, 92], 60)).toEqual(9);
    });
    test('4. passingCount([76, 79, 80, 70, 71, 65, 79, 78, 59, 72], 85) should return 0.', () => {
        expect(passingCount([76, 79, 80, 70, 71, 65, 79, 78, 59, 72], 85)).toEqual(0);
    });
    test('5. passingCount([84, 65, 98, 53, 58, 71, 91, 80, 92, 70, 73, 83, 86, 69, 84, 77, 72, 58, 69, 75, 66, 68, 72, 96, 90, 63, 88, 63, 80, 67], 60) should return 27.', () => {
        expect(passingCount([84, 65, 98, 53, 58, 71, 91, 80, 92, 70, 73, 83, 86, 69, 84, 77, 72, 58, 69, 75, 66, 68, 72, 96, 90, 63, 88, 63, 80, 67], 60))
        .toEqual(27);
    });
});