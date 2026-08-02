//https://www.freecodecamp.org/learn/daily-coding-challenge/08-02
// Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.

//     The apex predator is the animal that is never prey to another animal.
//     Return the chain as an array of strings.

const getFoodChain = pairs => {
    const foodChain = [];
    let predatorArrayIndex = 0;

    for(let i = 0; i < pairs.length;){
        let predator = pairs[i][0];
        const chain = pairs.flat();
        let index = chain.indexOf(predator);
        chain.splice(index, 1);
        if(!chain.includes(predator)) {
            if(!foodChain.includes(predator)) {
                foodChain.push(pairs[i].shift());
            }
            predator = pairs[i][1];
            foodChain.push(pairs[i].pop());
            pairs.splice(i, 1);
            if(pairs.length === 0){
                break;
            }
            i = 0;
            predatorArrayIndex = predatorArrayIndex + 1;
        }
        else{
            i = i + 1;
        }
    }

    return foodChain;
}

module.exports = getFoodChain;