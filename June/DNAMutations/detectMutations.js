//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-24
// Given two DNA strands of equal length, return an array of indexes where the strands differ (mutations).
//     DNA strands are strings made up of the characters "A", "T", "C", and "G"
//     Return the indexes in ascending order
//     If there are no mutations, return an empty array

const detectMutations = (strand1, strand2) => {
    const mutationIndexes = [];
    for(let i = 0; i < strand1.length; i++) {
        if(strand1[i] !== strand2[i]) {
            mutationIndexes.push(i);
        }
    }
    return mutationIndexes;
}

module.exports = detectMutations;