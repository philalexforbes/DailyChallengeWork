const generateSignature = require('./generateSignature');

describe('Given a name, title, and company generate a signature.', () => {
    test('1. generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo".', () => {
        expect(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"))
        .toEqual("--Quinn Waverly, Founder and CEO at TechCo");
    });
    test('2. generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo".', () => {
        expect(generateSignature("Alice Reed", "Engineer", "TechCo"))
        .toEqual(">>Alice Reed, Engineer at TechCo");
    });
    test('3. generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com".', () => {
        expect(generateSignature("Tina Vaughn", "Developer", "example.com"))
        .toEqual("::Tina Vaughn, Developer at example.com");
    });
    test('4. generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp".', () => {
        expect(generateSignature("B. B.", "Product Tester", "AcmeCorp"))
        .toEqual(">>B. B., Product Tester at AcmeCorp");
    });
    test('5. generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics".', () => {
        expect(generateSignature("windstorm", "Cloud Architect", "Atmospheronics"))
        .toEqual("::windstorm, Cloud Architect at Atmospheronics");
    });
});