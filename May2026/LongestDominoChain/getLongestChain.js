//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-16
// Given a 2D array representing a set of dominoes, return the longest valid chain.
//     Each domino is a pair of numbers from 0–6, e.g. [3, 2].
//     A chain is valid when the second number of each domino matches the first number of the next.
//     The first number of the first domino and the second number of the last one don't need to match anything.
//     Any domino can be flipped, so [3, 2] can be played as [2, 3].
//     There is always exactly one longest valid chain.
// For example, given [[1, 2], [4, 5], [2, 3]], return [[1, 2], [2, 3]].

const getLongestChain = (dominoes) => {
    let chains = [];
    for(let i = 0; i < dominoes.length; i++) {
        let tempChain = [];
        const first = dominoes.splice(i, 1);
        let copyFirst = first;
        let tempDominoes = structuredClone(dominoes);
        let temp;
        for(let j = 0; j < tempDominoes.length; j++) {
            //we check here if there are any array elements with matching digits of the last digit of the previous domino and grab them so that they can be used as soon as possible
            let index = tempDominoes.map(a => a[0] === copyFirst[0][1] && a[1] === copyFirst[0][1]).indexOf(true);
            index = index !== -1 ? index : j;
            let x = tempDominoes[index][0];
            let y = tempDominoes[index][1];
            if(copyFirst[0][1] === x) {
                if(temp === undefined) {
                    tempChain.push(copyFirst[0]);
                }
                temp = tempDominoes.splice([index],1);
                tempChain.push(temp[0]);
                copyFirst = temp;
                //we need to reset to -1 because otherwise when the loop increments element 0 may be skipped
                j = -1;
            }
            else if(copyFirst[0][1] === y) {
                if(temp === undefined) {
                    tempChain.push(copyFirst[0]);
                }
                tempDominoes[index][0] = y;
                tempDominoes[index][1] = x;
                temp = tempDominoes.splice([index],1);
                tempChain.push(temp[0]);
                copyFirst = temp;
                j = -1;
            }
        }
        //ensuring that empty arrays don't get pushed to the main array
        if(tempChain.length !== 0){
            chains.push(tempChain);
        }
        dominoes.splice(i, 0, first[0]);
    }
    chains.sort((a,b) => b.length - a.length);
    return chains[0];
}

module.exports = getLongestChain;