const navigate = require('./navigate');

describe('Given an array of commands determine were the user is on site.', () => {
    test('1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".', () => {
        expect(navigate(["Visit About Us", "Back", "Forward"]))
        .toEqual("About Us");
    });
    test('2. navigate(["Forward"]) should return "Home".', () => {
        expect(navigate(["Forward"]))
        .toEqual("Home");
    });
    test('3. navigate(["Back"]) should return "Home".', () => {
        expect(navigate(["Back"]))
        .toEqual("Home");
    });
    test('4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".', () => {
        expect(navigate(["Visit About Us", "Visit Gallery"]))
        .toEqual("Gallery");
    });
    test('5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".', () => {
        expect(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]))
        .toEqual("Home");
    });
    test('6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact".', () => {
        expect(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]))
        .toEqual("Contact");
    });
    test('7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us".', () => {
        expect(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]))
        .toEqual("Visit Us");
    });
});