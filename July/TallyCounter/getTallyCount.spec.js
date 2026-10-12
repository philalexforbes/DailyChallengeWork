const getTallyCount = require('./getTallyCount');

describe('Given a string of tally marks return the count.', () => {
    test('1. getTallyCount("||||") should return 4.', () => {
        expect(getTallyCount("||||")).toEqual(4);
    });
    test('2. getTallyCount("||||/") should return 5.', () => {
        expect(getTallyCount("||||/")).toEqual(5);
    });
    test('3. getTallyCount("||||/ |||") should return 8.', () => {
        expect(getTallyCount("||||/ |||")).toEqual(8);
    });
    test('4. getTallyCount("||||/ ||||/ ||||/ ||") should return 17.', () => {
        expect(getTallyCount("||||/ ||||/ ||||/ ||")).toEqual(17);
    });
    test('5. getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.', () => {
        expect(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |")).toEqual(41);
    });
});