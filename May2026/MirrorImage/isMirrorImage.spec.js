const isMirrorImage = require('./isMirrorImage');

describe('Given a pair of strings determine if the second string is a mirrored image of the first.', () => {
    test('1. isMirrorImage("[HOW]", "[WOH]") should return true.', () => {
        expect(isMirrorImage("[HOW]", "[WOH]")).toEqual(true);
    });
    test('2. isMirrorImage("MOM", "MOM") should return true.', () => {
        expect(isMirrorImage("MOM", "MOM")).toEqual(true);
    });
    test('3. isMirrorImage("vow", "wov") should return true.', () => {
        expect(isMirrorImage("vow", "wov")).toEqual(true);
    });
    test('4. isMirrorImage("TIM", "TIM") should return false.', () => {
        expect(isMirrorImage("TIM", "TIM")).toEqual(false);
    });
    test('5. isMirrorImage("{WOW}", "}WOW{") should return false.', () => {
        expect(isMirrorImage("{WOW}", "}WOW{")).toEqual(false);
    });
    test('6. isMirrorImage("XXVII", "IIV%X") should return false.', () => {
        expect(isMirrorImage("XXVII", "IIV%X")).toEqual(false);
    });
    test('7. isMirrorImage("><(((*>", "<*)))><") should return true.', () => {
        expect(isMirrorImage("><(((*>", "<*)))><")).toEqual(true);
    });
    test('8. isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW") should return true.', () => {
        expect(isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW")).toEqual(true);
    });
});