const goldilocksZone = require('./goldilocksZone');

describe('Given a mass determine the goldilocks zone for that mass.', () => {
    test('1. goldilocksZone(1) should return [0.95, 1.37].', () => {
        expect(goldilocksZone(1)).toEqual([0.95, 1.37]);
    });
    test('2. goldilocksZone(0.5) should return [0.28, 0.41].', () => {
        expect(goldilocksZone(0.5)).toEqual([0.28, 0.41]);
    });
    test('3. goldilocksZone(6) should return [21.85, 31.51].', () => {
        expect(goldilocksZone(6)).toEqual([21.85, 31.51]);
    });
    test('4. goldilocksZone(3.7) should return [9.38, 13.52].', () => {
        expect(goldilocksZone(3.7)).toEqual([9.38, 13.52]);
    });
    test('5. goldilocksZone(20) should return [179.69, 259.13].', () => {
        expect(goldilocksZone(20)).toEqual([179.69, 259.13]);
    });
});