const resolutionStreak = require('./resolutionStreak');

describe('Verify if the user has failed their resolution and report back streak and day of failure', () => {
    test('1. resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]) should return "Resolution on track: 3 day streak."', () => {
        expect(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]])).toEqual("Resolution on track: 3 day streak.");
    });
    test('2. resolutionStreak([[10000, 120, 5], [10950, 121, 11]]) should return "Resolution failed on day 2: 1 day streak."', () => {
        expect(resolutionStreak([[10000, 120, 5], [10950, 121, 11]])).toEqual("Resolution failed on day 2: 1 day streak.");
    });
    test('3. resolutionStreak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]]) should return "Resolution failed on day 3: 2 day streak."', () => {
        expect(resolutionStreak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]])).toEqual("Resolution failed on day 3: 2 day streak.");
    });
    test('4. resolutionStreak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]]) should return "Resolution failed on day 4: 3 day streak."', () => {
        expect(resolutionStreak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]])).toEqual("Resolution failed on day 4: 3 day streak.");
    });
    test('5. resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]]) should return "Resolution on track: 10 day streak."', () => {
        expect(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]])).toEqual("Resolution on track: 10 day streak.");
    });
})