const getHeadings = require('./getHeadings');

describe('Given a csv heading return them as an array with trailing and leading spaces removed.', () => {
    test('1. getHeadings("name,age,city") should return ["name", "age", "city"].', () => {
        expect(getHeadings("name,age,city")).toEqual(["name", "age", "city"]);
    });
    test('2. getHeadings("first name,last name,phone") should return ["first name", "last name", "phone"].', () => {
        expect(getHeadings("first name,last name,phone")).toEqual(["first name", "last name", "phone"]);
    });
    test('3. getHeadings("username , email , signup date ") should return ["username", "email", "signup date"].', () => {
        expect(getHeadings("username , email , signup date ")).toEqual(["username", "email", "signup date"]);
    });
});