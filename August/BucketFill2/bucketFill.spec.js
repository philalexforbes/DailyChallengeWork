const bucketFill = require("./bucketFill");

describe('Given a grid determine the number of clicks to turn all colors that designated color.', () => {
    test('1. bucketFill([["R", "R"], ["R", "R"]], "G") should return 1.', () => {
        expect(bucketFill([["R", "R"], ["R", "R"]], "G"))
        .toEqual(1);
    });
    test('2. bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0.', () => {
        expect(bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B"))
        .toEqual(0);
    });
    test('3. bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3.', () => {
        expect(bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R"))
        .toEqual(3);
    });
    test('4. bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5.', () => {
        expect(bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P"))
        .toEqual(5);
    });
    test('5. bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12.', () => {
        expect(bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y"))
        .toEqual(12);
    });
});