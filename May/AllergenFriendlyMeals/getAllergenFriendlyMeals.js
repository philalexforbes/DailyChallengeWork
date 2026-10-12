//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-06
// Given an array of meals and an array of allergens to avoid, return the names of all the meals that contain none of the given allergens.
//     Each meal is in the format [meal, allergens], where meal is the name of the meal, and allergens is an array of the allergens the meal contains. For example, ["pasta", ["wheat", "milk"]].
//     Allergens to avoid will be an array of strings.
// Return safe meal names in the same order given. If no meal is safe, return an empty array.

const getAllergenFriendlyMeals = (meals, allergens) => {
    let friendlyMeals = [];

    for(let i = 0; i < meals.length; i++) {
        for(let j = 0; j < meals[i][1].length; j++) {
            if(allergens.includes(meals[i][1][j])){
                meals.splice(i,1);
                i--;
                break;
            }
        }
    }
    for(let i = 0; i < meals.length; i++){
        friendlyMeals.push(meals[i][0])
    }
   return friendlyMeals;
}

module.exports = getAllergenFriendlyMeals;