const getZoneViolations = require('./getZoneViolations');

describe('Given a 2-D array of zoning determin the violations if any and return a 2-D array of violations or an empty array if none.', () => {
    test('1. getZoneViolations([["R", "C"], ["", "C"]]) should return [[0, 0], [0, 1]].', () => {
        expect(getZoneViolations([["R", "C"], ["", "C"]]))
            .toEqual([[0, 0], [0, 1]]);
    });
    test('2. getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]) should return [[0, 1], [1, 1]].', () => {
        expect(getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]))
            .toEqual([[0, 1], [1, 1]]);
    });
    test('3. getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]) should return [].', () => {
        expect(getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]))
            .toEqual([]);
    });
    test('4. getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]) should return [[0, 1], [0, 2], [0, 3]].', () => {
        expect(getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]))
            .toEqual([[0, 1], [0, 2], [0, 3]]);
    });
    test('5. getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]) should return [[2, 3], [2, 4], [3, 1], [3, 2]].', () => {
        expect(getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]))
            .toEqual([[2, 3], [2, 4], [3, 1], [3, 2]]);
    });
});