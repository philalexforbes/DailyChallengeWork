const adjustThermostat = require('./adjustThermostat');

describe('Given a temp and the target temp, return if the temp must be adjusted.', () => {
    test('1. adjustThermostat(68, 72) should return "heat".', () => {
        expect(adjustThermostat(68, 72)).toEqual("heat");
    });
    test('2. adjustThermostat(75, 72) should return "cool".', () => {
        expect(adjustThermostat(75, 72)).toEqual("cool");
    });
    test('3. adjustThermostat(72, 72) should return "hold".', () => {
        expect(adjustThermostat(72, 72)).toEqual("hold");
    });
    test('4. adjustThermostat(-20.5, -10.1) should return "heat".', () => {
        expect(adjustThermostat(-20.5, -10.1)).toEqual("heat");
    });
    test('5. adjustThermostat(100, 99.9) should return "cool".', () => {
        expect(adjustThermostat(100, 99.9)).toEqual("cool");
    });
    test('6. adjustThermostat(0.0, 0.0) should return "hold".', () => {
        expect(adjustThermostat(0.0, 0.0)).toEqual("hold");
    });
});