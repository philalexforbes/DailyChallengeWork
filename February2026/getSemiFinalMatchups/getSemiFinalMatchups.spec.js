const getSemiFinalMatchups = require('./getSemiFinalMatchups');

describe('Given the number of wins, overtime wins, overtime losses, and loses determin the first through fourth players.', () => {
    test('1. getSemiFinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]) should return "The semi-final games will be FIN vs SWE and CAN vs USA.".', () => {
        expect(getSemiFinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]))
        .toEqual('The semi-final games will be FIN vs SWE and CAN vs USA.');
    });
    test('2. getSemiFinalMatchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"]) should return "The semi-final games will be USA vs CZE and CAN vs FIN.".', () => {
        expect(getSemiFinalMatchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"]))
        .toEqual('The semi-final games will be USA vs CZE and CAN vs FIN.');
    });
    test('3. getSemiFinalMatchups(["CAN: 3-2-0-0", "CZE: 2-1-2-0", "LAT: 0-0-1-4", "ITA: 1-1-1-2", "DEN: 1-0-0-4", "USA: 3-1-1-0"]) should return "The semi-final games will be CAN vs ITA and USA vs CZE.".', () => {
        expect(getSemiFinalMatchups(["CAN: 3-2-0-0", "CZE: 2-1-2-0", "LAT: 0-0-1-4", "ITA: 1-1-1-2", "DEN: 1-0-0-4", "USA: 3-1-1-0"]))
        .toEqual('The semi-final games will be CAN vs ITA and USA vs CZE.');
    });
    test('4. getSemiFinalMatchups(["AUT: 2-2-1-0", "DEN: 1-0-0-4", "ITA: 1-1-1-2", "JPN: 3-2-0-0", "KOR: 2-1-2-0", "LAT: 0-0-1-4"]) should return "The semi-final games will be JPN vs ITA and AUT vs KOR.".', () => {
        expect(getSemiFinalMatchups(["AUT: 2-2-1-0", "DEN: 1-0-0-4", "ITA: 1-1-1-2", "JPN: 3-2-0-0", "KOR: 2-1-2-0", "LAT: 0-0-1-4"]))
        .toEqual('The semi-final games will be JPN vs ITA and AUT vs KOR.');
    });
});