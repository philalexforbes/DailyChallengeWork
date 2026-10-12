const countPerfectCubes = require('./countPerfectCubes');

describe('Return the correct number of perfect cubes found in the range given.', () => {
    test('1. countPerfectCubes(3, 30) should return 2.', () => {
        expect(countPerfectCubes(3, 30)).toEqual(2);
    });
    test('2. countPerfectCubes(1, 30) should return 3.', () => {
        expect(countPerfectCubes(1, 30)).toEqual(3);
    });
    test('3. countPerfectCubes(30, 0) should return 4.', () => {
        expect(countPerfectCubes(30, 0)).toEqual(4);
    });
    test('4. countPerfectCubes(-64, 64) should return 9.', () => {
        expect(countPerfectCubes(-64, 64)).toEqual(9);
    });
    test('5. countPerfectCubes(9214, -8127) should return 41.', () => {
        expect(countPerfectCubes(9214, -8127)).toEqual(41);
    });
})