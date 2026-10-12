const getCleanupScore = require('./getCleanupScore');

describe('Return the score for the items cleaned up by the user.', () => {
    test('1. getCleanupScore(["bottle", "straw", "shoe", "battery"]) should return 44.', () => {
        expect(getCleanupScore(["bottle", "straw", "shoe", "battery"])).toEqual(44);
    });
    test('2. getCleanupScore(["electronics", "straw", "newspaper", "bottle", "bag"]) should return 58.', () => {
        expect(getCleanupScore(["electronics", "straw", "newspaper", "bottle", "bag"])).toEqual(58);
    });
    test('3. getCleanupScore(["shoe", "can", "can", "can", "bottle", "bottle", "straw", "straw", "straw"]) should return 79.', () => {
        expect(getCleanupScore(["shoe", "can", "can", "can", "bottle", "bottle", "straw", "straw", "straw"])).toEqual(79);
    });
    test('4. getCleanupScore(["mattress", ["rare", 80], "tire", "tire", "tire", ["rare", 95]]) should return 358.', () => {
        expect(getCleanupScore(["mattress", ["rare", 80], "tire", "tire", "tire", ["rare", 95]])).toEqual(358);
    });
    test('5. getCleanupScore(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"]) should return 383.', () => {
        expect(getCleanupScore(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"]))
        .toEqual(383);
    });
});