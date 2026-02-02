const groundhogDayPrediction = require('./groundhogDayPrediction');

describe('Determine from the input if we will get an early spring or more winter', () => {
    test('1. groundhogDayPrediction(true) should return "Looks like we\'ll have six more weeks of winter.".', () => {
        expect(groundhogDayPrediction(true)).toEqual('Looks like we\'ll have six more weeks of winter.');
    });
    test('2. groundhogDayPrediction(false) should return "It\'s going to be an early spring.".', () => {
        expect(groundhogDayPrediction(false)).toEqual('It\'s going to be an early spring.');
    });
    test('3. groundhogDayPrediction(null) should return "No prediction this year.".', () => {
        expect(groundhogDayPrediction(null)).toEqual('No prediction this year.');
    });
    test('4. groundhogDayPrediction(" ") should return "No prediction this year.".', () => {
        expect(groundhogDayPrediction(" ")).toEqual('No prediction this year.');
    });
    test('5. groundhogDayPrediction("true") should return "No prediction this year.".', () => {
        expect(groundhogDayPrediction("true")).toEqual('No prediction this year.');
    });
})