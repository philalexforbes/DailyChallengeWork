const sort = require('./sort');

describe('Given an array of email sort them by domain first and name second.', () => {
    test('1. sort(["jill@mail.com", "john@example.com", "jane@example.com"]) should return ["jane@example.com", "john@example.com", "jill@mail.com"].', () => {
        expect(sort(["jill@mail.com", "john@example.com", "jane@example.com"]))
        .toEqual(["jane@example.com", "john@example.com", "jill@mail.com"]);
    });
    test('2. sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]) should return ["bob@mail.com", "carol@mail.com", "alice@zoo.com"].', () => {
        expect(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]))
        .toEqual(["bob@mail.com", "carol@mail.com", "alice@zoo.com"]);
    });
    test('3. sort(["user@z.com", "user@y.com", "user@x.com"]) should return ["user@x.com", "user@y.com", "user@z.com"].', () => {
        expect(sort(["user@z.com", "user@y.com", "user@x.com"]))
        .toEqual(["user@x.com", "user@y.com", "user@z.com"]);
    });
    test('4. sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]) should return ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"].', () => {
        expect(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]))
        .toEqual(["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]);
    });
    test('5. sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]) should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"].', () => {
        expect(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]))
        .toEqual(["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"]);
    });
} );