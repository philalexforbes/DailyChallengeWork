const squaresWithThree = require('./squaresWithThree');

describe('Given a number return how many numbers have a square root with at least one digit three.', () => {
    test('1. squaresWithThree(1) should return 0.', () => {
        expect(squaresWithThree(1)).toEqual(0);
    });
    test('2. squaresWithThree(10) should return 1.', () => {
        expect(squaresWithThree(10)).toEqual(1);
    });
    test('3. squaresWithThree(100) should return 19.', () => {
        expect(squaresWithThree(100)).toEqual(19);
    });
    test('4. squaresWithThree(1000) should return 326.', () => {
        expect(squaresWithThree(1000)).toEqual(326);
    });
    test('5. squaresWithThree(10000) should return 4531.', () => {
        expect(squaresWithThree(10000)).toEqual(4531);
    });
});