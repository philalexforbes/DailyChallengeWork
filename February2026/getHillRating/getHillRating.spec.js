const getHillRating = require('./getHillRating');

describe('When the drop, distance, and type are passed through return the correct hill rating', () => {
    test('1. getHillRating(95, 900, "Slalom") should return "Green".', () => {
        expect(getHillRating(95, 900, "Slalom")).toEqual('Green');
    });
    test('2. getHillRating(620, 2800, "Downhill") should return "Black".', () => {
        expect(getHillRating(620, 2800, "Downhill")).toEqual('Black');
    });
    test('3. getHillRating(420, 1680, "Giant Slalom") should return "Blue".', () => {
        expect(getHillRating(420, 1680, "Giant Slalom")).toEqual('Blue');
    });
    test('4. getHillRating(250, 3000, "Downhill") should return "Green".', () => {
        expect(getHillRating(250, 3000, "Downhill")).toEqual('Green');
    });
    test('5. getHillRating(110, 900, "Slalom") should return "Blue".', () => {
        expect(getHillRating(110, 900, "Slalom")).toEqual('Blue');
    });
    test('6. getHillRating(380, 1500, "Giant Slalom") should return "Black".', () => {
        expect(getHillRating(380, 1500, "Giant Slalom")).toEqual('Black');
    });
});