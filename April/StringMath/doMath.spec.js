const doMath = require('./doMath');

describe('Given a string extract the numbers and perform the correct math operation on those numbers.', () => {
    test('1. doMath("3ab10c8") should return 5.', () => {
        expect(doMath("3ab10c8")).toEqual(5);
    });
    test('2. doMath("6MINUS4") should return 2.', () => {
        expect(doMath("6MINUS4")).toEqual(2);
    });
    test('3. doMath("9plus3") should return 12.', () => {
        expect(doMath("9plus3")).toEqual(12);
    });
    test('4. doMath("5fkwo#10i#%.<>15P=@20!#B/25") should return 15.', () => {
        expect(doMath("5fkwo#10i#%.<>15P=@20!#B/25")).toEqual(15);
    });
    test('5. doMath("a.67,1$lk6ldf34@#LD@]2d32d2\'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt") should return 67.', () => {
        expect(doMath("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt")).toEqual(67);
    });
});