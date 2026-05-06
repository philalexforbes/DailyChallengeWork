const getAllergenFriendlyMeals = require('./getAllergenFriendlyMeals');

describe('Given a meal with a list of allergens contained, and the allergens to look return a list of meals that are free of those allergens.', () =>{ 
    test('1. getAllergenFriendlyMeals([["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]], ["milk"]) should return ["salad"].', () => {
        expect(getAllergenFriendlyMeals([["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]], ["milk"]))
        .toEqual(["salad"])
    });
    test('2. getAllergenFriendlyMeals([["steak", ["soy"]], ["fried rice", []], ["fish tacos", ["fish", "wheat"]], ["chicken parmesan", ["wheat", "milk"]]], ["soy", "fish"]) should return ["fried rice", "chicken parmesan"].', () => {
        expect(getAllergenFriendlyMeals([["steak", ["soy"]], ["fried rice", []], ["fish tacos", ["fish", "wheat"]], ["chicken parmesan", ["wheat", "milk"]]], ["soy", "fish"]))
        .toEqual(["fried rice", "chicken parmesan"])
    });
    test('3. getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["eggs", "milk"]) should return ["oatmeal", "granola", "toast"].', () => {
        expect(getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["eggs", "milk"]))
        .toEqual(["oatmeal", "granola", "toast"])
    });
    test('4. getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["wheat", "nuts"]) should return ["granola", "yogurt", "eggs"].', () => {
        expect(getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["wheat", "nuts"]))
        .toEqual(["granola", "yogurt", "eggs"])
    });
});