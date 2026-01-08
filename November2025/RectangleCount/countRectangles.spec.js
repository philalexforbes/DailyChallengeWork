const countRectangles = require('./countRectangles')

describe('Verify that the number of rectangles is correct', () => {
    test('Rectangle with a width and height of 1x3 should return 6 rectangles', () =>{
        expect(countRectangles(1,3)).toEqual(6);
    });
    test('Rectangle with a width and height of 3x2 should return 18 rectangles', () =>{
        expect(countRectangles(3,2)).toEqual(18);
    });
    test('Rectangle with a width and height of 1x2 should return 3 rectangles', () =>{
        expect(countRectangles(1,2)).toEqual(3);
    });
    test('Rectangle with a width and height of 5x4 should return 150 rectangles', () =>{
        expect(countRectangles(5,4)).toEqual(150);
    });
    test('Rectangle with a width and height of 11x19 should return 12540 rectangles', () =>{
        expect(countRectangles(11,19)).toEqual(12540);
    });
})