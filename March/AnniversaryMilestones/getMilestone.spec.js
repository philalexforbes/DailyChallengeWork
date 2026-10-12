const getMilestone = require('./getMilestone');

describe('Given a year return the milestone.', () => {
    test('1. getMilestone(0) should return "Newlyweds".', () => {
        expect(getMilestone(0)).toEqual("Newlyweds");
    });
    test('2. getMilestone(1) should return "Paper".', () => {
        expect(getMilestone(1)).toEqual("Paper");
    });
    test('3. getMilestone(8) should return "Wood".', () => {
        expect(getMilestone(8)).toEqual("Wood");
    });
    test('4. getMilestone(10) should return "Tin".', () => {
        expect(getMilestone(10)).toEqual("Tin");
    });
    test('5. getMilestone(26) should return "Silver".', () => {
        expect(getMilestone(26)).toEqual("Silver");
    });
    test('6. getMilestone(45) should return "Ruby".', () => {
        expect(getMilestone(45)).toEqual("Ruby");
    });
    test('7. getMilestone(50) should return "Gold".', () => {
        expect(getMilestone(50)).toEqual("Gold");
    });
    test('8. getMilestone(64) should return "Diamond".', () => {
        expect(getMilestone(64)).toEqual("Diamond");
    });
    test('9. getMilestone(71) should return "Platinum".', () => {
        expect(getMilestone(71)).toEqual("Platinum");
    });
});