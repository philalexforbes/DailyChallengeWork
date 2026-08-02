const getFoodChain = require('./getFoodChain');

describe('Given an array of predator and prey return the food chain with the apex predator down.', () => {
    test('1. getFoodChain([["cat", "mouse"]]) should return ["cat", "mouse"].', () => {
        expect(getFoodChain([["cat", "mouse"]]))
        .toEqual(["cat", "mouse"]);
    });
    test('2. getFoodChain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].', () => {
        expect(getFoodChain([["wolf", "deer"], ["deer", "grass"]]))
        .toEqual(["wolf", "deer", "grass"]);
    });
    test('3. getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].', () => {
        expect(getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]))
        .toEqual(["hawk", "snake", "frog", "fly"]);
    });
    test('4. getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].', () => {
        expect(getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]))
        .toEqual(["eagle", "fox", "rabbit", "grass"]);
    });
    test('5. getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].', () => {
        expect(getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]))
        .toEqual(["orca", "seal", "salmon", "herring", "shrimp", "plankton"]);
    });
});