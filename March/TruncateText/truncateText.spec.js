const truncateText = require('./truncateText');

describe('Return 50 units of a string from the input string.', () => {
    test('1. truncateText("The quick brown fox") should return "The quick brown f...".', () =>{
        expect(truncateText("The quick brown fox")).toEqual("The quick brown f...");
    });
    test('2. truncateText("The silky smooth sloth") should return "The silky smooth s...".', () =>{
        expect(truncateText("The silky smooth sloth")).toEqual("The silky smooth s...");
    });
    test('3. truncateText("THE LOUD BRIGHT BIRD") should return "THE LOUD BRIG...".', () =>{
        expect(truncateText("THE LOUD BRIGHT BIRD")).toEqual("THE LOUD BRIG...");
    });
    test('4. truncateText("The fast striped zebra") should return "The fast striped z...".', () =>{
        expect(truncateText("The fast striped zebra")).toEqual("The fast striped z...");
    });
    test('5. truncateText("The big black bear") should return "The big black bear".', () =>{
        expect(truncateText("The big black bear")).toEqual("The big black bear");
    });
});