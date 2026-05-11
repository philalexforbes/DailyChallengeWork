const getOldest = require('./getOldest');

describe('Given an object of arrays determine the oldest people.', () => {
    test('1. getOldest([{ name: "Brenda", age: 40 }]) should return ["Brenda"].', () => {
        expect(getOldest([{ name: "Brenda", age: 40 }])).toEqual(["Brenda"]);
    });
    test('2. getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]) should return ["Alice"].', () => {
        expect(getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }])).toEqual(["Alice"]);
    });
    test('3. getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }]) should return ["Bill", "Carol"].', () => {
        expect(getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }])).toEqual(["Bill", "Carol"]);
    });
    test('4. getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]) should return ["George", "Holly", "Zach"].', () => {
        expect(getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]))
        .toEqual(["George", "Holly", "Zach"]);
    });
});