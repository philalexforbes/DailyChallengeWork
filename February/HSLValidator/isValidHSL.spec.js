const isValidHSL = require('./isValidHSL');

describe('Given a string with three values determine if they create a valid CSS color value.', () => {
    test('1. isValidHSL("hsl(240, 50%, 50%)") should return true.', () => {
        expect(isValidHSL("hsl(240, 50%, 50%)")).toEqual(true);
    });
    test('2. isValidHSL("hsl( 200 , 50% , 75% )") should return true.', () => {
        expect(isValidHSL("hsl( 200 , 50% , 75% )")).toEqual(true);
    });
    test('3. isValidHSL("hsl(99,60%,80%);") should return true.', () => {
        expect(isValidHSL("hsl(99,60%,80%);")).toEqual(true);
    });
    test('3. isValidHSL("hsl(99,60%,80%);") should return true.', () => {
        expect(isValidHSL("hsl(99,60%,80%);")).toEqual(true);
    });
    test('5. isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;") should return true.', () => {
        expect(isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;")).toEqual(true);
    });
    test('6. isValidHSL("hsl(361, 50%, 80%)") should return false.', () => {
        expect(isValidHSL("hsl(361, 50%, 80%)")).toEqual(false);
    });
    test('7. isValidHSL("hsl(300, 101%, 70%)") should return false.', () => {
        expect(isValidHSL("hsl(300, 101%, 70%)")).toEqual(false);
    });
    test('8. isValidHSL("hsl(200, 55%, 75)") should return false.', () => {
        expect(isValidHSL("hsl(200, 55%, 75)")).toEqual(false);
    });
    test('9. isValidHSL("hsl (80, 20%, 10%)") should return false.', () => {
        expect(isValidHSL("hsl (80, 20%, 10%)")).toEqual(false);
    });
})