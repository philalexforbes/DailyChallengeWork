const findOrg = require('./findOrg');

describe('Given the acronym return what it stands for.', () => {
    test('1. findOrg("NASA") should return "National Avocado Storage Authority".', () => {
        expect(findOrg("NASA")).toEqual("National Avocado Storage Authority");
    });
    test('2. findOrg("CIA") should return "Cats Infiltration Agency".', () => {
        expect(findOrg("CIA")).toEqual("Cats Infiltration Agency");
    });
    test('3. findOrg("FBI") should return "Fluffy Beanbag Inspectors".', () => {
        expect(findOrg("FBI")).toEqual("Fluffy Beanbag Inspectors");
    });
    test('4. findOrg("DOJ") should return "Department Of Jelly".', () => {
        expect(findOrg("DOJ")).toEqual("Department Of Jelly");
    });
    test('5. findOrg("WHO") should return "Wild Honey Organization".', () => {
        expect(findOrg("WHO")).toEqual("Wild Honey Organization");
    });
    test('6. findOrg("EPA") should return "Eating Pancakes Administration".', () => {
        expect(findOrg("EPA")).toEqual("Eating Pancakes Administration");
    });
});