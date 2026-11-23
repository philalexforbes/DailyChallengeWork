const getNextLocation = require('./getNextLocation');

describe('Given a matrix with a trajectory of a ball return the coordinates for the ball to go next.', () => {
    test('1. getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].', () => {
        expect(getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]))
        .toEqual([2, 3]);
    });
    test('2. getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].', () => {
        expect(getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]))
        .toEqual([3,0]);
    });
    test('3. getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].', () => {
        expect(getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]))
        .toEqual([1, 2]);
    });
    test('4. getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].', () => {
        expect(getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]))
        .toEqual([1, 1]);
    });
    test('5. getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].', () => {
        expect(getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]))
        .toEqual([2, 2]);
    });
});