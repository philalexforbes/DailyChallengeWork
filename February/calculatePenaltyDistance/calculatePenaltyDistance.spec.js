const calculatePenaltyDistance = require('./calculatePenaltyDistance');

describe('Given the number of targets hit each round calculate the penalty distance correctly', () => {
    test('1. calculatePenaltyDistance([4, 4]) should return 300.', () => {
        expect(calculatePenaltyDistance([4, 4])).toEqual(300);
    });
    test('2. calculatePenaltyDistance([5, 5]) should return 0.', () => {
        expect(calculatePenaltyDistance([5, 5])).toEqual(0);
    });
    test('3. calculatePenaltyDistance([4, 5, 3, 5]) should return 450.', () => {
        expect(calculatePenaltyDistance([4, 5, 3, 5])).toEqual(450);
    });
    test('4. calculatePenaltyDistance([5, 4, 5, 5]) should return 150.', () => {
        expect(calculatePenaltyDistance([5, 4, 5, 5])).toEqual(150);
    });
    test('5. calculatePenaltyDistance([4, 3, 0, 3]) should return 1500.', () => {
        expect(calculatePenaltyDistance([4, 3, 0, 3])).toEqual(1500);
    });
});