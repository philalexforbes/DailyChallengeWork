const moonPhase = require('./moonPhase');

describe('Given a date determine the correct moon phase starting from 01-06-2000', () => {
    test('1. moonPhase("2000-01-12") should return "New".', () => {
        expect(moonPhase("2000-01-12")).toEqual("New");
    });
    test('2. moonPhase("2000-01-13") should return "Waxing".', () => {
        expect(moonPhase("2000-01-13")).toEqual("Waxing");
    });
    test('3. moonPhase("2014-10-15") should return "Full".', () => {
        expect(moonPhase("2014-10-15")).toEqual("Full");
    });
    test('4. moonPhase("2012-10-21") should return "Waning".', () => {
        expect(moonPhase("2012-10-21")).toEqual("Waning");
    });
    test('5. moonPhase("2022-12-14") should return "New".', () => {
        expect(moonPhase("2022-12-14")).toEqual("New");
    });
});