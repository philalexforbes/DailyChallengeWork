const getMeetingTime = require('./getMeetingTime');

describe('Given a 3D array of availabilities for two people return te first free hour of availability shared between the two people.', () => {
    test('1. getMeetingTime([[[10, 12], [15, 16]], [[11, 14], [15, 16]]]) should return 11.', () => {
        expect(getMeetingTime([[[10, 12], [15, 16]], [[11, 14], [15, 16]]]))
        .toEqual(11);
    });
    test('2. getMeetingTime([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]]) should return 13.', () => {
        expect(getMeetingTime([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]]))
        .toEqual(13);
    });
    test('3. getMeetingTime([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]]) should return 9.', () => {
        expect(getMeetingTime([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]]))
        .toEqual(9);
    });
    test('4. getMeetingTime([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]]) should return None.', () => {
        expect(getMeetingTime([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]]))
        .toEqual("None");
    });
    test('5. getMeetingTime([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]]) should return 21.', () => {
        expect(getMeetingTime([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]]))
        .toEqual(21);
    });
});