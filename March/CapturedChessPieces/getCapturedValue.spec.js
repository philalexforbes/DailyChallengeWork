const getCapturedValue = require('./getCapturedValue');

describe('Return the value of the captured pieces correctly when given an array of current pieces.', () => {
    test('1. getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]) should return 8.', () => {
        expect(getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"])).toEqual(8);
    });
    test('2. getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"]) should return 26.', () => {
        expect(getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"])).toEqual(26);
    });
    test('3. getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]) should return 16.', () => {
        expect(getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"])).toEqual(16);
    });
    test('4. getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]) should return 4.', () => {
        expect(getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"])).toEqual(4);
    });
    test('5. getCapturedValue(["P", "K"]) should return 38.', () => {
        expect(getCapturedValue(["P", "K"])).toEqual(38);
    });
    test('6. getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]) should return 0.', () => {
        expect(getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"])).toEqual(0);
    });
    test('7. getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]) should return "Checkmate".', () => {
        expect(getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"])).toEqual("Checkmate");
    });
});