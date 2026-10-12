const getDifficulty = require('./getDifficulty');

describe('Return the track difficulty when presented with the turns the user has taken.', () => {
    test('1. getDifficulty("SLSLLSRRLSRLRL") should return "Easy".', () => {
        expect(getDifficulty("SLSLLSRRLSRLRL")).toEqual('Easy');
    });
    test('2. getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS") should return "Hard".', () => {
        expect(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS")).toEqual('Hard');
    });
    test('3. getDifficulty("SRRRRLSLLRLRSSRLSRL") should return "Medium".', () => {
        expect(getDifficulty("SRRRRLSLLRLRSSRLSRL")).toEqual('Medium');
    });
    test('4. getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL") should return "Hard".', () => {
        expect(getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL")).toEqual('Hard');
    });
    test('5. getDifficulty("SLLSSLRLSLSLRSLSSLRL") should return "Medium".', () => {
        expect(getDifficulty("SLLSSLRLSLSLRSLSSLRL")).toEqual('Medium');
    });
    test('6. getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR") should return "Easy".', () => {
        expect(getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR")).toEqual('Easy');
    });
})