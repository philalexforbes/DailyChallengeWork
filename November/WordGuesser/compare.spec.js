const compare = require('./compare');

describe('Given a secret word and a guess. Return a numeric string that displays if the guess has correct letters.', () => {
    test('1. compare("APPLE", "POPPA") should return "10201".', () => {
        expect(compare("APPLE", "POPPA")).toEqual("10201");
    });
    test('2. compare("REACT", "TRACE") should return "11221".', () => {
        expect(compare("REACT", "TRACE")).toEqual("11221");
    });
    test('3. compare("DEBUGS", "PYTHON") should return "000000".', () => {
        expect(compare("DEBUGS", "PYTHON")).toEqual("000000");
    });
    test('4. compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222".', () => {
        expect(compare("JAVASCRIPT", "TYPESCRIPT")).toEqual("0000222222");
    });
    test('5. compare("ORANGE", "ROUNDS") should return "110200".', () => {
        expect(compare("ORANGE", "ROUNDS")).toEqual("110200");
    });
    test('6. compare("WIRELESS", "ETHERNET") should return "10021000".', () => {
        expect(compare("WIRELESS", "ETHERNET")).toEqual("10021000");
    });
});