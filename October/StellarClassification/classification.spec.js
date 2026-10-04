const classification = require('./classification');

describe('Given a temp return the classification.', () => {
    test('1. classification(5778) should return "G".', () => {
        expect(classification(5778)).toEqual("G");
    });
    test('2. classification(2400) should return "M".', () => {
        expect(classification(2400)).toEqual("M");
    });
    test('3. classification(9999) should return "A".', () => {
        expect(classification(9999)).toEqual("A");
    });
    test('4. classification(3700) should return "K".', () => {
        expect(classification(3700)).toEqual("K");
    });
    test('5. classification(3699) should return "M".', () => {
        expect(classification(3699)).toEqual("M");
    });
    test('6. classification(210000) should return "O".', () => {
        expect(classification(210000)).toEqual("O");
    });
    test('7. classification(6000) should return "F".', () => {
        expect(classification(6000)).toEqual("F");
    });
    test('8. classification(11432) should return "B".', () => {
        expect(classification(11432)).toEqual("B");
    });
});