const getNextBingoNumber = require('./getNextBingoNumber');

describe('Given a Bingo Number return the next number sequentially.', () => {
    test('1. getNextBingoNumber("B10") should return "B11".', () => {
        expect(getNextBingoNumber("B10")).toEqual("B11");
    });
    test('2. getNextBingoNumber("N33") should return "N34".', () => {
        expect(getNextBingoNumber("N33")).toEqual("N34");
    });
    test('3. getNextBingoNumber("I30") should return "N31".', () => {
        expect(getNextBingoNumber("I30")).toEqual("N31");
    });
    test('4. getNextBingoNumber("G60") should return "O61".', () => {
        expect(getNextBingoNumber("G60")).toEqual("O61");
    });
    test('5. getNextBingoNumber("O75") should return "B1".', () => {
        expect(getNextBingoNumber("O75")).toEqual("B1");
    });
});