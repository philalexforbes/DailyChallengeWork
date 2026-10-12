const calculateParkingFee = require('./calculateParkingFee');

describe('Given a parking time and a leaving time return the correct fee for the time spent parked.', () => {
    test('1. calculateParkingFee("09:00", "11:00") should return "$6".', () => {
        expect(calculateParkingFee("09:00", "11:00")).toEqual("$6");
    });
    test('2. calculateParkingFee("10:00", "10:30") should return "$5".', () => {
        expect(calculateParkingFee("10:00", "10:30")).toEqual("$5");
    });
    test('3. calculateParkingFee("08:10", "10:45") should return "$9".', () => {
        expect(calculateParkingFee("08:10", "10:45")).toEqual("$9");
    });
    test('4. calculateParkingFee("14:40", "23:10") should return "$27".', () => {
        expect(calculateParkingFee("14:40", "23:10")).toEqual("$27");
    });
    test('5. calculateParkingFee("18:15", "01:30") should return "$34".', () => {
        expect(calculateParkingFee("18:15", "01:30")).toEqual("$34");
    });
    test('6. calculateParkingFee("11:11", "11:10") should return "$82".', () => {
        expect(calculateParkingFee("11:11", "11:10")).toEqual("$82");
    });
});