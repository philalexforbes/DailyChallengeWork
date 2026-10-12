const britishToAmerican = require('./britishToAmerican');

describe('Given a sentence with British spellings of words return the sentence with American spellings.', () => {
    test('1. britishToAmerican("I love the colour blue.") should return "I love the color blue."', () => {
        expect(britishToAmerican("I love the colour blue."))
            .toEqual("I love the color blue.");
    });
    test('2. britishToAmerican("The fibre optic cable is new.") should return "The fiber optic cable is new."', () => {
        expect(britishToAmerican("The fibre optic cable is new.") )
            .toEqual("The fiber optic cable is new.");
    });
    test('3. britishToAmerican("It\'s an honour to meet someone with such humour.") should return "It\'s an honor to meet someone with such humor."', () => {
        expect(britishToAmerican("It's an honour to meet someone with such humour."))
            .toEqual("It's an honor to meet someone with such humor.");
    });
    test('4. britishToAmerican("The unrecognised artist analysed his colour palette at the centre.") should return "The unrecognized artist analyzed his color palette at the center."', () => {
        expect(britishToAmerican("The unrecognised artist analysed his colour palette at the centre."))
            .toEqual("The unrecognized artist analyzed his color palette at the center.");
    });
    test('5. britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful.") should return "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful".', () => {
        expect(britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful."))
            .toEqual("The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful.");
    });
});