const hasConsonantCount = require('./hasConsonantCount');

describe('Expected consonant count matches the string', () => {
    test('hasConsonantCount("helloworld", 7) should return true.', ()=>{
        expect(hasConsonantCount('helloworld', 7)).toEqual(true);
    });
    test('hasConsonantCount("eieio", 5) should return false.', ()=>{
        expect(hasConsonantCount('eieio', 5)).toEqual(false);
    });
    test('hasConsonantCount("freeCodeCamp Rocks!", 11) should return true.', ()=>{
        expect(hasConsonantCount('freeCodeCamp Rocks!', 11)).toEqual(true);
    });
    test('hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24) should return false', ()=>{
        expect(hasConsonantCount('Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.', 24)).toEqual(false);
    });
    test('hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23) should return true.', ()=>{
        expect(hasConsonantCount('Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.', 23)).toEqual(true);
    });
})