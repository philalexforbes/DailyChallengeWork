const toRoman = require('./toRoman');

describe('Input numeric value to return the Roman numeral version', () => {
    test('toRoman(18) should return "XVIII".', ()=> {
        expect(toRoman(18)).toEqual('XVIII');
    });
    test('toRoman(19) should return "XIX".', ()=> {
        expect(toRoman(19)).toEqual('XIX');
    });
    test('toRoman(1464) should return "MCDLXIV".', ()=> {
        expect(toRoman(1464)).toEqual('MCDLXIV');
    });
    test('toRoman(2025) should return "MMXXV".', ()=> {
        expect(toRoman(2025)).toEqual('MMXXV');
    });
    test('toRoman(3999) should return "MMMCMXCIX".', ()=> {
        expect(toRoman(3999)).toEqual('MMMCMXCIX');
    });
})