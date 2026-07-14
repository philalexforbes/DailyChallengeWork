const petYears = require('./petYears');

describe('Given a pet and their age return their age in pet years.', () => {
    test('1. petYears("dog", 5) should return 35.', () => {
        expect(petYears("dog", 5)).toEqual(35);
    });
    test('2. petYears("cat", 9) should return 54.', () => {
        expect(petYears("cat", 9)).toEqual(54);
    });
    test('3. petYears("rabbit", 3) should return 24.', () => {
        expect(petYears("rabbit", 3)).toEqual(24);
    });
    test('4. petYears("hamster", 4) should return 120.', () => {
        expect(petYears("hamster", 4)).toEqual(120);
    });
    test('5. petYears("guinea pig", 5) should return 60.', () => {
        expect(petYears("guinea pig", 5)).toEqual(60);
    });
    test('6. petYears("goldfish", 2) should return 12.', () => {
        expect(petYears("goldfish", 2)).toEqual(12);
    });
    test('7. petYears("bird", 1) should return 5.', () => {
        expect(petYears("bird", 1)).toEqual(5);
    });
});