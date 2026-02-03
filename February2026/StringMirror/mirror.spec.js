const mirror = require('./mirror');

describe('Verify that the input string is reversed and added to the end of the input string',  () => {
    test('1. mirror("freeCodeCamp") should return "freeCodeCamppmaCedoCeerf".', () => {
        expect(mirror("freeCodeCamp")).toEqual('freeCodeCamppmaCedoCeerf')
    });
    test('2. mirror("RaceCar") should return "RaceCarraCecaR".', () => {
        expect(mirror("RaceCar")).toEqual('RaceCarraCecaR')
    });
    test('3. mirror("helloworld") should return "helloworlddlrowolleh".', () => {
        expect(mirror("helloworld")).toEqual('helloworlddlrowolleh')
    });
    test('4. mirror("The quick brown fox...") should return "The quick brown fox......xof nworb kciuq ehT".', () => {
        expect(mirror("The quick brown fox...")).toEqual('The quick brown fox......xof nworb kciuq ehT')
    });
});