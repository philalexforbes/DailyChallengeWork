const getBingoLetter = require('./getBingoLetter');

describe('Return the correct Bingo letter when a number within range is passed through', () => {
    test('1. getBingoLetter(75) should return "O".', () => {
        expect(getBingoLetter(75)).toEqual('O');
    });
    test('2. getBingoLetter(54) should return "G".', () => {
        expect(getBingoLetter(54)).toEqual('G');
    });
    test('3. getBingoLetter(25) should return "I".', () => {
        expect(getBingoLetter(25)).toEqual('I');
    });
    test('4. getBingoLetter(38) should return "N".', () => {
        expect(getBingoLetter(38)).toEqual('N');
    });
    test('5. getBingoLetter(11) should return "B".', () => { // the original test said to return 11 but they didn't provide a reason why since 11 should be in the bound of 1-15 to return B this test is the correct return and running the test on the site it does equal B
        expect(getBingoLetter(11)).toEqual('B');
    });
});
