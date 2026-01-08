const formatDate = require('./formatDate');

describe('Verify the correct Date format is returned', () => {
    test('formatDate("December 6, 2025") should return "2025-12-06".', ()=> {
        expect(formatDate('December 6, 2025')).toEqual('2025-12-06');
    });
    test('formatDate("January 1, 2000") should return "2000-01-01".', ()=> {
        expect(formatDate('January 1, 2000')).toEqual('2000-01-01');
    });
    test('formatDate("November 11, 1111") should return "1111-11-11".', ()=> {
        expect(formatDate('November 11, 1111')).toEqual('1111-11-11');
    });
    test('formatDate("September 7, 512") should return "512-09-07".', ()=> {
        expect(formatDate('September 7, 512')).toEqual('512-09-07');
    });
    test('formatDate("May 4, 1950") should return "1950-05-04".', ()=> {
        expect(formatDate('May 4, 1950')).toEqual('1950-05-04');
    });
    test('formatDate("February 29, 1992") should return "1992-02-29".', ()=> {
        expect(formatDate('February 29, 1992')).toEqual('1992-02-29');
    });
})