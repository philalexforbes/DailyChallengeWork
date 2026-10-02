const countPermutations = require('./countPermutations');

describe('Are the number of permutations correct', ()=> {
    test('countPermutations("abb") should return 3.', ()=> {
        expect(countPermutations('abb')).toEqual(3);
    });
    test('countPermutations("abc") should return 6.', ()=>{
        expect(countPermutations('abc')).toEqual(6);
    });
    test('countPermutations("racecar") should return 630.', ()=>{
        expect(countPermutations('racecar')).toEqual(630);
    });
    test('countPermutations("freecodecamp") should return 39916800.', ()=>{
        expect(countPermutations('freecodecamp')).toEqual(39916800);
    });

})