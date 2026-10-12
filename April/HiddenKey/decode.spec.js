const decode = require('./decode');

describe('Given a message decode it and return the decoded message.', () => {
    test('1. decode("YAVJYNXE") should return "CONGRATS".', () => {
        expect(decode("YAVJYNXE")).toEqual("CONGRATS");
    });
    test('2. decode("YALLUT PQUMJP") should return "CODING LEGEND".', () => {
        expect(decode("YALLUT PQUMJP")).toEqual("CODING LEGEND");
    });
    test('3. decode("UAC DYR EISAKYM") should return "YOU ARE AWESOME".', () => {
        expect(decode("UAC DYR EISAKYM")).toEqual("YOU ARE AWESOME");
    });
    test('4. decode("GQMS NBMZU") should return "KEEP GOING".', () => {
        expect(decode("GQMS NBMZU")).toEqual("KEEP GOING");
    });
    test('5. decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB") should return "A WINNER IS A DREAMER WHO NEVER GIVES UP".', () => {
        expect(decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB")).toEqual("A WINNER IS A DREAMER WHO NEVER GIVES UP");
    });
});