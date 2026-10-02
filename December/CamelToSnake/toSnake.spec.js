const toSnake = require('./toSnake');

describe('Verify returned string is in snake case', () => {
    test('toSnake("helloWorld") should return "hello_world".', ()=> {
        expect(toSnake('helloWorld')).toEqual('hello_world');
    });
    test('toSnake("myVariableName") should return "my_variable_name".', () =>{
        expect(toSnake('myVariableName')).toEqual('my_variable_name');
    });
    test('toSnake("freecodecampDailyChallenges") should return "freecodecamp_daily_challenges".', ()=> {
        expect(toSnake('freecodecampDailyChallenges')).toEqual('freecodecamp_daily_challenges');
    });
})