//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-01
// Given an array of words, return a 2d array of the words grouped into anagrams.
//     Words are anagrams if they contain the same letters in any order.
//     Each word belongs to exactly one group.
//     Return order doesn't matter.

const groupAnagrams = (words) => {
    let anagrams = [];
    let group1 = []; 
    group1.push(words.shift());
    let words1 = structuredClone(words);
    let word1Sorted = group1[0].split('').sort((a,b) => a.localeCompare(b)).join('');

    for(let i = 0; i < words.length; i++) {
        if(word1Sorted.length === words[i].length) {
            let word2 = words[i].split('').sort((a,b) => a.localeCompare(b)).join('');
            if(word1Sorted === word2) {
                group1.push(words[i]);
                let index = words1.indexOf(words[i]);
                if(index > -1){
                    words1.splice(index,1)
                }
            }
        }
    }

    let group2 = [];
    group2.push(words1.shift());
    words = structuredClone(words1);
    word1Sorted = group2[0].split('').sort((a,b) => a.localeCompare(b)).join('');
    for(let i = 0; i < words.length; i++) {
        console.log(words[i]);
        if(word1Sorted.length === words[i].length) {
            let word2 = words[i].split('').sort((a,b) => a.localeCompare(b)).join('');
            if(word1Sorted === word2) {
                group2.push(words[i]);
                let index = words1.indexOf(words[i]);
                if(index > -1){
                    words1.splice(index,1)
                }
            }
        }
    }
    words = structuredClone(words1);

    let group3 = [];
    group3.push(words.shift());
    word1Sorted = group3[0].split('').sort((a,b) => a.localeCompare(b)).join('');
    for(let i = 0; i < words.length; i++) {
        if(word1Sorted.length === words[i].length) {
            let word2 = words[i].split('').sort((a,b) => a.localeCompare(b)).join('');
            if(word1Sorted === word2) {
                group3.push(words[i]);
                let index = words1.indexOf(words[i]);
                if(index > -1){
                    words1.splice(index,1);
                }
            }
        }
    }

    anagrams.push(group1, group2, group3);
    console.log(anagrams);
    return anagrams;
}

module.exports = groupAnagrams;