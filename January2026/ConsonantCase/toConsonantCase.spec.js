const toConsonantCase = require('./toConsonantCase');

describe('Verify the string is transformed as expected.', () => {
    test('1. toConsonantCase("helloworld") should return "HeLLoWoRLD".', () => {
        expect(toConsonantCase("helloworld")).toEqual('HeLLoWoRLD');
    });
    test('2. toConsonantCase("HELLOWORLD") should return "HeLLoWoRLD".', () => {
        expect(toConsonantCase("HELLOWORLD")).toEqual('HeLLoWoRLD');
    });
    test('3. toConsonantCase("_hElLO-WOrlD-") should return "_HeLLo_WoRLD_".', () => {
        expect(toConsonantCase("_hElLO-WOrlD-")).toEqual('_HeLLo_WoRLD_');
    });
    test('4. toConsonantCase("_~-generic_~-variable_~-name_~-here-~_") should return "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_".', () => {
        expect(toConsonantCase("_~-generic_~-variable_~-name_~-here-~_")).toEqual('_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_');
    });
});