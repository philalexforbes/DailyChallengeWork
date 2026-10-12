const navigateTrail = require('./navigateTrail');

describe('Given a map return the correct moves needed to traverse.', () => {
    test('1. navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) should return "RDDRDD".', () => {
        expect(navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"])).toEqual("RDDRDD");
    });
    test('2. navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) should return "RRUUURR".', () => {
        expect(navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"])).toEqual("RRUUURR");
    });
    test('3. navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) should return "DLDDRRRRD".', () => {
        expect(navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"])).toEqual("DLDDRRRRD");
    });
    test('4. navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) should return "RRRDDL".', () => {
        expect(navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"])).toEqual("RRRDDL");
    });
    test('5. navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) should return "ULLLUUURRRRRRDDDR".', () => {
        expect(navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"])).toEqual("ULLLUUURRRRRRDDDR");
    });
})