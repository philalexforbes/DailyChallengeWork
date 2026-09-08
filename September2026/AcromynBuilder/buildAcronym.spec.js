const buildAcronym = require('./buildAcronym');

describe('Given a string return the acronym of that string.', () => {
    test('1. buildAcronym("Search Engine Optimization") should return "SEO".', () => {
        expect(buildAcronym("Search Engine Optimization"))
        .toEqual("SEO");
    });
    test('2. buildAcronym("Frequently Asked Questions") should return "FAQ".', () => {
        expect(buildAcronym("Frequently Asked Questions"))
        .toEqual("FAQ");
    });
    test('3. buildAcronym("National Aeronautics and Space Administration") should return "NASA".', () => {
        expect(buildAcronym("National Aeronautics and Space Administration"))
        .toEqual("NASA");
    });
    test('4. buildAcronym("Federal Bureau of Investigation") should return "FBI".', () => {
        expect(buildAcronym("Federal Bureau of Investigation"))
        .toEqual("FBI");
    });
    test('5. buildAcronym("For your information") should return "FYI".', () => {
        expect(buildAcronym("For your information"))
        .toEqual("FYI");
    });
    test('6. buildAcronym("By the way") should return "BTW".', () => {
        expect(buildAcronym("By the way"))
        .toEqual("BTW");
    });
    test('7. buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".', () => {
        expect(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"))
        .toEqual("AUHWPOTIMSH");
    });
});

