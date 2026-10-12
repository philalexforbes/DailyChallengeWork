const getLuckyNumber = require('./getLuckyNumber');

describe('Given a name, return the corresponding lucky number for that name.', () => {
    test('1. getLuckyNumber("John Doe") should return 21.', () => {
        expect(getLuckyNumber("John Doe")).toEqual(21);
    });
    test('2. getLuckyNumber("Olivia Lewis") should return 52.', () => {
        expect(getLuckyNumber("Olivia Lewis")).toEqual(52);
    });
    test('3. getLuckyNumber("James Wilson") should return 18.', () => {
        expect(getLuckyNumber("James Wilson")).toEqual(18);
    });
    test('4. getLuckyNumber("Elizabeth Hernandez") should return 81.', () => {
        expect(getLuckyNumber("Elizabeth Hernandez")).toEqual(81);
    });
    test('5. getLuckyNumber("Mike Walker") should return 32.', () => {
        expect(getLuckyNumber("Mike Walker")).toEqual(32);
    });
    test('6. getLuckyNumber("Chloe Perez") should return 13.', () => {
        expect(getLuckyNumber("Chloe Perez")).toEqual(13);
    });
});