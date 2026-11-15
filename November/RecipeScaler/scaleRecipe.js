//https://www.freecodecamp.org/learn/daily-coding-challenge/11-22
// Given an array of recipe ingredients and a number to scale the recipe, 
// return an array with the quantities scaled accordingly.
//     Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
//     Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
//     Return the scaled items in the same order they are given.

const scaleRecipe = (ingredients, scale) => {
    const scaledRecipe = [];
    const regex = /\d*\.?\d+/gm;

    for(let i = 0; i < ingredients.length; i++) {
        let quantity = Number(ingredients[i].match(regex)[0]);
        quantity = quantity * scale;
        scaledRecipe.push(ingredients[i].replace(regex, quantity));
    }
    return scaledRecipe;
}

module.exports = scaleRecipe;