const getNumberOfPlants = require('./getNumberOfPlants');

describe('Determine that the correct number of plants per field is returned', ()=> {
    test('1. getNumberOfPlants(1, "acres", "corn") should return 4046.', ()=> {
        expect(getNumberOfPlants(1, "acres", "corn")).toEqual(4046);
    });
    test('2. getNumberOfPlants(2, "hectares", "lettuce") should return 100000.', ()=> {
        expect(getNumberOfPlants(2, "hectares", "lettuce")).toEqual(100000);
    });
    test('3. getNumberOfPlants(20, "acres", "soybeans") should return 161874.', ()=> {
        expect(getNumberOfPlants(20, "acres", "soybeans")).toEqual(161874);
    });
    test('4. getNumberOfPlants(3.75, "hectares", "tomatoes") should return 150000.', ()=> {
        expect(getNumberOfPlants(3.75, "hectares", "tomatoes")).toEqual(150000);
    });
    test('5. getNumberOfPlants(16.75, "acres", "tomatoes") should return 271139.', ()=> {
        expect(getNumberOfPlants(16.75, "acres", "tomatoes")).toEqual(271139);
    });
});