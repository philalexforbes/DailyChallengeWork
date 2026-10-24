const dive = require('./dive');

describe('Given a matrix and coordinates, return if treasure is found.', () => {
    test('1. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) should return "Recovered".', () => {
        expect(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]))
        .toEqual("Recovered");
    });
    test('2. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) should return "Empty".', () => {
        expect(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]))
        .toEqual("Empty");
    });
    test('3. dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) should return "Found".', () => {
        expect(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]))
        .toEqual("Found");
    });
    test('4. dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) should return "Found".', () => {
        expect(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]))
        .toEqual("Found");
    });
    test('5. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) should return "Recovered".', () => {
        expect(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]))
        .toEqual("Recovered");
    });
    test('6. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) should return "Empty".', () => {
        expect(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]))
        .toEqual("Empty");
    });
});