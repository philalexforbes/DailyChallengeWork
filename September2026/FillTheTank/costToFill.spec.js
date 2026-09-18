const costToFill = require('./costToFill');

describe('Given a tank size, the current fuel level, and the cost return the cost to fill the tank.', () => {
    test('1. costToFill(20, 0, 4.00) should return "$80.00".', () =>{ 
        expect(costToFill(20, 0, 4.00)).toEqual("$80.00");
    });
    test('2. costToFill(15, 10, 3.50) should return "$17.50".', () =>{ 
        expect(costToFill(15, 10, 3.50)).toEqual("$17.50");
    });
    test('3. costToFill(18, 9, 3.25) should return "$29.25".', () =>{ 
        expect(costToFill(18, 9, 3.25)).toEqual("$29.25");
    });
    test('4. costToFill(12, 12, 4.99) should return "$0.00".', () =>{ 
        expect(costToFill(12, 12, 4.99)).toEqual("$0.00");
    });
    test('5. costToFill(15, 9.5, 3.98) should return "$21.89".', () =>{ 
        expect(costToFill(15, 9.5, 3.98)).toEqual("$21.89");
    });
});