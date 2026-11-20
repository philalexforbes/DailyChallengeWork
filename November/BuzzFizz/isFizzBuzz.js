//https://www.freecodecamp.org/learn/daily-coding-challenge/11-26
// Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

//     Numbers that are multiples of 3 are replaced with "Fizz"
//     Numbers that are multiples of 5 are replaced with "Buzz"
//     Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
//     All other numbers remain as integers in ascending order, starting from 1.
//     The array must start at 1 and have no missing or extra elements.

const isFizzBuzz = (sequence) => {
    let n = 1;
    for(let i = 0; i < sequence.length; i++){
        if(n % 3 === 0 && n % 5 === 0){
            if(sequence[i] !== 'FizzBuzz'){
                return false;
            }
        }
        else if(n % 3 === 0) {
            if(sequence[i] !== 'Fizz'){
                return false;
            }
        }
        else if(n % 5 === 0){
            if(sequence[i] !== 'Buzz'){
                return false;
            }
        }
        else{
            if(sequence[i] !== n){
                return false;
            }
        }
        n = n + 1;
    }
    return true;
}

module.exports = isFizzBuzz;