const getItineraryCount = require('./getItineraryCount');

describe('Given a list of stops return the number of possible itinerary arrangements with meals added in.', () => {
    test('1. getItineraryCount(["library", "park"]) should return 2.', () => {
        expect(getItineraryCount(["library", "park"])).toEqual(2);
    });
    test('2. getItineraryCount(["library", "park", "arcade"]) should return 18.', () => {
        expect(getItineraryCount(["library", "park", "arcade"])).toEqual(18);
    });
    test('3. getItineraryCount(["library", "park", "arcade", "store"]) should return 120.', () => {
        expect(getItineraryCount(["library", "park", "arcade", "store"])).toEqual(120);
    });
    test('4. getItineraryCount(["library", "park", "arcade", "store", "cafe"]) should return 840.', () => {
        expect(getItineraryCount(["library", "park", "arcade", "store", "cafe"])).toEqual(840);
    });
    test('5. getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]) should return 55440.', () => {
        expect(getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"])).toEqual(55440);
    });
});