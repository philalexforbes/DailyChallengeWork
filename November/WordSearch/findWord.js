//https://www.freecodecamp.org/learn/daily-coding-challenge/11-09
// Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.
//     The given matrix will be filled with all lowercase letters (a-z).
//     The word to find will always be in the matrix exactly once.
//     The word to find will always be in a straight line in one of these directions:
//         left to right
//         right to left
//         top to bottom
//         bottom to top
// For example, given the matrix:
// [
//   ["a", "c", "t"],
//   ["t", "a", "t"],
//   ["c", "t", "c"]
// ]
// And the word "cat", return:
// [[0, 1], [2, 1]]
// Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).

const findWord = (matrix, word) => {
    const directions = [
        [-1,0], [0,-1], [0,1], [1,0]
    ];
    const length = word.length;
    
    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[0].length; c++){
            if(matrix[r][c] !== word[0]) continue

            for(let [dr,dc] of directions){
                const rowEnd = r + dr * (length -1);
                const colEnd = c + dc * (length -1);

                if(
                    rowEnd < 0 || 
                    colEnd < 0 || 
                    rowEnd >= matrix.length || 
                    colEnd >= matrix[0].length
                ) { 
                        continue 
                    }

                let found = true;
                for(let i = 0; i < length; i++){
                    if(matrix[r + dr * i]?.[c + dc * i] !== word[i]){
                        found = false;
                        break;
                    }
                }

                if(found) {
                    return [[r,c], [rowEnd, colEnd]];
                }
            }
        }
    }
    return matrix;
}

module.exports = findWord;