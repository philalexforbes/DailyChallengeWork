const capitalizeFibonacci = require('./capitalizeFibonacci');

describe('Given a string capitalize the characters that correspond to the Fibonacci sequence.', () => {
    test('1. capitalizeFibonacci("hello world") should return "HELLo woRld".', () => {
        expect(capitalizeFibonacci("hello world")).toEqual("HELLo woRld");
    });
    test('2. capitalizeFibonacci("HELLO WORLD") should return "HELLo woRld".', () => {
        expect(capitalizeFibonacci("HELLO WORLD")).toEqual("HELLo woRld");
    });
    test('3. capitalizeFibonacci("hello, world!") should return "HELLo, wOrld!".', () => {
        expect(capitalizeFibonacci("hello, world!")).toEqual("HELLo, wOrld!");
    });
    test('4. capitalizeFibonacci("The quick brown fox jumped over the lazy dog.") should return "THE qUicK broWn fox jUmped over thE lazy dog.".', () => {
        expect(capitalizeFibonacci("The quick brown fox jumped over the lazy dog."))
        .toEqual("THE qUicK broWn fox jUmped over thE lazy dog.");
    });
    test('5. capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.") should return "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.".', () => {
        expect(capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl."))
        .toEqual("LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.");
    });
});