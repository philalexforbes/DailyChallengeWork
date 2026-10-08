const findLandingSpot = require('./findLandingSpot');

describe('Given a matrix return the position of the safest landing spot in the matrix.', () => {
    test('1. findLandingSpot([[1, 0], [2, 0]]) should return [0, 1].', () => {
        expect(findLandingSpot([[1, 0], [2, 0]])).toEqual([0,1]);
    });
    test('2. findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].', () => {
        expect(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]])).toEqual([1,1]);
    });
    test('3. findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].', () => {
        expect(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]])).toEqual([2, 2]);
    });
    test('4. findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].', () => {
        expect(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]])).toEqual([2,1]);
    });
});