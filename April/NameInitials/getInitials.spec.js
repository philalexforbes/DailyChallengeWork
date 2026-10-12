const getInitials = require('./getInitials');

describe('Given a name return the initials for that name.', () => {
    test('1. getInitials("Tommy Millwood") should return "T.M.".', () => {
        expect(getInitials("Tommy Millwood")).toEqual("T.M.");
    });
    test('2. getInitials("Savanna Puddlesplash") should return "S.P.".', () => {
        expect(getInitials("Savanna Puddlesplash")).toEqual("S.P.");
    });
    test('3. getInitials("Frances Cowell Conrad") should return "F.C.C.".', () => {
        expect(getInitials("Frances Cowell Conrad")).toEqual("F.C.C.");
    });
    test('4. getInitials("Dragon") should return "D.".', () => {
        expect(getInitials("Dragon")).toEqual("D.");
    });
    test('5. getInitials("Dorothy Vera Clump Haverstock Norris") should return "D.V.C.H.N.".', () => {
        expect(getInitials("Dorothy Vera Clump Haverstock Norris")).toEqual("D.V.C.H.N.");
    });
});