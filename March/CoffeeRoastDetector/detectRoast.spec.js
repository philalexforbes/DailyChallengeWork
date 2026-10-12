const detectRoast = require("./detectRoast");

describe("Given a string of apostrophes, dashes, and periods determine the coffee roast type by there average.", () => {
    test("1. detectRoast(\"\'\'-\'\'\'\'\'\'-\'-\'\'--\'\'\'\'\") should return \"Light\".", () => {
        expect(detectRoast("''-''''''-'-''--''''")).toEqual("Light");
    });
    test("2. detectRoast(\".'-''-''..'''.-.-''-\") should return \"Medium\".", () => {
        expect(detectRoast(".'-''-''..'''.-.-''-")).toEqual("Medium");
    });
    test("3. detectRoast(\"--.''--'-''.--..-.--\") should return \"Medium\".", () => {
        expect(detectRoast("--.''--'-''.--..-.--")).toEqual("Medium");
    });
    test("4. detectRoast(\"-...'-......-..-...-\") should return \"Dark\".", () => {
        expect(detectRoast("-...'-......-..-...-")).toEqual("Dark");
    });
    test("5. detectRoast(\".--.-..-......----.'\") should return \"Medium\".", () => {
        expect(detectRoast(".--.-..-......----.'")).toEqual("Medium");
    });
    test("6. detectRoast(\"..-..-..-..-....-.-.\") should return \"Dark\".", () => {
        expect(detectRoast("..-..-..-..-....-.-.")).toEqual("Dark");
    });
    test("7. detectRoast(\"-'-''''''..-'.''-'.'\") should return \"Light\".", () => {
        expect(detectRoast("-'-''''''..-'.''-'.'")).toEqual("Light");
    });
});