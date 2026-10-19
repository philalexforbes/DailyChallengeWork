const extractAttributes = require('./extractAttributes');

describe('Given an HTML block return the attributes and their values if appicable.', () => {
    test('1. extractAttributes(\'<span class="red"></span>\') should return ["class, red"].', () => {
        expect(extractAttributes('<span class="red"></span>')).toEqual(["class, red"]);
    });
    test('2. extractAttributes(\'<meta charset="UTF-8" />\') should return ["charset, UTF-8"].', () => {
        expect(extractAttributes('<meta charset="UTF-8" />')).toEqual(["charset, UTF-8"]);
    });
    test('3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].', () => {
        expect(extractAttributes("<p>Lorem ipsum dolor sit amet</p>")).toEqual([]);
    });
    test('4. extractAttributes(\'<input name="email" type="email" required="true" />\') should return ["name, email", "type, email", "required, true"].', () => {
        expect(extractAttributes('<input name="email" type="email" required="true" />')).toEqual(["name, email", "type, email", "required, true"]);
    });
    test('5. extractAttributes(\'<button id="submit" class="btn btn-primary">Submit</button>\') should return ["id, submit", "class, btn btn-primary"].', () => {
        expect(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>')).toEqual(["id, submit", "class, btn btn-primary"]);
    });
});