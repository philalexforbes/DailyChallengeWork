const largestNumber = require('./largestNumber');

describe('With a string of numbers separated by , ; : ! or ? find the largest number.', () => {
    test('1. largestNumber("1,2") should return 2.', () => {
        expect(largestNumber("1,2")).toEqual(2);
    });
    test('2. largestNumber("4;15:60,26?52!0") should return 60.', () => {
        expect(largestNumber("4;15:60,26?52!0")).toEqual(60);
    });
    test('3. largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011") should return -402.', () => {
        expect(largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011")).toEqual(-402);
    });
    test('4. largestNumber("12;-50,99.9,49.1!-10.1?88?16") should return 99.9.', () => {
        expect(largestNumber("12;-50,99.9,49.1!-10.1?88?16")).toEqual(99.9);
    });
});