const addPunctuation = require('./addPunctuation');

describe('Add a period into the correct spots of the input sentence.' , () => {
    test('1. addPunctuation("Hello world") should return "Hello world."', () => {
        expect(addPunctuation("Hello world")).toEqual("Hello world.");
    });
    test('2. addPunctuation("Hello world It\'s nice today") should return "Hello world. It\'s nice today."', () => {
        expect(addPunctuation("Hello world It\'s nice today")).toEqual("Hello world. It\'s nice today.");
    });
    test('3. addPunctuation("JavaScript is great Sometimes") should return "JavaScript is great. Sometimes."', () => {
        expect(addPunctuation("JavaScript is great Sometimes")).toEqual("JavaScript is great. Sometimes.");
    });
    test('4. addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z") should return "A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z."', () => {
        expect(addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z")).toEqual("A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z.");
    });
    test('5. addPunctuation("Wait.. For it") should return "Wait... For it."', () => {
        expect(addPunctuation("Wait.. For it")).toEqual("Wait... For it.");
    });
})