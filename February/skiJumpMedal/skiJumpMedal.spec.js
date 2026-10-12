const skiJumpMedal = require('./skiJumpMedal');

describe('Determine if the point total is enough for the jumper to place', () => {
    test('1. skiJumpMedal(125.0, 58.0, 0.0, 6.0) should return "Gold".', () => {
        expect(skiJumpMedal(125.0, 58.0, 0.0, 6.0)).toEqual('Gold');
    });
    test('2. skiJumpMedal(119.0, 50.0, 1.0, 4.0) should return "Bronze".', () => {
        expect(skiJumpMedal(119.0, 50.0, 1.0, 4.0)).toEqual('Bronze');
    });
    test('3. skiJumpMedal(122.0, 52.0, -1.0, 4.0) should return "Silver".', () => {
        expect(skiJumpMedal(122.0, 52.0, -1.0, 4.0)).toEqual('Silver');
    });
    test('4. skiJumpMedal(118.0, 50.5, -1.5, 4.0) should return "No Medal".', () => {
        expect(skiJumpMedal(118.0, 50.5, -1.5, 4.0)).toEqual('No Medal');
    });
    test('5. skiJumpMedal(124.0, 50.5, 2.0, 5.0) should return "Gold".', () => {
        expect(skiJumpMedal(124.0, 50.5, 2.0, 5.0)).toEqual('Gold');
    });
    test('6. skiJumpMedal(119.0, 49.5, 0.0, 3.0) should return "No Medal".', () => {
        expect(skiJumpMedal(119.0, 49.5, 0.0, 3.0)).toEqual('No Medal');
    });
})