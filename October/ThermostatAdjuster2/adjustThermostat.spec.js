const adjustThermostat = require('./adjustThermostat');

describe('Given a temp in F and a target temp in C return the needed adjustment in C to meet that target.', () => {
    test('1. adjustThermostat(32, 0) should return "Hold".', () => {
        expect(adjustThermostat(32, 0)).toEqual("Hold");
    });
    test('2. adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".', () => {
        expect(adjustThermostat(70, 25)).toEqual("Heat: 7.0 degrees Fahrenheit");
    });
    test('3. adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".', () => {
        expect(adjustThermostat(72, 18)).toEqual("Cool: 7.6 degrees Fahrenheit");
    });
    test('4. adjustThermostat(212, 100) should return "Hold".', () => {
        expect(adjustThermostat(212, 100)).toEqual("Hold");
    });
    test('5. adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".', () => {
        expect(adjustThermostat(59, 22)).toEqual("Heat: 12.6 degrees Fahrenheit");
    });
});