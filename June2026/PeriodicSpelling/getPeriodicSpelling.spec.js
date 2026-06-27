const getPeriodicSpelling = require('./getPeriodicSpelling');

describe('Given a word return an array of the periodic element symbols that spell that word.', () => {
    test('1. getPeriodicSpelling("neon") should return ["Ne", "O", "N"].', () => {
        expect(getPeriodicSpelling("neon"))
        .toEqual(["Ne", "O", "N"]);
    });
    test('2. getPeriodicSpelling("rational") should return ["Ra", "Ti", "O", "N", "Al"].', () => {
        expect(getPeriodicSpelling("rational"))
        .toEqual(["Ra", "Ti", "O", "N", "Al"]);
    });
    test('3. getPeriodicSpelling("yarn") should return ["Y", "Ar", "N"].', () => {
        expect(getPeriodicSpelling("yarn"))
        .toEqual(["Y", "Ar", "N"]);
    });
    test('4. getPeriodicSpelling("carbon") should return ["C", "Ar", "B", "O", "N"] or ["Ca", "Rb", "O", "N"].', () => {
        expect(getPeriodicSpelling("carbon"))
        .toEqual(["Ca", "Rb", "O", "N"]);
    });
    test('5. getPeriodicSpelling("noisy") should return ["N", "O", "I", "S", "Y"] or ["No", "I", "S", "Y"].', () => {
        expect(getPeriodicSpelling("noisy"))
        .toEqual(["No", "I", "S", "Y"]);
    });
    test('6. getPeriodicSpelling("bicycles") should return ["B", "I", "C", "Y", "Cl", "Es"] or ["Bi", "C", "Y", "Cl", "Es"].', () => {
        expect(getPeriodicSpelling("bicycles"))
        .toEqual(["Bi", "C", "Y", "Cl", "Es"]);
    });
    test('7. getPeriodicSpelling("optics") should return ["O", "P", "Ti", "C", "S"], ["O", "P", "Ti", "Cs"], ["O", "Pt", "I", "C", "S"], or ["O", "Pt", "I", "Cs"].', () => {
        expect(getPeriodicSpelling("optics"))
        .toEqual(["O", "Pt", "I", "Cs"]);
    });
    test('8. getPeriodicSpelling("value") should return [].', () => {
        expect(getPeriodicSpelling("value"))
        .toEqual([]);
    });
});