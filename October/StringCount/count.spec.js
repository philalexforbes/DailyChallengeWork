const count = require('./count');

describe('Given a string and a pattern return the count of how many times the pattern is in the string.', () => {
    test('1. count(\'abcdefg\', \'def\') should return 1.', () => {
        expect(count('abcdefg', 'def')).toEqual(1);
    });
    test('2. count(\'hello\', \'world\') should return 0.', () => {
        expect(count('hello', 'world')).toEqual(0);
    });
    test('3. count(\'mississippi\', \'iss\') should return 2.', () => {
        expect(count('mississippi', 'iss')).toEqual(2);
    });
    test('4. count(\'she sells seashells by the seashore\', \'sh\') should return 3.', () => {
        expect(count('she sells seashells by the seashore', 'sh')).toEqual(3);
    });
    test('5. count(\'101010101010101010101\', \'101\') should return 10.', () => {
        expect(count('101010101010101010101', '101')).toEqual(10);
    });
});