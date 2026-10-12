const bucketFill = require('./bucketFill');

describe('Determine the number of clicks to fill a grid with the same color.', () => {
    test('1. bucketFill([["B", "B"], ["B", "B"]], "R") should return 1.', () => {
        expect(bucketFill([["B", "B"], ["B", "B"]], "R"))
        .toEqual(1);
    });
    test('2. bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G") should return 0.', () => {
        expect(bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G"))
        .toEqual(0);
    });
    test('3. bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O") should return 2.', () => {
        expect(bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O"))
        .toEqual(2);
    });
    test('bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R") should return 4.', () => {
        expect(bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R"))
        .toEqual(4);
    });
    test('5. bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P") should return 5.', () => {
        expect(bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P"))
        .toEqual(5);
    });
    test('6. bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y") should return 3.', () => {
        expect(bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y"))
        .toEqual(3);
    });
});