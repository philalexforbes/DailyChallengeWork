const getUniqueClimbs = require('./getUniqueClimbs');

describe('Given a number of stairs return the distinct ways someone can climb them.', () => {
    test('1. getUniqueClimbs(4) should return 5.', () => {
        expect(getUniqueClimbs(4)).toEqual(5);
    });
    test('2. getUniqueClimbs(5) should return 8.', () => {
        expect(getUniqueClimbs(5)).toEqual(8);
    });
    test('3. getUniqueClimbs(10) should return 89.', () => {
        expect(getUniqueClimbs(10)).toEqual(89);
    });
    test('4. getUniqueClimbs(18) should return 4181.', () => {
        expect(getUniqueClimbs(18)).toEqual(4181);
    });
    test('5. getUniqueClimbs(29) should return 832040.', () => {
        expect(getUniqueClimbs(29)).toEqual(832040);
    });
    test('6. getUniqueClimbs(50) should return 20365011074', () => {
        expect(getUniqueClimbs(50)).toEqual(20365011074);
    });
});