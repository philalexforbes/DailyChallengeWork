const elevatorStops = require('./elevatorStops');

describe('Given the current floor and a list of floors to stop on return the shortest path.', () => {
    test('1. elevatorStops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].', () => {
        expect(elevatorStops(5, [2, 8, 3, 9])).toEqual([3, 2, 8, 9]);
    });
    test('2. elevatorStops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].', () => {
        expect(elevatorStops(6, [2, 10, 8, 3, 1, 9])).toEqual([8, 9, 10, 3, 2, 1]);
    });
    test('3. elevatorStops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].', () => {
        expect(elevatorStops(1, [4, 8, 3, 6, 9])).toEqual([3, 4, 6, 8, 9]);
    });
    test('4. elevatorStops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].', () => {
        expect(elevatorStops(12, [6, 10, 7, 3, 1, 4])).toEqual([10, 7, 6, 4, 3, 1]);
    });
    test('5. elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].', () => {
        expect(elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19])).toEqual([10, 9, 8, 6, 5, 2, 12, 19, 23]);
    });
});