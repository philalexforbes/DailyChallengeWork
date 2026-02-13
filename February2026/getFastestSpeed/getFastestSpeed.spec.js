const getFastestSpeed = require('./getFastestSpeed');

describe('Return the fastest speed and the segment in which this speed was achieved.', () => {
    test('1. getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]) should return "The luger\'s fastest speed was 35.07 m/s on segment 5."', () => {
        expect(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128])).toEqual('The luger\'s fastest speed was 35.07 m/s on segment 5.');
    });
    test('2. getFastestSpeed([9.381, 7.417, 9.912, 8.815, 7.284]) should return "The luger\'s fastest speed was 37.75 m/s on segment 2."', () => {
        expect(getFastestSpeed([9.381, 7.417, 9.912, 8.815, 7.284])).toEqual('The luger\'s fastest speed was 37.75 m/s on segment 2.');
    });
    test('3. getFastestSpeed([8.890, 7.601, 9.093, 8.392, 6.912]) should return "The luger\'s fastest speed was 38.49 m/s on segment 3."', () => {
        expect(getFastestSpeed([8.890, 7.601, 9.093, 8.392, 6.912])).toEqual('The luger\'s fastest speed was 38.49 m/s on segment 3.');
    });
    test('4. getFastestSpeed([8.490, 7.732, 10.103, 8.489, 6.840]) should return "The luger\'s fastest speed was 37.69 m/s on segment 1."', () => {
        expect(getFastestSpeed([8.490, 7.732, 10.103, 8.489, 6.840])).toEqual('The luger\'s fastest speed was 37.69 m/s on segment 1.');
    });
    test('5. getFastestSpeed([8.204, 7.230, 9.673, 7.645, 6.508]) should return "The luger\'s fastest speed was 39.24 m/s on segment 4."', () => {
        expect(getFastestSpeed([8.204, 7.230, 9.673, 7.645, 6.508])).toEqual('The luger\'s fastest speed was 39.24 m/s on segment 4.');
    });
})