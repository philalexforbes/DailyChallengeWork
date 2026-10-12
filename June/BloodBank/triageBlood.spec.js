const triageBlood = require('./triageBlood');

describe('Given an array of blood and an array of patients return how many patients can be served.', () => {
    test('1. triageBlood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".', () => {
        expect(triageBlood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"]))
        .toEqual("4 of 4 patients served");
    });
    test('2. triageBlood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"]) should return "3 of 5 patients served".', () => {
        expect(triageBlood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"]))
        .toEqual("3 of 5 patients served");
    });
    test('3. triageBlood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"]) should return "4 of 5 patients served".', () => {
        expect(triageBlood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"]))
        .toEqual("4 of 5 patients served");
    });
    test('4. triageBlood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".', () => {
        expect(triageBlood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"]))
        .toEqual("4 of 4 patients served");
    });
    test('5. triageBlood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"]) should return "8 of 11 patients served".', () => {
        expect(triageBlood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"]))
        .toEqual("8 of 11 patients served");
    });
    test('6. triageBlood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"]) should return "13 of 14 patients served".', () => {
        expect(triageBlood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"]))
        .toEqual("13 of 14 patients served");
    });
});