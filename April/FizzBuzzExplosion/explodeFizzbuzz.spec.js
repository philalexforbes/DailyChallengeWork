const explodeFizzbuzz = require('./explodeFizzbuzz');

describe('Given a number of z\'s return the number of steps that transform fizzbuzz with that many z\'s.', () => {
    test('1. explodeFizzbuzz(9) should return 1.', () => {
        expect(explodeFizzbuzz(9)).toEqual(1);
    });
    test('2. explodeFizzbuzz(15) should return 2.', () => {
        expect(explodeFizzbuzz(15)).toEqual(2);
    });
    test('3. explodeFizzbuzz(51) should return 3.', () => {
        expect(explodeFizzbuzz(51)).toEqual(3);
    });
    test('4. explodeFizzbuzz(52) should return 4.', () => {
        expect(explodeFizzbuzz(52)).toEqual(4);
    });
    test('5. explodeFizzbuzz(359) should return 5.', () => {
        expect(explodeFizzbuzz(359)).toEqual(5);
    });
    test('6. explodeFizzbuzz(789) should return 6.', () => {
        expect(explodeFizzbuzz(789)).toEqual(6);
    });
    test('7. explodeFizzbuzz(54482) should return 11.', () => {
        expect(explodeFizzbuzz(54482)).toEqual(11);
    });
    test('8. explodeFizzbuzz(1000000) should return 14.', () => {
        expect(explodeFizzbuzz(1000000)).toEqual(14);
    });
});