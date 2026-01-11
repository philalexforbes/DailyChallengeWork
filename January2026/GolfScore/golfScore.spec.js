const golfScore = require('./golfScore');

describe('Determine if the golf score is using the correct terminology', () => {
    test('1. golfScore(3, 3) should return "Par".', () => {
        expect(golfScore(3, 3)).toEqual('Par');
    });
    test('2. golfScore(4, 3) should return "Birdie".', () => {
        expect(golfScore(4, 3)).toEqual('Birdie');
    });
    test('3. golfScore(3, 1) should return "Hole in one!".', () => {
        expect(golfScore(3, 1)).toEqual('Hole in one!');
    });
    test('4. golfScore(5, 7) should return "Double bogey".', () => {
        expect(golfScore(5, 7)).toEqual('Double bogey');
    });
    test('5. golfScore(4, 5) should return "Bogey".', () => {
        expect(golfScore(4, 5)).toEqual('Bogey');
    });
    test('6. golfScore(5, 3) should return "Eagle".', () => {
        expect(golfScore(5, 3)).toEqual('Eagle');
    });
});