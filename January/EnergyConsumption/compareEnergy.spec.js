const compareEnergy = require('./compareEnergy');

describe('Return which used more electricity during a workout', () => {
    test('1. compareEnergy(250, 50) should return "Workout".', () => {
        expect(compareEnergy(250, 50)).toEqual('Workout');
    });
    test('2. compareEnergy(100, 200) should return "Devices".', () => {
        expect(compareEnergy(100, 200)).toEqual('Devices');
    });
    test('3. compareEnergy(450, 523) should return "Equal".', () => {
        expect(compareEnergy(450, 523)).toEqual('Equal');
    });
    test('4. compareEnergy(300, 75) should return "Workout".', () => {
        expect(compareEnergy(300, 75)).toEqual('Workout');
    });
    test('5. compareEnergy(200, 250) should return "Devices".', () => {
        expect(compareEnergy(200, 250)).toEqual('Devices');
    });
    test('6. compareEnergy(900, 1046) should return "Equal".', () => {
        expect(compareEnergy(900, 1046)).toEqual('Equal');
    });
});