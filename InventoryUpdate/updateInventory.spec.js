const updateInventory = require('./updateInventory');

describe('Verify that the updated arrays are correct', () => {
    test('updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]) should return [[3, "apples"], [8, "bananas"]].', ()=> {
        expect(updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]])).toEqual([[3, "apples"], [8, "bananas"]]);
    });
    test('updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]]) should return [[3, "apples"], [8, "bananas"], [4, "oranges"]].', ()=> {
        expect(updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]])).toEqual([[3, "apples"], [8, "bananas"], [4, "oranges"]]);
    });
    test('updateInventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]]) should return [[10, "apples"], [30, "bananas"], [20, "oranges"]].', ()=> {
        expect(updateInventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]])).toEqual([[10, "apples"], [30, "bananas"], [20, "oranges"]]);
    });
    test('updateInventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]].', ()=> {
        expect(updateInventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])).toEqual([[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]]);
    });
})