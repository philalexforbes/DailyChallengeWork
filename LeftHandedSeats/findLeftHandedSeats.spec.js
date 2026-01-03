const findLeftHandedSeats = require('./findLeftHandedSeats');

describe('Determine the correct number of open seats for left-handed persons', () => {
    test('1. findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]) should return 2.', () => {
        expect(findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]])).toEqual(2);
    });
    test('2. findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]) should return 8.', () => {
        expect(findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]])).toEqual(8);
    });
    test('3. findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]) should return 0.', () => {
        expect(findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]])).toEqual(0);
    });
    test('4. findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]) should return 1.', () => {
        expect(findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]])).toEqual(1);
    });
    test('5. findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]) should return 5.', () => {
        expect(findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]])).toEqual(5);
    });
})