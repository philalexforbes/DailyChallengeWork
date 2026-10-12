const compress = require('./compress');

describe('Given a string return it sans repeat words and numbers replacing the repeated words position.', () => {
    test('1. compress("practice makes perfect and perfect practice makes perfect") should return "practice makes perfect and 3 1 2 3".', () => {
        expect(compress("practice makes perfect and perfect practice makes perfect")).toEqual("practice makes perfect and 3 1 2 3");
    });
    test('2. compress("hello hello hello") should return "hello 1 1".', () => {
        expect(compress("hello hello hello")).toEqual("hello 1 1");
    });
    test('3. compress("the cat sat on the mat on which the cat sat") should return "the cat sat on 1 mat 4 which 1 2 3".', () => {
        expect(compress("the cat sat on the mat on which the cat sat")).toEqual("the cat sat on 1 mat 4 which 1 2 3");
    });
    test('4. compress("the more you know the more you realize you don\'t know") should return "the more you know 1 2 3 realize 3 don\'t 4".', () => {
        expect(compress("the more you know the more you realize you don't know")).toEqual("the more you know 1 2 3 realize 3 don't 4");
    });
    test('5. compress("lorem ipsum dolor sit per elit donec sit nostra libero per donec ligula sit gravida at elit vitae a elit sodales donec en donec at dolor nam ligula dignissim risus at ligula per nam ipsum ipsum gravida en elit per ipsum ligula en gravida per sodales sit at nam lorem sit per libero en ipsum elit sit sodales sit risus elit risus ipsum elit at gravida vitae en dignissim nam sit vitae sollicitudin per nostra per sit libero") should return "lorem ipsum dolor sit per elit donec 4 nostra libero 5 7 ligula 4 gravida at 6 vitae a 6 sodales 7 en 7 16 3 nam 13 dignissim risus 16 13 5 27 2 2 15 23 6 5 2 13 23 15 5 21 4 16 27 1 4 5 10 23 2 6 4 21 4 30 6 30 2 6 16 15 18 23 29 27 4 18 sollicitudin 5 9 5 4 10".', () => {
        expect(compress("lorem ipsum dolor sit per elit donec sit nostra libero per donec ligula sit gravida at elit vitae a elit sodales donec en donec at dolor nam ligula dignissim risus at ligula per nam ipsum ipsum gravida en elit per ipsum ligula en gravida per sodales sit at nam lorem sit per libero en ipsum elit sit sodales sit risus elit risus ipsum elit at gravida vitae en dignissim nam sit vitae sollicitudin per nostra per sit libero"))
        .toEqual("lorem ipsum dolor sit per elit donec 4 nostra libero 5 7 ligula 4 gravida at 6 vitae a 6 sodales 7 en 7 16 3 nam 13 dignissim risus 16 13 5 27 2 2 15 23 6 5 2 13 23 15 5 21 4 16 27 1 4 5 10 23 2 6 4 21 4 30 6 30 2 6 16 15 18 23 29 27 4 18 sollicitudin 5 9 5 4 10");
    });
});