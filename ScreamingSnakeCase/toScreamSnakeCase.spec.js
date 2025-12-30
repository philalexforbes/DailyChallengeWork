const toScreamingSnakeCase = require('./toScreamSnakeCase');

describe('Verify the inputted string is converted to UpperCase and Snake Case', () => {
    test('1. toScreamingSnakeCase("userEmail") should return "USER_EMAIL".', () => {
        expect(toScreamingSnakeCase("userEmail")).toEqual("USER_EMAIL");
    });
    test('2. toScreamingSnakeCase("UserPassword") should return "USER_PASSWORD".', () => {
        expect(toScreamingSnakeCase("UserPassword")).toEqual("USER_PASSWORD");
    });
    test('3. toScreamingSnakeCase("user_id") should return "USER_ID".', () => {
        expect(toScreamingSnakeCase("user_id")).toEqual("USER_ID");
    });
    test('4. toScreamingSnakeCase("user-address") should return "USER_ADDRESS".', () => {
        expect(toScreamingSnakeCase("user-address")).toEqual("USER_ADDRESS");
    });
    test('5. toScreamingSnakeCase("username") should return "USERNAME".', () => {
        expect(toScreamingSnakeCase("username")).toEqual("USERNAME");
    });
});