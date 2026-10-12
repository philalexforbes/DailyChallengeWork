const cast = require('./cast');

describe('Given a string of spells return the correct score for those spells.', () => {
    test('1. cast("fihwl") should return 33.', () => {
        expect(cast("fihwl")).toEqual(33);
    });
    test('2. cast("lwswfi") should return 45.', () => {
        expect(cast("lwswfi")).toEqual(45);
    });
    test('3. cast("wislhfl") should return 37.', () => {
        expect(cast("wislhfl")).toEqual(37);
    });
    test('4. cast("sihwlih") should return 50.', () => {
        expect(cast("sihwlih")).toEqual(50);
    });
    test('5. cast("wishlfihwslwifihl") should return 101.', () => {
        expect(cast("wishlfihwslwifihl")).toEqual(101);
    });
});