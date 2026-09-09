const allUnique = require('./allUnique');

describe('Given a string return true or false if all characters are unique or not.', () => {
    test('1. allUnique("abc") should return true.', () => {
        expect(allUnique("abc")).toEqual(true);
    });
    test('2. allUnique("aA") should return true.', () => {
        expect(allUnique("aA")).toEqual(true);
    });
    test('3. allUnique("QwErTy123!@") should return true.', () => {
        expect(allUnique("QwErTy123!@")).toEqual(true);
    });
    test('4. allUnique("~!@#$%^&*()_+") should return true.', () => {
        expect(allUnique("~!@#$%^&*()_+")).toEqual(true);
    });
    test('5. allUnique("hello") should return false.', () => {
        expect(allUnique("hello")).toEqual(false);
    });
    test('6. allUnique("freeCodeCamp") should return false.', () => {
        expect(allUnique("freeCodeCamp")).toEqual(false);
    });
    test('7. allUnique("!@#*$%^&*()aA") should return false.', () => {
        expect(allUnique("!@#*$%^&*()aA")).toEqual(false);
    });
});