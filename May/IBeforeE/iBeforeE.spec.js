const iBeforeE = require('./iBeforeE.js');

describe('Given a sentence with words that have i before e except after c. Return the corrected spellings.', () => {
    test('1. iBeforeE("beleive") should return "believe".', () => {
        expect(iBeforeE("beleive"))
        .toEqual("believe");
    });
    test('2. iBeforeE("recieve") should return "receive".', () => {
        expect(iBeforeE("recieve"))
        .toEqual("receive");
    });
    test('3. iBeforeE("we recieved a breif") should return "we received a brief".', () => {
        expect(iBeforeE("we recieved a breif"))
        .toEqual("we received a brief");
    });
    test('4. iBeforeE("she beleived the friendly niece could percieve the greif") should return "she believed the friendly niece could perceive the grief".', () => {
        expect(iBeforeE("she beleived the friendly niece could percieve the greif"))
        .toEqual("she believed the friendly niece could perceive the grief");
    });
    test('5. iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit") should return "we received relief after the thief gave us a brief piece of fierce deceit".', () => {
        expect(iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit"))
        .toEqual("we received relief after the thief gave us a brief piece of fierce deceit");
    });
});